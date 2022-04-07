const path = require('path');
const express = require('express');
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/api/availability/tulum", (req, res) => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    //Booking Window in Guesty
    let sixMonthsLater = new Date(year, month + 6, day - 2);
    // Date type 2022-02-12T20:21:00.889Z to just a string 2022-02-12
    today = today.toISOString().split('T')[0];
    sixMonthsLater = sixMonthsLater.toISOString().split('T')[0];
    //API Credentials
    try {
        if (!process.env.API_URL) {
            throw new Error("You forgot to set the API URL");
        }
        if (!process.env.API_USERNAME) {
            throw new Error("You forgot to set the API username");
        }
        if (!process.env.API_PASSWORD) {
            throw new Error("You forgot to set the API password");
        }
        if (!process.env.TULUM_ID) {
            throw new Error("You forgot to set the API ID of Tulum");
        }
        const token = process.env.API_USERNAME + ':' + process.env.API_PASSWORD;
        const encodedToken = Buffer.from(token).toString('base64');
        //Config of the axios api call to Guesty API
        var axios = require('axios');
        var config = {
            method: 'get',
            url: process.env.API_URL + process.env.TULUM_ID + '?startDate=' + today + '&endDate=' + sixMonthsLater,
            headers: { 'Authorization': 'Basic ' + encodedToken }
        };
        axios(config)
            .then(function (response) {
                let lengthDates = response.data.data.days.length;
                let unavailableDates = [];
                for (let iCounter = 0; iCounter < lengthDates; iCounter++) {
                    if (response.data.data.days[iCounter].status != "available") {
                        unavailableDates.push(response.data.data.days[iCounter].date);
                    }
                }
                res.json({ dates: unavailableDates });

            })
            .catch(function (error) {
                console.log("Error fetching data");
            });
    } catch (error) {

    }
});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
});
