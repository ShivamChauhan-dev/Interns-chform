import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm10th = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 10' : 'C.H. FORM 10'}</h1>
                    <h1>{isHindi ? '[नियम 33 देखें]' : '[See Rule 33]'}</h1>
                    <p>
                        {isHindi
                            ? 'अलग-अलग धरों का एकीकरण के लिए आवेदन'
                            : 'Application for amalgamation of separate holdings'}
                        <br />
                        {isHindi ? "सेवा में" : "To,"}
                        <br />
                        {isHindi ? "संगठन अधिकारी" : "The Consolidation Officer,"}
                        <br />
                        {isHindi ? "श्री" : "Sri"}
                        <br />
                        {isHindi ? "हम नीचे विस्तार से बताई गई अलग-अलग धरों के धाराधार हम आग्रह करते हैं कि, धरों का एकीकरण किया जाए" : "We the tenure-holders of separate holdings detailed below request that,the holdings be amalgamated"}
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
                        <label htmlFor='classOfTenure'>
                            {isHindi ? '1. धाराधार का वर्ग' : '1. Class of Tenure'}
                        </label>
                        <input type='text' id='classOfTenure' placeholder={isHindi ? 'धाराधार का वर्ग' : 'Class of Tenure'} />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='noOfKhatauniKhata'>
                            {isHindi ? '2. खतौनी खता की संख्या' : '2. No of Khatauni Khata'}
                        </label>
                        <input type='text' id='noOfKhatauniKhata' placeholder={isHindi ? 'खतौनी खता की संख्या' : 'No of Khatauni Khata'} />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='nameOfTenureHolders'>
                            {isHindi ? '3. धाराधार के नाम' : '3. Name of Tenure-holders'}
                        </label>
                        <input type='text' id='nameOfTenureHolders' placeholder={isHindi ? 'धाराधार के नाम' : 'Name of Tenure-holders'} />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNo'>
                            {isHindi ? '4. प्लॉट नंबर ' : '4. Plot Number'}
                        </label>
                        <input type='text' id='plotNo' placeholder={isHindi ? 'प्लॉट नंबर' : 'Plot Number'} />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='area'>
                            {isHindi ? '5. क्षेत्र ' : '5. Area'}
                        </label>
                        <input type='text' id='area' placeholder={isHindi ? 'क्षेत्र' : 'Area'} />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='landRevenue'>
                            {isHindi ? '6. भूमि कर ' : '6. Land Revenue'}
                        </label>
                        <input type='text' id='landRevenue' placeholder={isHindi ? 'भूमि कर' : 'Land Revenue'} />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='remarks'>
                            {isHindi ? '7. टिप्पणियाँ ' : '7. Remarks'}
                        </label>
                        <input type='text' id='remarks' placeholder={isHindi ? 'टिप्पणियाँ' : 'Remarks'} />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm10th;