import React from "react";
import axios from 'axios'

const Body = () => {
  const accessToken = "a2hha2ltLnpodW1hZ2FsaXlldkBtYWlsLnJ1";
  const apiUrl = "http://84.201.129.203:8888/";
  const authAxios = axios.create({
    baseUrl: apiUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  });
  const fetchData = () => {
    const result = authAxios.get('http://84.201.129.203:8888')
    console.log(result)
  }
  return (
    <div className="body-container">
      <div className="body-content_container">
        <h3>If you have any problem with </h3>
        <button className="btn btn-mes" onClick={fetchData}>Message</button>
      </div>
    </div>
  );
};
export default Body;
