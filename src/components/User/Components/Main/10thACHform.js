import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm10thA = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 10-A' : 'C.H. FORM 10-A'}</h1>
                    <h1>{isHindi ? '[नियम 28(2) देखें]' : '[See Rule 28(2)]'}</h1>
                    <p>
                        {isHindi
                            ? 'धाराधार होल्डरों की वर्णमाला सूची'
                            : 'Alphabetical list of tenure-holders'}
                        <br />
                    </p>
                    <div className='upper-container2'>
                        <div className='CH-form-group'>
                            <div className='CH-form-item'>
                                <label htmlFor='Village'>{isHindi ? 'गाँव' : 'Village'}</label>
                                <input placeholder={isHindi ? 'गाँव' : 'Village'} type='text' />
                            </div>
                            <div className='CH-form-item'>
                                <label htmlFor='Pargana'>{isHindi ? 'परगना' : 'Pargana'}</label>
                                <input placeholder={isHindi ? 'परगना' : 'Pargana'} type='text' />
                            </div>
                            <div className='CH-form-item'>
                                <label htmlFor='Tahsil'>{isHindi ? 'तहसील' : 'Tahsil'}</label>
                                <input placeholder={isHindi ? 'तहसील' : 'Tahsil'} type='text' />
                            </div>
                            <div className='CH-form-item'>
                                <label htmlFor='District'>{isHindi ? 'जिला' : 'District'}</label>
                                <input placeholder={isHindi ? 'जिला' : 'District'} type='text' />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label htmlFor='serialNo'>
                            {isHindi ? '1. क्रमांक' : '1. Serial No'}
                        </label>
                        <input type='text' id='serialNo' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderInfo'>
                            {isHindi ? '2. धाराधार का नाम, प्रतिशत और आवास' : '2. Name of tenure-holder with percentage and residence'}
                        </label>
                        <input type='text' id='tenureHolderInfo' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='noOfKhataKhatauni'>
                            {isHindi ? '3. खतौनी खता की संख्या' : '3. No of Khata Khatauni'}
                        </label>
                        <input type='text' id='noOfKhataKhatauni' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureClass'>
                            {isHindi ? '4. धाराधार का वर्ग' : '4. Class of Tenure'}
                        </label>
                        <input type='text' id='tenureClass' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='landRevenue'>
                            {isHindi ? '5. भूमि कर' : '5. Land Revenue'}
                        </label>
                        <input type='text' id='landRevenue' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='remarks'>
                            {isHindi ? '6. टिप्पणियाँ' : '6. Remarks'}
                        </label>
                        <input type='text' id='remarks' />
                    </div>

                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm10thA;