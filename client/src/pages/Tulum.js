import React from 'react'
import Header from './components/Header'
import Rental from './components/Rental'
import Calendar from './components/Calendar'

function Tulum() {
    return (
        <div>
            <Header />
            <Rental
                backgroundImg="tulum-sala.jpg"
            />
            <Calendar />
        </div>
    )
}

export default Tulum
