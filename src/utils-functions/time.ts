"use client";

import { useEffect, useState } from "react";

export function useTime() {
  const [parisTime, setParisTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const nowUTC = new Date();
      const time = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
      }).format(nowUTC);
      setParisTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);

    return () => clearInterval(interval);
  }, []);

  return parisTime;
}

// You can change this file to change the date (of the tag).
