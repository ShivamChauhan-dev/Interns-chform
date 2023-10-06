import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm6thC = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 6-C' : 'C.H. FORM 6-C'}</h1>
                    <h1>{isHindi ? '[नियम 30(a) देखें]' : '[SEE RULE 30(a)]'}</h1>
                    <p>{isHindi ? '"उ.प्र. संघटन संघ कायमीकरण अधिनियम, 1953 के अनुभाग 12 के तहत कार्रवाई के लिए रिपोर्ट"' : ' Report for action under section 12 of the U.P Consolidation of Holdings Act, 1953'}
                    </p>
                    <h1>{isHindi ? "सेवा में," : "To,"}</h1>
                    <h1>{isHindi ? "सहायक समेकन अधिकारी" : "The Assistant Consolidation Officer"}</h1>
                    <h1>{isHindi ? ' परिप्रेक्ष्य' : 'Circle'}<input type="text" className="styled-input" /></h1>
                    <h1>{isHindi ? "मैंने निम्नलिखित भूमि पर अधिकार प्राप्त किए हैं जिनका विवरण निम्नलिखित है, इस आधार पर:" : "I have obtained rights over land detailed below on the basis of "}
                        <input type="text" className="styled-input" />{isHindi ? "को" : "on"}<input type="text" className="styled-input" />
                        {isHindi ? "कोई कार्यवाही कृपया कीजिए। 1953 के यूपी संघटन के संघटन में अधिकारों की घोषणा और मेरे अधिकारों की सुधार के लिए :" : "Necessary action under Section 12 of the U.P. Consolidation of Holdings Act, 1953 for declaration of my rights and correction of records may kindly by taken:"}
                    </h1>
                    <h1>{isHindi ? "प्रॉपर्टी का विवरण" : "Details of property"}</h1>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input1'>{isHindi ? '1. गाँव' : '1. Village'}</label>
                        <input type='text' id='input1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input2'>{isHindi ? '2. परगना' : '2. Pargana'}</label>
                        <input type='text' id='input2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input3'>{isHindi ? '3. खाता संख्या' : '3. No of Khata'}</label>
                        <input type='text' id='input3' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input4'>{isHindi ? '4. खतौनी' : '4. Khatauni'}</label>
                        <input type='text' id='input4' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input5'>{isHindi ? '5. प्लॉट नंबर' : '5. Plot No'}</label>
                        <input type='text' id='input5' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input6'>{isHindi ? '6. क्षेत्र' : '6. Area'}</label>
                        <input type='text' id='input6' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input7'>{isHindi ? '7. दावे के अधिकार का विवरण' : '7. Details of rights claimed'}</label>
                        <input type='text' id='input7' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input8'>{isHindi ? '8. नाम और प्रतिशत' : '8. Name and percentage with residence'}</label>
                        <input type='text' id='input8' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input9'>{isHindi ? '9. टिप्पणियाँ' : '9. Remarks'}</label>
                        <input type='text' id='input9' />
                    </div>
                    <input type="text" className="styled-input" />
                    <label>(Signature of the applicant with full address and date.)</label>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm6thC;
