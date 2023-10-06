import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rdpart2 = ({ setAuth }) => {
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
                        <label>{isHindi ? '1. [ वृक्षों, कुएं और अन्य सुधारों का विवरण ]' : '1. [ Details of trees, wells, and other improvements allotted ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '1.1 सी.एच. फॉर्म 23 (भाग I) की सीरियल संख्या' : '1.1 Serial No. of C.H. Form 23 (Part I)'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '1.2 वृक्षों, कुएं और अन्य सुधारों की संख्या और प्रकार' : '1.2 Number and kind of trees, wells, and other improvements'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '1.3 जिन प्लॉट के लिए वृक्ष, आदि मौजूद हैं' : '1.3 Plot number of which trees, etc. exist'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '2.  क्षतिपूर्ति देने के लिए देना होगा ' : '2.  Compensation payable '}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3. [ धाराधार के नीचे कोई अधिकारी, अगर कोई है, तो ]' : '3. [ Asami, if any, under the tenure-holder ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3.1 आसामी का नाम और माता-पिता का नाम और निवास' : '3.1 Name and parentage of asami with residence'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '[ 3.2 मूल धरन का ]' : '[ 3.2 Original holding ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3.2.1 प्लॉट नंबर' : '3.2.1 Plot number'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3.2.2 क्षेत्र' : '3.2.2 Area'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3.2.3 मूल्यांकन' : '3.2.3 Valuation'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '3.2.4 देय किराया' : '3.2.4 Rent payable'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '4. पैमाने की आवश्यकता क्षेत्र की कटौती, यदि कोई हो, सार्वजनिक उद्देश्य के लिए भूमि की योगदान के खाते 14 में दिखाई गई' : '4. Reduction in area, if any on account of contribution of land by tenure-holder for public purposes shown in Col. 14 of C.H. Form 23 (Part I)'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '5. सार्वजनिक उद्देश्य के लिए भूमि के योगदान के खाते में किराये की कटौती असामी के लिए किराये की कटौती (कॉल. 9 x कॉल. 10/कॉल. 7) के खाते में' : '5. Reduction in rent of the asami on account of contribution of land for public purposes (Col. 9 x Col. 10/Col. 7)'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '6. C.H. Form 23-I के कॉलम 16 में दिखाए गए प्रमाण के अनुसार असामी को मिलने वाले मुआवजा का 5 प्रतिशत' : '6. Compensation payable to asami at 5 per cent of the compensation payable to the tenure-holder as shown in Column 16 of C.H. Form 23-I'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '7. [ असामी का प्रस्तावित स्वामित्व। ]' : '7. [ Proposed holding of the asami. ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '7.1. प्लॉट नंबर' : '7.1. Plot number'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '7.2. क्षेत्र' : '7.2. Area'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '7.3. मूल्यांकन' : '7.3. Valuation'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '7.4. किराया जो चुकाया जाना है (कॉल. 9 - कॉल. 11)' : '7.4. Rent payable (Col.9 minus Col.11)'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '8. [ सरल केवल अधिकारों को छोड़कर उसके प्रस्तावित होल्डिंग या उसके हिस्से को लागू किए जाने वाले किसी भी आबंध या जड़वार ]' : '8. [ Encumbrance attached to the proposed holding or part there of other than easements ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '8.1. बोझदार का नाम और बोझ का प्रकृति' : '8.1. Name of encumbrancer and nature of encumbrances'}</label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '8.2. राशि' : '8.2. Amount'}</label>
                        <input type="text" />
                    </div>


                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '9. टिप्पणियाँ' : '9. Remarks'}</label>
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

export default CHForm23rdpart2;
