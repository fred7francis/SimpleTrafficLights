import React, { useState, useEffect } from "react";

const TrafficLights = () => {
  const LIGHTS = {
    red: { time: 4000, next: "yellow" },
    yellow: { time: 1000, next: "green" },
    green: { time: 3000, next: "red" },
  };

  const [light, setLight] = useState("red");

  const wait = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const changeLight = async () => {
    await wait(LIGHTS[light]?.time);
    setLight(LIGHTS[light]?.next);
  };

  useEffect(() => {
    changeLight();
  }, [light]);

  return (
    <div className="traffic-lights container">
      <div className={`light ${light === "red" && light}`}></div>
      <div className={`light ${light === "yellow" && light}`}></div>
      <div className={`light ${light === "green" && light}`}></div>
    </div>
  );
};

export default TrafficLights;
