import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      const getCurrentDate = () => {
        const date = new Date();

        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        const time = date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        const day = weekdays[date.getDay()];
        const month = months[date.getMonth()];
        return `${time} • ${day}, ${month} ${date.getDate()}`;
      };
      setDate(getCurrentDate());
    }, 1000);
  });

  return <div className="text-gray-600 text-lg font-medium">{date}</div>;
}
