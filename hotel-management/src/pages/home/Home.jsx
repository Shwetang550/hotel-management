import React from 'react'
import './Home.css'

const status = [
    { title: 'Single', status: '75', roomsFilled: '75/100' },
    { title: 'Double', status: '50', roomsFilled: '40/80' },
    { title: 'Queen', status: '30', roomsFilled: '20/60' },
    { title: 'King', status: '63', roomsFilled: '45/80' },
    { title: 'Mini Suite', status: '10', roomsFilled: '3/35' },
    { title: 'Presidential Suite', status: '10', roomsFilled: '2/15' },
];

const Home = () => {
    return (
        <div className='home'>
            <div className='current-situation'>

                <h3 className='current-situation-title'>Reservation Status</h3>

                {
                    status.map(i => (
                        <div key={i.title} className='home-current-stats'>
                            <h4>{i.title} :</h4>
                            <div className='home-bar'>
                                <div className='home-bar-status' style={{ width: `${i.status}%`, backgroundColor: '#888' }} />
                            </div>
                            <p>{i.roomsFilled}</p>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Home