
import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChartComponent from "./Barchart";
import PieChartComponent from "./Piechart";
import "../App.css";

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {

    const jwtToken=window.localStorage.getItem('jwtToken')

    axios
      .get("http://localhost:5000/api/wikipedia/dashboard", {
        headers: { Authorization: `Bearer ${jwtToken}` }
      })
      .then((response) => setAnalyticsData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Dash Board</h1>
      <div className="chart-container">
        <BarChartComponent data={analyticsData} />
        <PieChartComponent data={analyticsData} />
      </div>
    </>
  );
};

export default Dashboard;
