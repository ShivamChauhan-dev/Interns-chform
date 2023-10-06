import React, { useState } from 'react';
import './2ndCHform.css';
import { Link } from 'react-router-dom';
import Header from './Components/Header';

const CH1Dashboard = ({ setAuth }) => {
    // State variables to hold input values and result
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');
    const [isHindi, setIsHindi] = useState(false);

    // Function to handle the multiplication and update the result
    const handleMultiply = () => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (!isNaN(num1) && !isNaN(num2)) {
            setResult((num1 * num2).toString());
        } else {
            setResult('*****Invalid Input*****');
            // alert('Theek sa daal na Bhosdka')
        }
    };

    return (
        <>
            <div className='Header'>
                <Header setAuth={setAuth} />
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 45' : 'C.H. Form 45'}</h1>
                    <h1>{isHindi ? '[नियम 97 देखें]' : '[See Rule 97]'}</h1>
                    <p>{isHindi ? 'धारा 27 के तहत तैयार की गई खतौनी' : 'Khatauni prepared under section 27 of the Act'}</p>
                    <div className='CH-form-group'>

                        <div className='CH-form-item'>
                            <label htmlFor='Village'>Village</label>
                            <input placeholder='Village' type='text' />
                        </div>
                        <div className='CH-form-item'>
                            <label htmlFor='Pargana'>Pargana</label>
                            <input placeholder='Pargana' type='text' />
                        </div>
                        <div className='CH-form-item'>
                            <label htmlFor='Tahsil'>Tahsil</label>
                            <input placeholder='Tahsil' type='text' />
                        </div>
                        <div className='CH-form-item'>
                            <label htmlFor='District'>District</label>
                            <input placeholder='District' type='text' />
                        </div>

                    </div>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    
                        <div className='CH-Form-Data'>
                            <label>1. Serial  Number</label>
                            <input type='text' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label>2. Khatauni Khata</label>
                            <input type='text' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label>3. Name of tenure-holder with parentage and residence</label>
                            <input type='text' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label>4. Year of commencement of tenure</label>
                            <input type='text' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label>5. New plot Numbers</label>
                            <input type='text' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label>6. Area Land Revenue of rent payable by the tenureholder</label>
                            <input type='text' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label>7. Remarks</label>
                            <input type='text' />
                        </div>
                    
                </div>
                <div className='multiplication-container'>
                    <div className='input-item-multiply'>
                        <label htmlFor='Input1'>Input 1</label>
                        <input
                            placeholder='Input 1'
                            type='text'
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                        />
                    </div>
                    <div className='input-item-multiply'>
                        <label htmlFor='Input2'>Input 2</label>
                        <input
                            placeholder='Input 2'
                            type='text'
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                    </div>
                    <div className='input-item-multiply'>
                        <label htmlFor='Result'>Result</label>
                        <input
                            placeholder='Result'
                            type='text'
                            value={result}
                            readOnly
                        />
                    </div>
                    <button onClick={handleMultiply}>Result</button>
                </div>
                <div className="buttons-container">
                    <Link to="/2-CH-Form"><button className="CH-Form-button">2nd</button></Link>
                    <Link to="/2-A-CH-Form"><button className="CH-Form-button">2-A</button></Link>
                    <Link to="/4-CH-Form"><button className="CH-Form-button">4th</button></Link>
                    <Link to="/5-CH-Form"><button className="CH-Form-button">5th</button></Link>
                    <Link to="/5-CH-Form-B"><button className="CH-Form-button">5-B</button></Link>
                    <Link to="/6-CH-Form"><button className="CH-Form-button">6th</button></Link>
                    <Link to="/6-A-CH-Form"><button className="CH-Form-button">6-A</button></Link>
                    <Link to="/6-B-CH-Form"><button className="CH-Form-button">6-B</button></Link>
                    <Link to="/6-C-CH-Form"><button className="CH-Form-button">6-C</button></Link>
                    <Link to="/7-CH-Form"><button className="CH-Form-button">7th</button></Link>
                    <Link to="/7-B-CH-Form"><button className="CH-Form-button">7-B</button></Link>
                    <Link to="/10-CH-Form"><button className="CH-Form-button">10th</button></Link>
                    <Link to="/10-A-CH-Form"><button className="CH-Form-button">10-A</button></Link>
                    <Link to="/11-CH-Form"><button className="CH-Form-button">11th</button></Link>
                    <Link to="/18-CH-Form"><button className="CH-Form-button">18th</button></Link>
                    <Link to="/21-CH-Form"><button className="CH-Form-button">21st</button></Link>
                    <Link to="/23-CH-Form"><button className="CH-Form-button">23rd</button></Link>
                    <Link to="/23-part2-CH-Form"><button className="CH-Form-button">23-II</button></Link>
                    <Link to="/23-part3-CH-Form"><button className="CH-Form-button">23-III</button></Link>
                    <Link to="/23-A-part1-CH-Form"><button className="CH-Form-button">23 A-I</button></Link>
                    <Link to="/23-A-part2-CH-Form"><button className="CH-Form-button">23 A-II</button></Link>
                    <Link to="/23-B-part1-CH-Form"><button className="CH-Form-button">23 B-I</button></Link>
                    <Link to="/23-B-part2-CH-Form"><button className="CH-Form-button">23 B-II</button></Link>
                    <Link to="/23-B-part3-CH-Form"><button className="CH-Form-button">23 B-III</button></Link>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CH1Dashboard;
