"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import { useState, useEffect } from "react";

const Home = () => {
  // const now = new Date();

  // const [curr, setCurr] = useState(now);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurr(now);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // });


  // const time = curr.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  // const date = (new Intl.DateTimeFormat("en-US", { dateStyle: "full" })).format(now);

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDateTime(prevDateTime => {
        // Check if the day has changed
        if (now.getDate() !== prevDateTime.getDate()) {
          return now; // Update date and time
        }
        return new Date(prevDateTime.setSeconds(prevDateTime.getSeconds() + 1)); // Update time
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata"
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-GB", { // en-GB for 24-hour format
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata"
    });
  };

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{formatTime(dateTime)}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{formatDate(dateTime)}</p>
          </div>
        </div>
      </div>
      {/* meeting type cards */}
      <MeetingTypeList />
    </section>
  )
}

export default Home;