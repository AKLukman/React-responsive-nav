import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = () => {
  const data = [
    { id: "1", name: "Alice", math: 85, physics: 78, chemistry: 90 },
    { id: "2", name: "Bob", math: 72, physics: 85, chemistry: 76 },
    { id: "3", name: "Charlie", math: 90, physics: 88, chemistry: 82 },
    { id: "4", name: "David", math: 68, physics: 72, chemistry: 70 },
    { id: "5", name: "Eve", math: 78, physics: 80, chemistry: 85 },
    { id: "6", name: "Frank", math: 83, physics: 75, chemistry: 78 },
    { id: "7", name: "Grace", math: 76, physics: 82, chemistry: 88 },
    { id: "8", name: "Hannah", math: 91, physics: 89, chemistry: 92 },
    { id: "9", name: "Ivy", math: 79, physics: 83, chemistry: 80 },
    { id: "10", name: "Jack", math: 88, physics: 87, chemistry: 84 },
  ];

  return (
    <div>
      <h2>charts</h2>

      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="physics"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="math" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Charts;
