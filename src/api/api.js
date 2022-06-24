import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '680d6832-2492-479a-8fe2-20cfebc65ed9',
  },
});

export const usersAPI = {

  getUserListRequest(userListCurrentPage = 1, userListPageSize = 10) {
    return instance.get(`users?page=${userListCurrentPage}&count=${userListPageSize}`)
      .then(response => {
        return response.data;
      })
  },
  followRequest(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  unfollowRequest(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },
  getProfileRequest(userId) {
    console.warn('Obsolete method. Please use profileAPI.getProfileRequest');
    return profileAPI.getProfileRequest(userId);
  }
}


export const profileAPI = {
  getProfileRequest(userId) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data;
      })
  },
  getStatusRequest(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateAuthStatusRequest(status) {
    return instance.put(`profile/status`, { status: status });
  }
}


export const authMeAPI = {
  authMeRequest() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      })
  },
  authLoginRequest(formData) {
    return instance.post(`auth/login`, {
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe
    }).then(response => {
      return response.data;
    })
  },
  authLogOutRequest() {
    return instance.delete(`auth/login`)
    .then(response => {
      return response.data;
    })
  }
}
