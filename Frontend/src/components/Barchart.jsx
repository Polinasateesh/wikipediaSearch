import React from "react";
import { Card, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <Card className="chart-card" elevation={3} style={{ padding: 16, borderRadius: 12 }}>
      <Typography variant="h6" gutterBottom>
        Analytical Data
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis dataKey="count" />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Legend />
          <Bar dataKey="count" fill="#4CAF50" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default BarChartComponent;
