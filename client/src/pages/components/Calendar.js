import React from 'react';
import axios from 'axios';

export default class Calendar extends React.Component {

    componentDidMount() {
        const username = '584ddf347e25818709c0e63057705c5b';
        const password = '7be86cc634b81450442dde2e586a5427';
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
        console.log(token);

        var axios = require('axios');
        var config = {
            method: 'get',
            url: 'https://api.guesty.com/api/v2/availability-pricing/api/calendar/listings/6201aa357bfd020031956bc7?startDate=2022-02-09&endDate=2022-12-10',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Authorization': 'Basic NTg0ZGRmMzQ3ZTI1ODE4NzA5YzBlNjMwNTc3MDVjNWI6N2JlODZjYzYzNGI4MTQ1MDQ0MmRkZTJlNTg2YTU0Mjc='
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <ul>
            </ul>
        )
    }
}

