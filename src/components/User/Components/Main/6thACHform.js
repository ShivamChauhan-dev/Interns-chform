import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm6thA = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

     return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? '[सी.एच. फॉर्म 6-A]' : '[C.H. FORM 6-A]'}</h1>
                    <h1>{isHindi ? '[नियम 26(3) देखें]' : '[See Rule 26(3)]'}</h1>
                    <p>
                        {isHindi ? "बुकिंग नंबर" : "Booking Number"}<input type="text" className="styled-input" />
                        {isHindi ? 'सीरियल नंबर' : 'Serial Number'}<input type="text" className="styled-input" />
                    </p>
                    <p>
                        {isHindi ? "मामला संख्या" : "Case No"}<input type="text" className="styled-input" />
                        {isHindi ? 'गाँव' : 'Village.'}<input type="text" className="styled-input" />
                    </p>
                    <p>
                        {isHindi ? "पक्ष" : "Parties"}<input type="text" className="styled-input" />
                        {isHindi ? 'बनाम' : 'Versus'}<input type="text" className="styled-input" />
                    </p>
                    <p>{isHindi ? "श्री" : "Sri"} <input type="text" className="styled-input" /> 
                        {isHindi ? "पुत्र" : "son of"} <input type="text" className="styled-input" /> 
                        {isHindi ? "निवासी" : "resident of"} <input type="text" className="styled-input" /> 
                        {isHindi ? "इसकी घोषणा की जाती है कि एक मामला मेरे सामने पंजीकृत किया गया है, जिसमें भूमि के अधिकारों और दायित्वों का निर्धारण, संयुक्त होल्डिंगों का विभाजन और प्लॉट, पेड़, कुएं, और सुधारों के मूल्य का निर्धारण किया जाना है। उनसे यहाँ व्यक्तिगत रूप से या योग्य प्राधिकृत प्रतिनिधि के माध्यम से प्रकट होने के लिए कहा जाता है 10 बजे सुबह में। अगर व्यक्ति नहीं प्रकट होता है ":
                        "is hereby informed that a case has been registered before me for the determination of rights in and liabilities in respect of land, the partition of joint holdings and the determination of value of plots, trees, wells and improvements. He is hereby asked to appear in person or through duly authorised agent on"}
                        <input type="text" className="styled-input" />
                        {isHindi ? "को" : "at"}
                        <input type="text" className="styled-input" /> 
                        {isHindi ? "10 बजे सुबह में। " : "at 10 a.m."}
                        {isHindi ? "अगर व्यक्ति नहीं प्रकट होता है तो विवाद उसकी अनुपस्थिति में तय किया जाएगा।" : ". In case of non-appearance the dispute shall be decided in his absence"}
                    </p>
                    <p>
                        {isHindi
                            ? 'मेरे हाथ और मेरे कार्यालय के मुहर के तहत दिया गया है, इसका'
                            : 'Given under my hand and the seal of my office, this the'}
                        <input type="text" className="styled-input" />
                        {isHindi ? 'दिनांक,' : 'day of'}
                        <input type="text" className="styled-input" />
                        {isHindi ? '19,' : '19'}
                        <input type="text" className="styled-input" />
                        {isHindi ? 'कार्यालय का मुहर,' : 'Seal of the office.'}
                    </p>
                    <h6>
                        {isHindi
                            ? ' समेकन अधिकारी, '
                            : ' Consolidation Officer,'}
                    </h6>
                    <h6>
                        <input type="text" className="styled-input" />
                    </h6>
                    <h6>
                        {isHindi
                            ? 'सहायक समेकन अधिकारी, '
                            : 'Assistant Consolidation Officer,'}
                    </h6>
                    <h6>
                        {isHindi
                            ? ' परिप्रेक्ष्य'
                            : 'Circle'}
                        <input type="text" className="styled-input" />
                    </h6>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
            </div>
            <hr />

        </>
    );
};

export default CHForm6thA;
