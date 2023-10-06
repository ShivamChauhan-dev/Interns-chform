import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm11th = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 11' : 'C.H. FORM 11'}</h1>
                    <h1>{isHindi ? '[नियम 28(1) देखें]' : '[See Rule 28(1)]'}</h1>
                    <p>
                        {isHindi
                            ? 'संशोधित वार्षिक पंजी परिवर्तन'
                            : 'Revised Annual Register'}
                        <br />
                    </p>
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
                        <label htmlFor='serialNo'>
                            {isHindi ? '1. क्रमांक' : '1. Serial No'}
                        </label>
                        <input type='text' id='serialNo' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderInfo'>
                            {isHindi ? '2. प्रतिशत और निवास के साथ धाराधार का नाम' : '2. Name of tenureholder with percentage and residence'}
                        </label>
                        <input type='text' id='tenureHolderInfo' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='commencementYear'>
                            {isHindi ? '3. धाराधार की प्रारंभ वर्ष' : '3. Year of commencement of tenure'}
                        </label>
                        <input type='text' id='commencementYear' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='plotCount'>
                            {isHindi ? '4. होल्डिंग के प्रत्येक प्लॉट की संख्या' : '4. No of each plot of the holding'}
                        </label>
                        <input type='text' id='plotCount' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='plotArea'>
                            {isHindi ? '5. प्रत्येक प्लॉट का क्षेत्र (बीघा या एकड़ में)' : '5. Area of each plot in bighas or acres'}
                        </label>
                        <input type='text' id='plotArea' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='landRevenue'>
                            {isHindi ? '6. धाराधार द्वारा देय भूमि कर या किराया' : '6. Land revenue or rent payable by the tenureholder'}
                        </label>
                        <input type='text' id='landRevenue' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='serialNumberBasicKhatauni'>
                            {isHindi ? '7. मूल खतौनी में क्रमांक' : '7. Serial Number in basic Khatauni'}
                        </label>
                        <input type='text' id='serialNumberBasicKhatauni' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='serialNumber'>
                            {isHindi ? '8. [सहायक संघटन अधिकारी, संघटन अधिकारी और अन्य अधिकारियों द्वारा विभाजन के संबंध में आदेशों का विवरण]' : '8. [Particulars of orders regarding partition passed by the Assistant Consolidation Officer, Consolidation Officer and other officers]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderNameShares'>
                            {isHindi ? '8.1 धाराधार का नाम और विवरण (यदि हिस्सों के आधार पर विभाजित है)' : '8.1 Name of the tenure holder with details of shares if partitioned on the basis of shares'}
                        </label>
                        <input type='text' id='tenureHolderNameShares' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='landRevenueColumn8'>
                            {isHindi ? '8.2 कॉलम 8 में धाराधार द्वारा देय भूमि कर' : '8.2 Land revenue payable by the tenure-holder shown in column 8'}
                        </label>
                        <input type='text' id='landRevenueColumn8' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='BasicKhatauni'>
                            {isHindi ? '8.3 [यदि विभाजन प्लॉट के आधार पर होता है, तो प्रत्येक धाराधार के लिए (कुरास) का विवरण]' : '8.3 [If partition is effected on plot basis details of (Quras) for each tenure holder]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureholderNumber'>
                            {isHindi ? '8.3.1 धाराधारकारी की संख्या' : '8.3.1 Number of tenureholder'}
                        </label>
                        <input type='text' id='tenureholderNumber' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNumberArea'>
                            {isHindi ? '8.3.2 प्रत्येक प्लॉट/क्षेत्र की संख्या' : '8.3.2 Number of each plot/area'}
                        </label>
                        <input type='text' id='plotNumberArea' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='landRevenueColumn10'>
                            {isHindi ? '8.3.3 कॉलम 10 में धाराधार द्वारा देय भूमि कर' : '8.3.3 Land revenue payable by the tenure-holder shown in column 10'}
                        </label>
                        <input type='text' id='landRevenueColumn10' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='orderDateCaseDesignation'>
                            {isHindi ? '9. आदेश की तारीख और मामले की संख्या साथ ही पदनाम' : '9. Date of order and case number along with designation'}
                        </label>
                        <input type='text' id='orderDateCaseDesignation' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '10. [अगर कोई हो, तो भोजन के हिस्से का विवरण जो अविभाजित रहेगा।]' : '10. [Details of the part of the holding, if any, which will remain unpartitioned.]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNumber'>
                            {isHindi ? '10.1 प्लॉट नंबर' : '10.1 Plot Number'}
                        </label>
                        <input type='text' id='plotNumber' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='plotArea'>
                            {isHindi ? '10.2 क्षेत्र' : '10.2 Area'}
                        </label>
                        <input type='text' id='plotArea' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='landRevenuePayable'>
                            {isHindi ? '10.3 भूमि कर देय' : '10.3 Land Revenue Payable'}
                        </label>
                        <input type='text' id='landRevenuePayable' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='serialNumber'>
                            {isHindi ? '11. क्रमिक संख्या (कॉलम 1) की खतास सम्मिलित' : '11. Serial Number (Col 1) of Khatas amalgamated'}
                        </label>
                        <input type='text' id='serialNumber' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHoldersShares'>
                            {isHindi ? '12. सम्मिलित खता में धाराधारकारियों के नाम और विवरण' : '12. Name of tenure-holders and details of shares in amalgamated Khata'}
                        </label>
                        <input type='text' id='tenureHoldersShares' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='orderDateCaseNumber'>
                            {isHindi ? '13. आदेश की तारीख और मामले की संख्या' : '13. Date of order and case number'}
                        </label>
                        <input type='text' id='orderDateCaseNumber' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='remarks'>
                            {isHindi ? '14. टिप्पणियाँ' : '14. Remarks'}
                        </label>
                        <input type='text' id='remarks' />
                    </div>

                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm11th;