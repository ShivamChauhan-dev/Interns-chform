import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rdpart3 = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 23 (भाग II)' : 'C.H. Form 23 (Part II)'}</h1>
                    <h1>{isHindi ? '[नियम 46 देखें]' : '[See Rule 46]'}</h1>
                    <p>{isHindi ? 'अस्थायी संघटन योजना (खतौनी चकबंदी) ' : 'Provisional Consolidation Scheme (Khatauni Chakbandi)'}</p>
                    <p>{isHindi ? 'प्रस्तावों का बयान ' : 'Statement of Proposals'}</p>
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
                        <label>{isHindi ? '1. सीरियल संख्या' : '1. Serial No.'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='areaForPublicPurposes'>
                            {isHindi ? '2. [ सार्वजनिक उद्देश्यों के लिए क्षेत्र ]' : '2. [ Area earmarked for public purposes ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.1. [ होल्डिंग क्षेत्र से ]' : '2.1. [ From holding area ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.1.1. उद्देश्य' : '2.1.1. Purposes'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.1.2. प्लॉट नंबर' : '2.1.2. Plot No.'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.1.3. क्षेत्र' : '2.1.3. Area'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.2. [ गैर-होल्डिंग क्षेत्र से ]' : '2.2. [ From non-holding area ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.2.1. उद्देश्य' : '2.2.1. Purposes'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.2.2. प्लॉट नंबर' : '2.2.2. Plot No.'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2.2.3. क्षेत्र' : '2.2.3. Area'}
                        </label>
                        <input type="text" />
                    </div>


                    <div className='CH-Form-Data'>
                        <label htmlFor='detailsOfGaonSabhaLand'>
                            {isHindi ? '3. [ गाँव सभा की अन्य भूमि का विवरण ]' : '3. [ Details of other land belonging to the Gaon Sabha ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '3.1 प्लॉट नंबर' : '3.1 Plot No.'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '3.2 क्षेत्र' : '3.2 Area'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label >{isHindi ? '3.3 विशेषताएँ' : '3.3 Particulars'}
                        </label>
                        <input type='text' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='remarks'>
                            {isHindi ? '4. टिप्पणियाँ' : '4. Remarks'}
                        </label>
                        <input type='text' id='remarks' />
                    </div>  
                    <h6>
                        {isHindi ? 'समान्वीकरण लेखपाल' : 'Consolidation Lekhpal'}
                        <input type="text" className="styled-input" />
                    </h6>
                    <h6>
                        {isHindi ? 'समान्वीकरणकर्ता' : 'Consolidator'}
                        <input type="text" className="styled-input" />
                    </h6>
                    <h6>
                        {isHindi ? 'सहायक समेकन अधिकारी, ' : 'Assistant Consolidation Officer,'}
                    </h6>
                    <h6>
                        {isHindi ? ' परिप्रेक्ष्य' : 'Circle'}
                        <input type="text" className="styled-input" />
                    </h6>


                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm23rdpart3;
