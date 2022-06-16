import React from 'react'

const Offers = () => {
    return (
        <div
            style={{
                height: '80vh',
                width: '100vw',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
            }}
        >
            <h1 style={{color: '#404040', marginBottom: '45px'}}>Current Offers</h1>
            <table border="1px" cellSpacing={0} style={{border: "1px solid #000000", width:"50%"}}>
                <tr>
                    <th>Through</th>
                    <th>Offer</th>
                </tr>
                <tr>
                    <td>IHCL Stockholder</td>
                    <td>Get Flat 25% OFF</td>
                </tr>
                <tr>
                    <td>Paytm</td>
                    <td>Get Upto ₹1500 Cashback using Paytm Wallet</td>
                </tr>
                <tr>
                    <td>Simpl</td>
                    <td>Get Flat ₹2000 Off<br />Valid on amounts worth ₹12000</td>
                </tr>
                <tr>
                    <td>LAZYPAY</td>
                    <td>Get Upto ₹500 Cashback on your first LazyPay transaction</td>
                </tr>
                <tr>
                    <td>Axis Bank</td>
                    <td>Get Free Lunch using Axis Neo and Miles & More Axis Bank Credit Cards</td>
                </tr>
                <tr>
                    <td>HDFC Bank</td>
                    <td>Get Flat -₹3000 Off (Give 3000 Additional)</td>
                </tr>
            </table>
        </div>
    )
}

export default Offers