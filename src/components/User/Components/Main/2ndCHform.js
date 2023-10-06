import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm2nd = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

    const toggleLanguage = () => {
        setIsHindi(!isHindi);
    };

    return (
        <>
            <div className='Header'></div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 1-ए' : 'C.H. FORM 1-A'}</h1>
                    <h1>{isHindi ? ' [धारा 3(11-ए) देखें]' : '[ See Section 3(11-A)]'}</h1>
                    <p>
                        {isHindi ? (
                            <>उत्तर प्रदेश संघटन अधिनियम, 1953 की धारा 3 (11-ए) के प्राधिकृत द्वारा दिए गए अधिकारों के
                                अभ्यास के तहत, यह सूचित किया जाता है कि संघटन के संयुक्त योजना बनाने का निर्धेश
                                देने के लिए संघटन निदेशक ने यह निर्धारित किया है कि संख्या <input type="text" className="styled-input" />
                                के साथ यह गाँव या गाँव का हिस्सा संघटन की संयुक्त योजना बनाने का निर्धारण किया है जिन्हें
                                कॉलम 2 में दिखाया गया है और कॉलम 3 में दिखाए गए गाँव के साथ:</>
                        ) : (
                            <>In exercise of the powers conferred by Section 3 (11-A) of the Uttar Pradesh Consolidation
                                of Holdings Act, 1953, it is hereby notified that the Director of Consolidation has, with effect
                                from <input type="text" className="styled-input" /> decided to make a joint scheme of Consolidation for the villages or part of
                                villages mentioned in Column 2 with the village mentioned in Column 3 of the following
                                statement:</>
                        )}
                    </p>
                    <hr />
                </div>
                <button className="Translat-button" onClick={toggleLanguage}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='FORM-2-input-container'>
                        <div className='CH-Form-Data'>
                            <label htmlFor='input1'>
                                {isHindi ? '1. क्रमांक' : '1. Serial No.'}
                            </label>
                            <input type='text' id='input1' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label htmlFor='input2'>
                                {isHindi
                                    ? '2. गाँव, जिनका संघटन योजना कोलम 3 में दिखाए गए गाँव और गाँव के हिस्सों के साथ संयुक्त किया जाएगा'
                                    : '2. Villages, the scheme of consolidation of which shall be joint with the village and parts of villages shown in Column 3'}
                            </label>
                            <input type='text' id='input2' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label htmlFor='input3'>
                                {isHindi
                                    ? '3. कॉलम 2 में दिखाए गए गाँव के साथ संघटन की संयुक्त योजना बनाने के लिए गाँव या गाँव के हिस्से का नाम'
                                    : '3. Name of the village or parts of village the scheme of consolidation of which shall be joint with the village shown in Column 2'}
                            </label>
                            <input type='text' id='input3' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label htmlFor='input4'>
                                {isHindi ? '4. जिले का नाम' : '4. Name of district'}
                            </label>
                            <input type='text' id='input4' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label htmlFor='input5'>
                                {isHindi ? '5. तहसील का नाम' : '5. Name of tahsil'}
                            </label>
                            <input type='text' id='input5' />
                        </div>
                        <div className='CH-Form-Data'>
                            <label htmlFor='input6'>
                                {isHindi ? '6. टिप्पणियाँ' : '6. Remarks'}
                            </label>
                            <input type='text' id='input6' />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm2nd;
