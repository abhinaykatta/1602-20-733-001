import React from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import {MdEventSeat} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import "./index.css"
import { BsFillTrainFrontFill } from 'react-icons/bs';

const TrainCard = (props) => {
    const {object}=props;
    const {trainName,trainNumber,departureTime,seatsAvailable,price,delayedBy}=object;
    const navigate = useNavigate();

    const onClickTrain=()=>{
        const path=`/train/trains/${trainNumber}`
        navigate(path)
    }
  return (
    <div className="train" onClick={onClickTrain}>
        <h1 className='trainName'><BsFillTrainFrontFill /> {trainName} ({trainNumber})</h1>
        <p>Departure Time :{departureTime.Hours}:{departureTime.Minutes}:{departureTime.Seconds}</p>
        <div className='category'>
            <div className='categoryitem'>
                <p style={{textAlign:'center'}}>AC</p>
                <p><MdEventSeat /> Seats : {seatsAvailable.AC}</p>
                <p><FaRupeeSign /> Price: {price.AC}</p>
            </div>
            <div className='categoryitem'>
                <p style={{textAlign:'center'}}>Sleeper</p>
                <p><MdEventSeat /> Seats : {seatsAvailable.sleeper}</p>
                <p><FaRupeeSign /> Price: {price.sleeper}</p>
            </div>
            
        </div>
        <div>
            <p>Expected Delay: {delayedBy}</p>
        </div>
    </div>
  )
}

export default TrainCard