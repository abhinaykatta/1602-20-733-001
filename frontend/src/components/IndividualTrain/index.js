import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaRupeeSign } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { BsFillTrainFrontFill } from "react-icons/bs";
import { useEffect } from "react";

const object = {
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
};

const IndividualTrain = (props) => {
  const { id } = useParams();
  //fetch the individual train details.
  const getData = async () => {
    const url = `http://localhost:5000/train/trains/${id}`;
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

  const {
    trainName,
    trainNumber,
    departureTime,
    seatsAvailable,
    price,
    delayedBy,
  } = object;
  return (
    <div className="train">
      <h1 className="trainName">
        {" "}
        <BsFillTrainFrontFill /> {trainName} ({trainNumber})
      </h1>
      <p>
        Departure Time :{departureTime.Hours}:{departureTime.Minutes}:
        {departureTime.Seconds}
      </p>
      <div className="category">
        <div className="categoryitem">
          <p style={{ textAlign: "center" }}>AC</p>
          <p>
            <MdEventSeat /> Seats : {seatsAvailable.AC}
          </p>
          <p>
            <FaRupeeSign /> Price: {price.AC}
          </p>
        </div>
        <div className="categoryitem">
          <p style={{ textAlign: "center" }}>Sleeper</p>
          <p>
            <MdEventSeat /> Seats : {seatsAvailable.sleeper}
          </p>
          <p>
            <FaRupeeSign /> Price: {price.sleeper}
          </p>
        </div>
      </div>
      <div>
        <p>Expected Delay: {delayedBy}</p>
      </div>
    </div>
  );
};

export default IndividualTrain;
