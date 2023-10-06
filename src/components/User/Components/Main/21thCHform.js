import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm21th = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 21' : 'C.H. FORM 21'}</h1>
                    <h1>{isHindi ? '[नियम 24-A देखें]' : '[See Rule 24-A]'}</h1>
                    <p>{isHindi ? 'मुख्य बयान' : 'Statement of Principal'}</p>
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
                    <p>{isHindi ? 'भाग 1' : 'Part-1'}</p>
                    <h1>{isHindi ? '(आंकड़ात्मक और भौगोलिक विवरण विभाग)' : '(Section containing statistical and topographical details)'}</h1>

                    <label>
                        {isHindi ? '1. बीघा/एकड़ में इकाइयों का कुल क्षेत्रफल' : '1. Total area of the units in Bighas/acres'}
                        <input type="text" className="styled-input " />
                    </label>
                    <label>
                        {isHindi ? '2. बीघा/एकड़ में इकाइयों का कुल क्षेत्रफल' : '2. Total holding area of unit in Bighas/acres'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '3. सम्मिलितीकरण योजना में शामिल करने के लिए प्रस्तावित कुल क्षेत्रफल' : '3. Total area proposed to be included in the Consolidation Scheme'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '4. अन्न के माध्यम से कुल मूल्यांकन' : '4. Total valuation in terms of annas'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '5. सार्वजनिक उद्देश्यों के लिए पहले से ही प्रयुक्त क्षेत्र कुल' : '5. Total area already in use for public purposes'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '6. धाराधारधारकों की कुल संख्या (सीएच फ़ॉर्म 10-ए में दिखाई देती है)' : '6. Total number of tenure-holders (shown in CH form 10-A)'}
                        <input type="text" className="styled-input" />
                    </label>
                    <label>
                        {isHindi ? '7. सार्वजनिक उद्देश्यों के लिए अन्न के माध्यम से कुल क्षेत्र/मूल्यांकन' : '7. Total area/valuation in annas earmarked for various public purposes'}
                    </label>

                    <label>
                        {isHindi ? '   a) होल्डिंग क्षेत्र से;' : '   a) Out of holding area'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '   b) अन्य क्षेत्र से;' : '   b) Out of other area'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '   c) होल्डिंग क्षेत्र से कटौती का प्रतिशत;' : '   c) Percentage of deductions from holding’s area'}
                        <input type="text" className="styled-input" />
                    </label>
                    <label>
                        {isHindi ? '8. इर्रिगेशन सुविधाएँ उपलब्ध हैं -' : '8. Irrigation facilities available -'}
                    </label>

                    <label>
                        {isHindi ? '   (a) सरकारी ट्यूब-वेल की संख्या...................क्षेत्र सिंचाई की गई।' : '   (a) Number of Government Tube-wells...................Area irrigated.'}
                        <input type="text" className="styled-input" placeholder='(a)' />
                    </label>

                    <label>
                        {isHindi ? '   (b) निजी ट्यूब-वेल की संख्या....................यही।' : '   (b) Number of Private Tube-wells....................Ditto.'}
                        <input type="text" className="styled-input" placeholder='(b)' />
                    </label>

                    <label>
                        {isHindi ? '   (c) मजबूत प्रकृति के पुक्का और कच्चे कुएं की संख्या..........................यही।' : '   (c) Number of pucca and earthen wells of durable nature.......................Ditto.'}
                        <input type="text" className="styled-input" placeholder='(c)' />
                    </label>

                    <label>
                        {isHindi ? '   (d) कैनाल द्वारा सिंचाई की गई क्षेत्र' : '   (d) Area irrigated by canal'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '   (e) अन्य स्रोतों द्वारा सिंचाई की गई क्षेत्र' : '   (e) Area irrigated by other sources'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '9. (a) गाँव की कुल जनसंख्या' : '9. (a) Total population of the village'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '   (b) हामलेट का नाम' : '(b) Name of hamlet'}
                        <input type="text" className="styled-input" />
                        {isHindi ? 'हरिजन और बिना भूमि के श्रमिकों की जनसंख्या' : 'Population of Harijan and landless labourers'}
                        <input type="text" className="styled-input" />
                        {isHindi ? 'अन्य' : 'others'}
                        <input type="text" className="styled-input" />
                        {isHindi ? 'कुल' : 'Total'}
                    </label>

                    <label>
                        {isHindi ? '   (c) पहली-कास्ट काब्जा धारकों की संख्या' : '   (c) Number of Pahli-Kasht tenure-holders'}
                        <input type="text" className="styled-input" />
                    </label>

                    <label>
                        {isHindi ? '10. सूट की भौगोलिक विशेषताएँ' : '10. Topographical details of the suit.'}
                        <input type="text" className="styled-input" />
                    </label>
                </div>
                
                <div className='upper-container-name'>
                    <p>{isHindi ? 'भाग 2' : 'Part-2'}</p>
                    <h1>{isHindi ? '(सिद्धांतों को शामिल करने वाला खंड)' : '(Section Containing Principles)'}</h1>
                    <div><label>
                        {isHindi ? 'A - (इकाई योजना खंड)' : 'A - (Unit planning section)'}
                    </label></div>
                    <div><label>
                        {isHindi ? 'B - (इकाई समेकन खंड)' : 'B - (Unit consolidation section)'}
                    </label></div>
                </div>
                <div className='upper-container-name'>
                    <p>{isHindi ? 'भाग 3' : 'Part-3'}</p>
                    <h1>{isHindi ? 'भाग II में शामिल नियमों के आधार पर विभिन्न सार्वजनिक उद्देश्यों के लिए निर्धारित किए जाने वाले प्लॉट नंबरों और उनके क्षेत्रों का विवरण' : 'Details of plot Nos. and their areas proposed to be earmarked for various public purposes on the basis of principles contained in Part II'}</h1>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '1. क्रम संख्या' : '1. Serial No.'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2. प्रत्येक निर्धारित केलिए उद्देश्य' : '2. Purpose for each earmarked.'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '3. प्लॉट नंबर' : '3. Plot Number.'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? ' 4. [ से आरक्षित क्षेत्र ]' : ' 4. [ Area reserved from ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '4.1 होल्डिंग क्षेत्र' : '4.1 Holding area.'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '4.2 गैर होल्डिंग क्षेत्र' : '4.2 Non-holding area.'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '5. कॉलम 4 में दिखाए गए क्षेत्र के आने की मूल्यांकन (एना में)' : '5. Valuation in terms of annas for area shown in column 4'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '6. टिप्पणियाँ' : '6. Remarks'}
                        </label>
                        <input type="text" />
                    </div>


                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm21th;
