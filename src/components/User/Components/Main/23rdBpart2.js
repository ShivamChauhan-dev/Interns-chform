import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rdBpart2 = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 23-B (भाग II)' : 'C.H. Form 23-B (Part II)'}</h1>
                    <p>{isHindi ? 'मामूली समायोजन किए गए जिन धारकों के लिए' : 'For tenure-holders whose holdings are marginally adjusted.'}</p>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '1. क्रम संख्या' : '1. Serial No.'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureholders'>
                            {isHindi ? '2. धारकों का नाम और पिता का नाम और उनका पता' : '2. Name and parentage of tenure-holders with residence'}
                        </label>
                        <input type='text' id='tenureholders' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='khataNo'>
                            {isHindi ? '3. मौजूदा खतौनी का खता नंबर' : '3. Khata No. of current Khatauni'}
                        </label>
                        <input type='text' id='khataNo' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '[ रेअरेंजमेंट के खातिर होल्डिंग में समायोजन किया गया ]' : '[ Adjustment made in the holding on account of rearrangement ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '( निकाल दिया गया )' : '( Taken Out )'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenure'>{isHindi ? '4. प्रकृति' : '4. Tenure'}</label>
                        <input type='text' id='tenure' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '5. प्लॉट नंबर' : '5. Plot No.'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '6. क्षेत्र' : '6. Area'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '7. विनिमय अनुपात' : '7. Exchange ratio'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '8. अन्ना मूल्यांकन' : '8. Anna Valuation'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '( आवंटित )' : '( Allotted )'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenure'>{isHindi ? '9. प्रकृति' : '9. Tenure'}</label>
                        <input type='text' id='tenure' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '10. प्लॉट नंबर' : '10. Plot No.'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '11. क्षेत्र' : '11. Area'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '12. विनिमय अनुपात' : '12. Exchange ratio'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '13. अन्ना मूल्यांकन' : '13. Anna Valuation'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '14. टिप्पणी' : '14. Remark'}
                        </label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm23rdBpart2;
