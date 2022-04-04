import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: 'asassdafdgdk',
    name: 'Rohan Mondal',
    email: 'rohan@gmail.com',
    password: '1234abcd',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'asfdfdfsa',
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '1234abcd',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'jhhkjhwe',
    name: 'Lorem Ipsum',
    email: 'lorem@gmail.com',
    password: '1234abcd',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'rewrewasd',
    name: 'James Bond',
    email: 'james@gmail.com',
    password: '1234abcd',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
