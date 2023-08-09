import React, { useEffect } from "react";
import TrainCard from "../TrainCard";

const trainList = [
  {
    trainName: "Jodhpur Exp",
    trainNumber: 2344,
    departureTime: {
      Hours: 11,
      Minutes: 0,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 33,
      AC: 13,
    },
    price: {
      sleeper: 713,
      AC: 824,
    },
    delayedBy: 4,
  },
  {
    trainName: "Cuttack Exp",
    trainNumber: 2346,
    departureTime: {
      Hours: 12,
      Minutes: 3,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 10,
      AC: 1,
    },
    price: {
      sleeper: 592,
      AC: 773,
    },
    delayedBy: 6,
  },
];

const TrainSchedule = () => {
  //fetch the trains list.
  const getData = async () => {
    const url = "http://localhost:5000/train/trains";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul>
        {trainList.map((each) => (
          <TrainCard object={each} />
        ))}
      </ul>
    </div>
  );
};

export default TrainSchedule;
