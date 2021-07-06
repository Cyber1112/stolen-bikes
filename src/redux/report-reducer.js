import { casesAPI } from "../api/api.js";
import store from "./store.js";

import { MY_CLIENT_ID } from "./const.js";

const ADD_REPORTS = "report-reducer/ADD_REPORTS";
const ADD_NEW_REPORT_SUCCESS = "report-reducer/ADD_REPORT";

const initialState = {
    reports: [],
};

//------------------REDUCER----------------------

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPORTS:
      // console.log(action.reports)
      return {
        ...state,
        reports: action.reports,
      };

    case ADD_NEW_REPORT_SUCCESS:
      return {
        ...state,
        reports: [...state.reports, action.report]
      };
            
      
    default:
      return state;
  }
};

//--------------ACTION CREATORS------------

export const addReports = (reports) => ({
  type: ADD_REPORTS,
  reports,
});

export const addNewReportSuccess = (report) => ({
  type: ADD_NEW_REPORT_SUCCESS,
  report,
});

//--------------------THUNKS---------------

export const addNewUnauthorizedReport = (reportData) => (dispatch) => {
  const newReport = {
    status: "new",
    date: Date.now(),
    updateAt: Date.now(),
    createdAt: Date.now(),
    licenseNumber: reportData.licenseNumber,
    color: reportData.color,
    type: reportData.type,
    ownerFullName: reportData.ownerFullName,
    description: reportData.description,
    clientId: MY_CLIENT_ID,
  };
  casesAPI
    .addNewUnauthorizedReport(newReport)
    .then((res) => {
      if (res.status == 200) {
        alert("Ваше сообщение отправлено");
        dispatch(addNewReportSuccess(res.data));
      }
    })
    .catch((req) => alert(req.message));
};

export const addNewAuthorizedReport = (reportData) => (dispatch) => {
  const token = store.getState().auth.token
  const newReport = {
    status: "new",
    date: Date.now(),
    updateAt: Date.now(),
    createdAt: Date.now(),
    licenseNumber: reportData.licenseNumber,
    color: reportData.color,
    type: reportData.type,
    ownerFullName: reportData.ownerFullName,
    officer: reportData.officer,
    description: reportData.description,
    resolution: "",
  };
  casesAPI
    .addNewAuthorizedReport(token, newReport)
    .then((res) => {
      if (res.status == 200) {
        alert("Ваше сообщение отправлено");
        dispatch(addNewReportSuccess(res.data));
      }
    })
    .catch((req) => alert(req.message));
};

export const getReports = () => (dispatch) => {
  const token = store.getState().auth.token;
  casesAPI
    .getReports(token)
    .then((res) => dispatch(addReports(res.data)))
    .catch((req) => alert(req.message));
};

export default reportReducer;