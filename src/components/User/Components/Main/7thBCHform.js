import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm7thB = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 7-B' : 'C.H. FORM 7-B'}</h1>
                    <h1>{isHindi ? '[नियम 25(A) देखें]' : '[See Rule 25(A)]'}</h1>
                    <p>
                        {isHindi
                            ? 'मानक प्लॉटों की सूची'
                            : 'List of Standard Plots'}
                        <br />
                        {isHindi ? "इकाई" : "Unit"} <input type="text" className="styled-input" />
                        {isHindi ? "परगना" : "Pargana"} <input type="text" className="styled-input" />
                        {isHindi ? "तहसील" : "Tahsil"} <input type="text" className="styled-input" />
                        {isHindi ? "जिला" : "District"} <input type="text" className="styled-input" />
                    </p>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNumber'>
                            {isHindi ? '1. प्लॉट नंबर' : '1. Plot Number'}
                        </label>
                        <input type='text' id='plotNumber' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='soilClass'>
                            {isHindi ? '2. पिछले समझौते में दर्ज किया गया मृदा वर्ग' : '2. Soil Class as recorded in the last settlement'}
                        </label>
                        <input type='text' id='soilClass' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='remarks'>
                            {isHindi ? '3. टिप्पणियाँ' : '3. Remarks'}
                        </label>
                        <input type='text' id='remarks' />
                    </div>

                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm7thB;
