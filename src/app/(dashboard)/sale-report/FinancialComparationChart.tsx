"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartPoint = {
  name: string;
  current: number;
  past: number;
};

export default function FinancialComparationChart({
  data,
}: {
  data: ChartPoint[];
}) {
  return (
    <div className="w-full h-[160px] px-[10px] my-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
        >
          {/* Light tooltip only */}
          <Tooltip
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
              backgroundColor: "rgba(255,255,255,0.9)",
              border: "1px solid #e5e7eb",
            }}

          />

          {/* Past Week line */}
          <Line
            type="monotone"
            dataKey="past"
            stroke="#d1d5db" // soft gray
            strokeWidth={2}
            dot={false}
          />

          {/* Current Week line */}
          <Line
            type="monotone"
            dataKey="current"
            stroke="#16a34a" // emerald-600
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4, fill: "#16a34a" }}
          />

          {/* Minimal X axis */}
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            dy={5}
            hide
          />

          {/* Hidden Y axis (cleaner look) */}
          <YAxis hide />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
