import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm18th = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 18' : 'C.H. FORM 18'}</h1>
                    <h1>{isHindi ? '[नियम 24(4) देखें]' : '[See Rule 24(4)]'}</h1>
                    <p>{isHindi ? 'प्लॉट्स के संयोजन न करने का बयान' : 'Statement of plots not to be consolidated'}</p>
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
                            {isHindi ? '1. क्रमांक' : '1. Serial No.'}
                        </label>
                        <input type='text' id='serialNo' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNumber'>
                            {isHindi ? '2. प्लॉट की संख्या ' : '2. Number of Plot'}
                        </label>
                        <input type='text' id='plotNumber' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='area'>
                            {isHindi ? '3. क्षेत्र' : '3. Area'}
                        </label>
                        <input type='text' id='area' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='khataKhatauni'>
                            {isHindi ? '4. खता खतौनी की संख्या' : '4. Number of Khata Khatauni'}
                        </label>
                        <input type='text' id='khataKhatauni' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='remarks'>
                            {isHindi ? '5. अलग करने के कारण दिखाने वाली टिप्पणियां' : '5. Remarks showing cause of exclusion'}
                        </label>
                        <input type='text' id='remarks' />
                    </div>

                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm18th;
