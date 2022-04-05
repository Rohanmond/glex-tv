import axios from 'axios';

export const getAllVideosService = async () => {
  return axios.get('/api/videos');
};

export const updateAllVideosService = async ({ videoId, comments }) => {
  return axios.post(`/api/video/${videoId}`, { comments });
};

export const getAllCategoriesService = async () => {
  return axios.get('/api/categories');
};

export const loginService = async ({ email, password }) => {
  return axios.post('/api/auth/login', {
    email,
    password,
  });
};

export const signUpService = async ({ email, password, name }) => {
  return axios.post('/api/auth/signup', {
    email,
    password,
    name,
  });
};

export const getAllHistoryService = async ({ encodedToken }) => {
  return axios.get('/api/user/history', {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const postHistoryService = async ({ video, encodedToken }) => {
  return axios.post(
    '/api/user/history',
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const deleteHistoryService = async ({ videoId, encodedToken }) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const deleteAllHistoriesService = async ({ encodedToken }) => {
  return axios.delete('/api/user/history/all', {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const getAllPlaylistsService = async ({ encodedToken }) => {
  return axios.get('/api/user/playlists', {
    headers: {
      authorization: encodedToken,
    },
  });
};
export const postPlaylistService = async ({ playlist, encodedToken }) => {
  return axios.post(
    '/api/user/playlists',
    {
      playlist,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const deletePlayListService = async ({ playlistId, encodedToken }) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const getPlayListService = async ({ playlistId, encodedToken }) => {
  return axios.get(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const postVideoPlaylistService = async ({
  playlistId,
  video,
  encodedToken,
}) => {
  return axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const deleteVideoPlaylistService = async ({
  playlistId,
  videoId,
  encodedToken,
}) => {
  return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const getWatchLaterService = async ({ encodedToken }) => {
  return axios.get('/api/user/laters', {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const postWatchLaterService = async ({ video, encodedToken }) => {
  return axios.post(
    '/api/user/laters',
    {
      video,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const deleteVideoFromWatchLaterService = async ({
  videoId,
  encodedToken,
}) => {
  return axios.delete(`/api/user/laters/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const getLikedVideosService = async ({ encodedToken }) => {
  return axios.get('/api/user/likes', {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const addToLikedVideosService = async ({ encodedToken, video }) => {
  return axios.post(
    '/api/user/likes',
    {
      video,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const deleteLikedVideosService = async ({ videoId, encodedToken }) => {
  return axios.delete(`/api/user/likes/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
