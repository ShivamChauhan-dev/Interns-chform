import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rdApart2 = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 23-A (भाग II)' : 'C.H. Form 23-A (Part II)'}</h1>
                    <h1>{isHindi ? '[नियम 109 देखें]' : '[See Rule 109]'}</h1>
                    <p>{isHindi ? 'सभी धाराधारियों द्वारा स्वैच्छिक रूप से तैयार किया गया पूर्वक एकीकरण योजना सार्वजनिक उद्देश्यों के लिए भूमि सुरक्षित की गई ' : 'Provisional Consolidation Scheme prepared voluntarily by all the tenure-holders. Land reserved for public purposes.'}</p>
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
                        <label>{isHindi ? '[ सार्वजनिक उद्देश्यों के लिए क्षेत्र ]' : '[ Area marked for public purposes ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '( होल्डिंग क्षेत्र से )' : '( From Holding Area )'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '2. उद्देश्य' : '2. Purposes'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3. प्लॉट नंबर' : '3. Plot No.'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '4. क्षेत्र' : '4. Area'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '( गैर-होल्डिंग क्षेत्र से )' : '( From Non-Holding Area )'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '5. उद्देश्य' : '5. Purposes'}</label>
                        <input type="text" />
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
                        <label>{isHindi ? '[ गांव सभा की स्वामित्व की ज़मीन के अलावा अन्य विवरण ]' : '[ Details other than land belonging to Gaon Sabha ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '8. प्लॉट नंबर' : '8. Plot No.'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '9. क्षेत्र' : '9. Area'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '10. विवरण' : '10. Particulars'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '11. टिप्पणी' : '11. Remark'}
                        </label>
                        <input type="text" />
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

export default CHForm23rdApart2;
