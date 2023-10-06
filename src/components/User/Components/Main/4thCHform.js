import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm4th = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 4' : 'C.H. FORM 4'}</h1>
                    <h1>{isHindi ? '[नियम 22 देखें]' : '[See Rule 22]'}</h1>
                    <p>{isHindi ? 'भूमि रिकॉर्ड में गलतियों और विवादों की सूची' : 'List of mistakes and disputes in land records'}</p>
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
                        <label htmlFor='input1'>
                            {isHindi
                                ? '1. मौजूदा वर्ष की खाता-खतौनी की संख्या'
                                : '1. No. of Khata Khatauni of the basic year'}
                        </label>
                        <input type='text' id='input1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input2'>
                            {isHindi
                                ? '2. वो खट्टे क्रमांक जिनमें गलतियाँ और विवाद खाता के पूरे नहीं होते'
                                : '2. Plots Nos where mistakes and disputes do not relate to the whole Khata'}
                        </label>
                        <input type='text' id='input2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input3'>
                            {isHindi
                                ? '3. कॉलम 2 में दर्ज किए गए खट्टों के क्षेत्र'
                                : '3. Area of plots recorded in Column2'}
                        </label>
                        <input type='text' id='input3' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input4'>
                            {isHindi
                                ? '4. खत्तौनी और फील्ड टू फील्ड आंशिक वर्ग संख्या के परीक्षण और सत्यापन के दौरान पाए गए गलतियों और विवादों का विवरण'
                                : '4. Details of mistakes and disputes discovered during the test and verification of the Khatauni and field to field partial Serial No.'}
                        </label>
                        <input type='text' id='input4' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input5'>
                            {isHindi
                                ? '5. खत्तौनी और फील्ड टू फील्ड आंशिक संख्या के परीक्षण और सत्यापन के दौरान पाए गए गलतियों और विवादों का विवरण'
                                : '5. Details of mistakes and disputes discovered during the test and verification of the Khatauni and field to field partial Details'}
                        </label>
                        <input type='text' id='input5' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input6'>
                            {isHindi
                                ? '6. प्रत्येक धाराधार स्वामी द्वारा होल्डिंग में दावा किए जाने वाले हिस्सों का विवरण'
                                : '6. Details of shares claimed in the holding by each tenure-hold'}
                        </label>
                        <input type='text' id='input6' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input7'>
                            {isHindi
                                ? '7. क्लर्कीय गलतियों के मामले में सहायक संघटन अधिकारी के आदेश'
                                : '7. Orders of Assistant Consolidation Officer in the case of clerical mistakes in Part I'}
                        </label>
                        <input type='text' id='input7' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input8'>
                            {isHindi ? '8. टिप्पणियाँ' : '8. Remarks'}
                        </label>
                        <input type='text' id='input8' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm4th;
