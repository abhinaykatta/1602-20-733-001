const asyncHandler = require("express-async-handler");
const axios = require("axios");

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
    console.log(token.data.access_token);

    const trainsData = await axios.get("http://20.244.56.144/train/trains", {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`,
      },
    });

    console.log(trainsData.data);

    // res.status(200).send(trainsData);
    res.send();
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

module.exports = { getAllTrains };
