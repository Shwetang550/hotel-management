import React from 'react'
import './BookStay.css'

const BookStay = () => {
    return (
        <div className='bookstay'>
          
            <div className='bookstay-box'>
                <input placeholder='First Name' />
                <input placeholder='Last Name' />
                <input placeholder='Age' />

                <div>
                    <label>ID Proof</label>
                    <input placeholder='ID Proof' type={'file'} />
                </div>
              
                <input placeholder='ID Number' />

                <div>
                    <label>Room Type</label>
                    <select placeholder='Room Type' >
                        <option>Single</option>
                        <option>Double</option>
                        <option>Queen</option>
                        <option>King</option>
                        <option>Mini Suite</option>
                        <option>Presidential Suite</option>
                    </select>
                </div>
                

                <div>
                    <label>From</label>
                    <input type={'date'} placeholder='From' />
                </div>
                
                <div>
                    <label>To</label>
                    <input type={'date'} placeholder='To' />
                    </div>

                <input placeholder='Adults' type={'number'} />
                <input placeholder='Children' type={'number'} />
                <input placeholder='Coupon Code' />
                
                <p>Total Amount: ₹10,000</p>
                <button>Proceed to checkout</button>
            </div>
        </div>
    );
}

export default BookStay