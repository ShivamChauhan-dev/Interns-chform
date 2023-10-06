import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rdBpart1 = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 23-B (भाग I)' : 'C.H. Form 23-B (Part I)'}</h1>
                    <h1>{isHindi ? '[नियम 116 देखें]' : '[See Rule 116]'}</h1>
                    <p>{isHindi ? 'प्रचलित चक मार्गों और चकगुल्स की प्रावधान के लिए ड्राफ्ट योजना ' : 'Draft Plan for Provision of Chak Roads and Chakguls.'}</p>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '1. चक मार्ग और चकगुल्स की क्रम संख्या' : '1. Serial No. of chak road and chakguls'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '[ चक मार्ग और चकगुल्स के लिए क्षेत्र का निर्धारण ]' : '[ Area ear-marked for chak road and chakguls ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '( होल्डिंग क्षेत्र से )' : '( From Holding Area )'}</label>
                    </div>


                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '2. प्लॉट नंबर' : '2. Plot No.'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3. क्षेत्र' : '3. Area'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '4. विनिमय अनुपात' : '4. Exchange ratio'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '5. अन्ना मूल्यांकन' : '5. Anna Valuation'}</label>
                        <input type="text" />
                    </div>


                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '( गैर-होल्डिंग क्षेत्र से )' : '( From Non-Holding Area )'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '6. प्लॉट नंबर' : '6. Plot No.'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '7. क्षेत्र' : '7. Area'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '8. टिप्पणी' : '8. Remark'}
                        </label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm23rdBpart1;
