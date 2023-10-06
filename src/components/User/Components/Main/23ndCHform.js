import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rd = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 23 (भाग I)' : 'C.H. Form 23 (Part I)'}</h1>
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
                        <label>
                            {isHindi ? '1. क्रम संख्या' : '1. Serial No.'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderInfo'>
                            {isHindi ? '2. धाराधार का नाम और माता-पिता की आयु के साथ निवास' : '2. Name and parent age of tenure holder with residence'}
                        </label>
                        <input type='text' id='tenureHolderInfo' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureClass'>
                            {isHindi ? '3. धाराधार का वर्ग' : '3. Class of Tenure'}
                        </label>
                        <input type='text' id='tenureClass' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='commencementYear'>
                            {isHindi ? '4. धाराधार का आरंभ वर्ष' : '4. Year of Commencement of Tenure'}
                        </label>
                        <input type='text' id='commencementYear' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='khataNumber'>
                            {isHindi ? '5. सीएच फॉर्म 11 में सुधारित वार्षिक पंजी की खता संख्या' : '5. Khata number of the revised Annual Register in C.H. Form 11'}
                        </label>
                        <input type='text' id='khataNumber' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNumber'>
                            {isHindi ? '6. प्लॉट नंबर' : '6. Plot Number'}
                        </label>
                        <input type='text' id='plotNumber' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='total'>
                            {isHindi ? '7. कुल' : '7. Total'}
                        </label>
                        <input type='text' id='total' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '8.[ क्षेत्रफल ]' : '8.[ Area ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '8.1 समेकन से बाहर' : '8.1 Excluded from consolidation'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '8.2 समेकन में शामिल' : '8.2 Included in consolidation'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '9. [ मूल धरोहर ]' : '9. [ Original holding ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '9.1 संघटित करने योग्य भूमि के विनिमय अनुपात' : '9.1 Exchange ratio of the plot or its part to be consolidated'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '9.2 संघटित करने योग्य भूमि की अन्ना-मूल्यांकन' : '9.2 Anna-valuation of the plot or its part to be consolidated'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '9.3 धरोहर के भूमि राजस्व' : '9.3 Land revenue of holding'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '10. सिद्धांतों के बयान में दिखाए गए दर के आधार पर सार्वजनिक उद्देश्यों के लिए अन्ना-मूल्यांकन के रूप में योगदान (खंड के कुल में 11 का योगदान की प्रतिशत/100)' : '10. Contribution in terms of anna-valuation for public purposes calculated on the basis of the rate shown in the statement of principles (Total of Col. 11 of the holding percentage of contribution/100)'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '11. आरेख के द्वारा सार्वजनिक उद्देश्यों के लिए योगदान (कॉलम 13 x 9/कॉलम 11 के आधार पर) (खंड के कुल में)' : '11. Contribution for public purposes in terms of area (Cols. 13 x 9/Col. 11) (on the total of the holding)'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '12. सार्वजनिक उद्देश्यों के लिए भूमि के खाता की घटाने के लिए भूमि द्वारा कम किया जाने वाला भूमि कर (कॉलम 14 x कॉलम 12/कॉलम 7 के आधार पर) खंड के कुलों पर' : '12. Land revenue to be reduced on account of the land contributed for public purposes (Col. 14 x Col. 12/Col. 7) on the totals of the holding'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '13. सार्वजनिक उद्देश्यों के लिए भूमि के लिए देने के लिए भुगतान की राशि (कॉलम 15 x धारा 29-बी के अंतर्गत निर्धारित गुणज)' : '13. Amount of compensation payable for land contributed for public purposes (Col. 15 x multiple prescribed under Section 29-B)'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '14. कुल मूल्यांकन को आवंटित किया जाना है (कॉलम 11-13) (धारा की गणना पर) संपत्ति के कुल मूल्यांकन पर' : '14. Net valuation to be allotted (Cols. 11-13) (on totals of the holding)'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15. [ प्रस्तावित संपत्ति ]' : '15. [ Proposed holding ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15.1 धाराधार का वर्ग' : '15.1 Class of tenure'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15.2 प्लॉट नंबर' : '15.2 Plot Number'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15.3 क्षेत्र' : '15.3 Area'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15.4 विनिमय अनुपात' : '15.4 Exchange Ratio'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15.5 अन्ना-मूल्यांकन' : '15.5 Anna Valuation'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15.6 भूमि को सार्वजनिक उद्देश्यों के लिए भूमि दान का कारण स्थान के अनुसार भूमि योगदान के कारण यदि हो, तो धारा 12 से कम करने के बाद देय भूमि कर' : '15.6 Land Revenue Payable by the Tenure-Holder after Reduction, if Any, Due to Contribution of Land for Public Purposes (Col.12 - Col.15)'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '16. टिप्पणियाँ' : '16. Remarks'}
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

export default CHForm23rd;
