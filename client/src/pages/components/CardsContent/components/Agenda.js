import React, { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

function Agenda() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    //Booking Window in Guesty
    let sixMonthsLater = new Date(year, month + 6, day - 2);
    let blockDates = [];
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/availability/tulum")
            .then((res) => res.json())
            .then((data) => setData(data.dates));
    }, []);

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    //Converting API Dates requests from json to Date types adding 86400000 milliseconds to get the precise date
    if (data) {
        for (let iCounter = 0; iCounter < data.length; iCounter++) {
            blockDates.push(new Date(Date.parse(data[iCounter]) + 86400000));
        }
    }

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                months={2}
                direction="horizontal"
                moveRangeOnFirstSelection={false}
                ranges={state}
                disabledDates={blockDates}
                minDate={today}
                maxDate={sixMonthsLater}
            />
        </div>
    )
}
export default Agenda

