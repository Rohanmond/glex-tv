import { Response } from 'miragejs';
import { requiresAuth } from '../utils/authUtils';

/**
 * All the routes related to Liked Videos are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting videos from user's likes.
 * send GET Request at /api/user/likes
 * */
export const getLaterHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ['The email you entered is not Registered. Not Found error'],
        }
      );
    }
    return new Response(200, {}, { laters: user.laters });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding videos to user's likes.
 * send POST Request at /api/user/likes
 * body contains {video}
 * */

export const addItemToLaterVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const { video } = JSON.parse(request.requestBody);
    if (user.laters.some((item) => item.id === video.id)) {
      return new Response(
        409,
        {},
        {
          errors: ['The video is already in your watch later list'],
        }
      );
    }
    user.laters.push(video);
    return new Response(201, {}, { laters: user.laters });
  }
  return new Response(
    404,
    {},
    {
      errors: ['The email you entered is not Registered. Not Found error'],
    }
  );
};

/**
 * This handler handles removing videos from user's likes.
 * send DELETE Request at /api/user/likes/:videoId
 * */

export const removeItemFromLateredVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const videoId = request.params.videoId;
    const filteredLaters = user.laters.filter((item) => item._id !== videoId);
    this.db.users.update({ laters: filteredLaters });
    return new Response(200, {}, { laters: filteredLaters });
  }
  return new Response(
    404,
    {},
    { errors: ['The user you request does not exist. Not Found error.'] }
  );
};
