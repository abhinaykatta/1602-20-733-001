const asyncHandler = require("express-async-handler");
const axios = require("axios");
const _ = require("lodash");

const getAllTrains = asyncHandler(async (req, res) => {
  try {
    //const credetials = ;
    //console.log(credetials);
    const token = await axios.post("http://20.244.56.144/train/auth", {
      companyName: process.env.COMPANYNAME,
      clientID: process.env.CLIENTID,
      ownerName: process.env.OWNERNAME,
      ownerEmail: process.env.OWNEREMAIL,
      rollNo: process.env.ROLLNO,
      clientSecret: process.env.CLIENTSECRET,
    });

    // const tkn = JSON.parse(token);
    // console.log(tkn);
    //console.log(token.data.access_token);

    const Data = await axios.get("http://20.244.56.144/train/trains", {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`,
      },
    });

    //console.log(Data.data);

    let trainsData = Data.data;

    //removing trains that depart in less than 30 mins
    trainsData = trainsData.filter((obj) => {
      if (obj.departureTime.Hours > 0 || obj.departureTime.Minutes > 30)
        return obj;
    });

    console.log(trainsData);

    // trainsData = trainsData.sort((a, b) => {
    //   if (a.price.sleeper > b.price.sleeper) return 1;
    //   else {
    //     if (a.price.AC > b.price.AC) return 1;
    //   }
    // });

    res.send(trainsData);
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

const getATrain = asyncHandler(async (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  const token = await axios.post("http://20.244.56.144/train/auth", {
    companyName: process.env.COMPANYNAME,
    clientID: process.env.CLIENTID,
    ownerName: process.env.OWNERNAME,
    ownerEmail: process.env.OWNEREMAIL,
    rollNo: process.env.ROLLNO,
    clientSecret: process.env.CLIENTSECRET,
  });

  console.log(token.data.access_token);

  const train = await axios.get(`http://20.244.56.144/train/trains/${id}`, {
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  });

  console.log(train.data);
  res.send(train.data);
});

module.exports = { getAllTrains, getATrain };
