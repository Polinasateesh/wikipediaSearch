import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer
} from "recharts";
import { Card, Typography } from "@mui/material";
import '../App.css';

const PieChartComponent = ({ data }) => {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF5733",
    "#33FF57"
  ];

  return (
    <Card className="chart-card" elevation={3} style={{ padding: 16, borderRadius: 12 }}>
      <Typography variant="h6" gutterBottom >
        Analytical Data
      </Typography>
     
      <ResponsiveContainer width="100%" height={270}>
        <PieChart>
          <Pie
            dataKey="count"
            startAngle={360}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="green"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, entry) => [ `Count: ${value}`]} />
          <Legend formatter={(value, entry) => `${entry.payload._id}: ${entry.payload.count}`} />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default PieChartComponent;
