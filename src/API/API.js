import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '191e4d5e-01b7-42e2-a42b-1d59a3aa3640',
  },
});

// ===========================
export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  Unfollower(id) {
    return instance.delete('follow/' + id).then((response) => response.data);
  },
  follower(id) {
    return instance.post('follow/' + id).then((response) => response.data);
  },
};
export const profileAPI = {
  UsersProfile(usersId) {
    return instance.get('profile/' + usersId).then((response) => response.data);
  },
  getStatus(usersId) {
    return instance
      .get('profile/status/' + usersId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put('profile/status', {
        status: status,
      })
      .then((response) => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance
      .put('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
  update(profile) {
    return instance.put('profile', profile).then((response) => response.data);
  },
};
export const authAPI = {
  me() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post('auth/login', { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete('auth/login').then((response) => response.data);
  },
};
export const securityAPI = {
  getCaptcha() {
    return instance
      .get('security/get-captcha-url')
      .then((response) => response.data);
  },
};
export const delay = (ms) => new Promise((r) => setTimeout(() => r(), ms));
