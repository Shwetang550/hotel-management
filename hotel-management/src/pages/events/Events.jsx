import React from 'react'
import './Events.css'

const Events = () => {
    return (
        <div
            style={{
                height: '70vh',
                width: '100vw',
                display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column'
            }}
        >

            <h1>Upcomming Events / Programmes</h1>

            <table
                border="1px"
                cellSpacing={0}
                style={{
                    border: '1px solid #000000',
                    width: '75%',
                    margin: '0 auto',
                }}
            >
                <tr>
                    <th style={{width:"01%", fontSize: "larger"}}><bold>S.No</bold></th>
                    <th style={{width:"05%", fontSize: "larger"}}><bold>Customer</bold></th>
                    <th style={{width:"05%", fontSize: "larger"}}><bold>Event</bold></th>
                    <th style={{width:"05%", fontSize: "larger"}}><bold>Time</bold></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Harold Meachum</td>
                    <td>Dining at Table No. 8</td>
                    <td>8:00 PM</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Daniel Rand</td>
                    <td>Lunch at Table No. 4</td>
                    <td>1:30 PM</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mr. Peterson</td>
                    <td>Business Meetup</td>
                    <td>10:00 AM</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Homeless Joe</td>
                    <td>Wedding in Hall 3</td>
                    <td>9:00 PM</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Hopeless Saakshi</td>
                    <td>Tech Crunch Seminar</td>
                    <td>5:00 PM</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Unreachable Simran</td>
                    <td>Breakfast at Table 5</td>
                    <td>9:00 AM</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Contactless Tanisha</td>
                    <td>Brunch at Table 7</td>
                    <td>11:30 AM</td>
                </tr>
            </table>
        </div>
    )
}

export default Events