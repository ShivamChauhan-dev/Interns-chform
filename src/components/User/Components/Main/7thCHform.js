import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm7th = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 7' : 'CH FORM 7'}</h1>
                    <h1>{isHindi ? '[नियम 27-A देखें]' : '[SEE RULE 27-A]'}</h1>
                    <p>{isHindi ? 'होल्डिंग के हिस्सों पर भूमि कर का वितरण और नई होल्डिंग्स पर इसका मूल्यांकन।' : 'Distribution of land revenue on parts of holding and its assessment on new holdings. '}</p>
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
                        <label htmlFor='input1'>{isHindi ? '1. क्रमांक ' : '1. Serial No.'}</label>
                        <input type='text' id='input1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input2'>{isHindi ? '2. खाता की संख्या 13 फसली मौद्रिक वर्ष की खतौनी किराया' : '2. No of Khata Khatauni of the basic year (13 Fasli) Tenure'}</label>
                        <input type='text' id='input2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input3'>{isHindi ? '3. प्लॉट संख्या ' : '3. Plot nos'}</label>
                        <input type='text' id='input3' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input4'>{isHindi ? '4. प्रत्येक प्लॉट का क्षेत्र ' : '4. Area of each plot'}</label>
                        <input type='text' id='input4' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input5'>{isHindi ? '5. मृदा वर्ग ' : '5. Soil class'}</label>
                        <input type='text' id='input5' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input6'>{isHindi ? '6. आवासीय किराया दरें ' : '6. Hereditary rent rates'}</label>
                        <input type='text' id='input6' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input7'>{isHindi ? '7. प्रत्येक प्लॉट की आवासीय किराया दर की मूल्यांकन (कॉलम 4 X 6 )' : '7. Valuation of each plot of hereditary rent rates (Col 4 X 6 )'}</label>
                        <input type='text' id='input7' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input8'>{isHindi ? '8. सभी प्लॉट्स का कुल किराया मूल्य ' : '8. Total rental value of all the plots'}</label>
                        <input type='text' id='input8' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input9'>{isHindi ? '9. खाता का भूमि कर ' : '9. Land revenue of the Khata'}</label>
                        <input type='text' id='input9' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input10'>{isHindi ? '10. प्लॉट संख्या होल्डिंग से मिटा दिया गया या समेकन से बाहर किया गया ' : '10. Plot No expunged from the holding or excluded from consolidation'}</label>
                        <input type='text' id='input10' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input11'>{isHindi ? '11. प्रत्येक प्लॉट का क्षेत्र (Area of each plot shown in Col 10)' : '11. Area of each plot shown in Col 10'}</label>
                        <input type='text' id='input11' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input12'>{isHindi ? '12. प्रत्येक प्लॉट की किराया मूल्य ' : '12. Rental value of each plot shown in Col 10 at rate shown in Col 6'}</label>
                        <input type='text' id='input12' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input13'>{isHindi ? '13. कुल प्लॉट्स का किराया मूल्य (Total rental value of plots shown in col 10)' : '13. Total rental value of plots shown in col 10'}</label>
                        <input type='text' id='input13' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor="">{isHindi ? "14. प्लॉट्स से मिटाए गए या बाहर किए गए प्लॉट का अनुपातिक वार्षिक भूमि कर" : "14. Proporttionate Annual Land Revenue of plots expunged or excluded"}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor="input14.1">{isHindi ? "14.1 अनुपातिक भूमि कर की राशि (कॉलम 9 X कॉलम 13 / कॉलम 8)" : "14.1 Amount of proportio nate land revenue (Col 9 X Col 13 / Col 8 )"}</label>
                        <input type="text" id='input14.1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor="input14.2">{isHindi ? "14.2 वह फसली वर्ष जिससे अनुपातिक भूमि कर (कॉलम 14) देय है" : "14.2 Fasli year from which the proportionate land (Col 14) is payable"}</label>
                        <input type="text" id='input14.2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input15'> {isHindi ? '15. अनुपातिक भूमि कर की राशि (कॉलम 9 - 14)' : '15. Amount of land revenue (Col 9 - 14)'} </label>
                        <input type='text' id='input15' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input16'> {isHindi ? '16. किस फसली वर्ष से यह राजस्व (कॉलम 16) देय है' : '16. Fasli year with effect from which revenue (col16) is payable'} </label>
                        <input type='text' id='input16' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input17'>{isHindi ? '17. क्या जेडएलआर एक्ट की धारा 245,246,247 का मूल्यांकन के लिए प्रयोग होता है' : '17. Whether Sections 245,246,247 of ZALR act applies for assessment'}</label>
                        <input type='text' id='input17' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input18'> {isHindi ? '18. भूमि कर की राशि' : '18. Amount of land revenue'} </label>
                        <input type='text' id='input18' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input19'> {isHindi ? '19. किस फसली वर्ष से यह भूमि कर कॉलम 19 देय है' : '19. Fasli year with effect from which land revenue col19 is payable'} </label>
                        <input type='text' id='input19' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input20'> {isHindi ? '20. समझौते अधिकारी का हस्ताक्षर' : '20. Signature of the Settlement Officer'} </label>
                        <input type='text' id='input20' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input21'> {isHindi ? '21. संशोधित खतौनी की खता संख्या' : '21. No of Khata of the revised Khatauni'} </label>
                        <input type='text' id='input21' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input22'> {isHindi ? '22. टिप्पणियाँ' : '22. Remarks'} </label>
                        <input type='text' id='input22' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm7th;
