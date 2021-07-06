import * as axios from "axios";


const instance = (token) => {
  return axios.create({
    baseURL: "http://84.201.129.203:8888/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const authAPI = {
  signUp(userInfo) {
    return instance()
      .post(`/auth/sign_up`, userInfo)
      .then((response) => response);
  },
  signIn(userData) {
    return instance()
      .post(`/auth/sign_in`, userData)
      .then((response) => response);
  },
};

export const casesAPI = {
  addNewUnauthorizedReport(newReport) {
    return instance()
      .post(`/public/report`, newReport)
      .then((response) => response);
  },
  addNewAuthorizedReport(token, newReport) {
    return instance(token)
      .post(`/public/cases`, newReport)
      .then((response) => response);
  },
  getReports(token) {
    return instance(token)
      .get(`/cases`)
      .then((response) => response);
  },
}