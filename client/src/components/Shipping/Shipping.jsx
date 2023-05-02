import React, { useState } from 'react'
import { Country, State, City } from 'country-state-city'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const [data, setData] = useState({
        houseNo: '1210', city: 'Nagpur', state: 'MH', country: 'IN', pinCode: '', phoneNo: ''
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addShippingInfo',
            payload: data
        });
        
        localStorage.setItem('shippingInfo', JSON.stringify(data));

        navigate('/confirm/order');
    }

    return <section className="shipping">
        <main>
            <h1>Shippping Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>House No</label>
                    <input type="text" name='houseNo' placeholder='House Address' value={data.houseNo} onChange={handleChange} required/>
                </div>

                <div>
                    <label>Country</label>
                    <select name='country' value={data.country} onChange={handleChange} required>
                        <option value="">Country</option>
                        {Country?.getAllCountries().map((i,j) => (
                            <option value={i.isoCode} key={j}>{i.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>State</label>
                    <select name='state' disabled={!data.country && true} value={data.state} onChange={handleChange} required>
                        <option value="">State</option>
                        {State?.getStatesOfCountry(data.country).map((i,j) => (
                            <option value={i.isoCode} key={j}>{i.name}</option>
                        ))}
                    </select>
                </div>
                
                <div>
                    <label>City</label>
                    <select name='city' disabled={(!data.country || !data.state) && true} value={data.city} onChange={handleChange} required>
                        <option value="">City</option>
                        {City?.getCitiesOfState(data.country, data.state).map((i,j) => (
                            <option value={i.isoCode} key={j}>{i.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Pin Code</label>
                    <input type="text" name='pinCode' placeholder='Pincode' value={data.pinCode} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Phone No</label>
                    <input type="text" name='phoneNo' placeholder='Phone No' value={data.phoneNo} onChange={handleChange} required/>
                </div>

                <button type="submit">Confirm Order</button>
            </form>
        </main>
    </section>
}

export default Shipping