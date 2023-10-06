import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rdApart1 = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 23-A (भाग I)' : 'C.H. Form 23-A (Part I)'}</h1>
                    <h1>{isHindi ? '[नियम 109 देखें]' : '[See Rule 109]'}</h1>
                    <p>{isHindi ? 'सभी धाराधारकों द्वारा स्वैच्छिक रूप से तैयार किया गया प्राविधिक समेकन योजना' : 'Provisional Consolidation Scheme prepared voluntarily by all the tenure-holders'}</p>
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
                        <label>{isHindi ? '[ मूल धाराधार ]' : '[ Original holding ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='nameAndParentage'>
                            {isHindi ? '2. नाम और पिता का नाम धाराधार धारी का पता' : '2. Name and Parentage of Tenure Holder with Residence'}
                        </label>
                        <input type="text" id="nameAndParentage" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureClass'>
                            {isHindi ? '3. धाराधार का वर्ग' : '3. Class of Tenure'}
                        </label>
                        <input type="text" id="tenureClass" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='khataKhatauni'>
                            {isHindi ? '4. खता खतौनी की संख्या' : '4. No. of Khata Khatauni'}
                        </label>
                        <input type="text" id="khataKhatauni" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNumber'>
                            {isHindi ? '5. प्लॉट नंबर' : '5. Plot No.'}
                        </label>
                        <input type="text" id="plotNumber" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='area'>
                            {isHindi ? '6. क्षेत्रफल' : '6. Area'}
                        </label>
                        <input type="text" id="area" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='landRevenue'>
                            {isHindi ? '7. भूमि राजस्व' : '7. Land Revenue'}
                        </label>
                        <input type="text" id="landRevenue" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '[ होल्डिंग पर या उसके भाग पर आबंटन छोड़कर अन्य संवाहनों ]' : '[ Encumbrances on the holding or part thereof other than easements ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '8. आबंटन कर्ता का नाम और आबंटन के प्रकार' : '8. Name of encumbrancer with nature of encumbrance'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '[ धाराधार के अधीन असामी, अगर कोई है ]' : '[ Asami, if any, under the tenure-holder ] '}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='amount9'>
                            {isHindi ? '9. राशि' : '9. Amount'}
                        </label>
                        <input type='text' id='amount9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='nameParentageResidence9'>
                            {isHindi ? '10. नाम और पालक जन्म सहित निवास' : '10. Name and parentage with residence'}
                        </label>
                        <input type='text' id='nameParentageResidence9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNo9'>
                            {isHindi ? '11. प्लॉट नंबर' : '11. Plot No.'}
                        </label>
                        <input type='text' id='plotNo9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='area9'>
                            {isHindi ? '12. क्षेत्र' : '12. Area'}
                        </label>
                        <input type='text' id='area9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='rentPayable9'>
                            {isHindi ? '13. किराया देय' : '13. Rent payable'}
                        </label>
                        <input type='text' id='rentPayable9' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '[ प्रस्तावित होल्डिंग ]' : '[ Proposed holding ]'}</label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '14. याज्य सीमा' : '14. Class of tenure'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '15. प्लॉट नंबर' : '15. Plot No.'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '16. आवंटित क्षेत्र' : '16. Area Alloted'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '17. भू-राजस्व' : '17. Land Revenue'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? ' [ प्रस्तावित होल्डिंग पर संलग्न बाधाएँ ]' : ' [ Encumbrances attached to the proposed holding ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '18. आबंटन कर्ता का नाम और आबंटन के प्रकार' : '18. Name of encumbrancer with nature of encumbrance'}
                        </label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '[ धाराधार के अधीन असामी, अगर कोई है ]' : '[ Asami, if any, under the tenure-holder ] '}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='amount9'>
                            {isHindi ? '19. राशि' : '19. Amount'}
                        </label>
                        <input type='text' id='amount9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='nameParentageResidence9'>
                            {isHindi ? '20. नाम और पालक जन्म सहित निवास' : '20. Name and parentage with residence'}
                        </label>
                        <input type='text' id='nameParentageResidence9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNo9'>
                            {isHindi ? '21. प्लॉट नंबर' : '21. Plot No.'}
                        </label>
                        <input type='text' id='plotNo9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='area9'>
                            {isHindi ? '22. क्षेत्र' : '22. Area'}
                        </label>
                        <input type='text' id='area9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='rentPayable9'>
                            {isHindi ? '23. किराया देय' : '23. Rent payable'}
                        </label>
                        <input type='text' id='rentPayable9' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? ' [ पेड़, कुएं, इमारतें या अन्य सुधार जो स्वीकृत किए गए हैं ]' : ' [ Trees, wells, buildings, or other improvements allotted to the tenure-holder ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '24. पेड़, कुएं या अन्य सुधार की संख्या और प्रकार' : '24. No. and kind of trees, wells, or other improvements'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '25. पेड़, आदि के मौजूद प्लॉट नंबर' : '25. Plot No. on which trees, etc. exist'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '26. मुआवजा' : '26. Compensation'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '27. किसको देने है' : '27. To Whome Payable'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '28. टिप्पणी' : '28. Remark'}
                        </label>
                        <input type="text" />
                    </div>



                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm23rdApart1;
