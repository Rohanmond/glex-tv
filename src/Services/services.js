import axios from 'axios';

export const GetAllVideos = async () => {
  return axios.get('/api/videos');
};

export const GetAllCategories = async () => {
  return axios.get('/api/categories');
};

export const LoginService = async ({ email, password }) => {
  return axios.post('/api/auth/login', {
    email,
    password,
  });
};

export const SignUpService = async ({ email, password, name }) => {
  return axios.post('/api/auth/signup', {
    email,
    password,
    name,
  });
};

export const GetAllHistoryService = async ({ encodedToken }) => {
  return axios.get('/api/user/history', {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const PostHistoryService = async ({ video, encodedToken }) => {
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

export const DeleteHistoryService = async ({ videoId, encodedToken }) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const DeleteAllHistoriesService = async ({ encodedToken }) => {
  return axios.delete('/api/user/history/all', {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const GetAllPlaylistsService = async ({ encodedToken }) => {
  return axios.get('/api/user/playlists', {
    headers: {
      authorization: encodedToken,
    },
  });
};
export const PostPlaylistService = async ({ playlist, encodedToken }) => {
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

export const DeletePlayListService = async ({ playlistId, encodedToken }) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const GetPlayListService = async ({ playlistId, encodedToken }) => {
  return axios.get(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const PostVideoPlaylistService = async ({
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

export const DeleteVideoPlaylistService = async ({
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
