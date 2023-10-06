import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm2ndA = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 2-A' : 'C.H. FORM 2-A'}</h1>
                    <h1>{isHindi ? '[नियम 21 देखें]' : '[See Rule 21]'}</h1>
                    <p>{isHindi ? 'खसरा चकबंदी' : 'Khasra Chakbandi'}</p>
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
                        <label htmlFor='plotNumber'>
                            {isHindi ? '1. प्लॉट नंबर' : '1. Plot Number'}
                        </label>
                        <input type='text' id='plotNumber' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor=''>
                            {isHindi ? '2. [ क्षेत्र ]' : '2. [ Area ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='areaBasicKhasara'>
                            {isHindi ? '2.1 मूल खसरा के कॉलम में दर्ज क्षेत्र' : '2.1 Area as recorded in column of the basic Khasara'}
                        </label>
                        <input type='text' id='areaBasicKhasara' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='areaCurrentSettlement'>
                            {isHindi ? '2.2 वर्तमान बंदोबस्त में दर्ज क्षेत्र' : '2.2 Area as recorded in the current settlement'}
                        </label>
                        <input type='text' id='areaCurrentSettlement' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='areaFoundOnSpot'>
                            {isHindi ? '2.3 स्पॉट पर पाए गए क्षेत्र' : '2.3 Area as found on spot'}
                        </label>
                        <input type='text' id='areaFoundOnSpot' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='noOfKhataKhatauni'>
                            {isHindi ? '3. सीएच फॉर्म 11 में सुधारित वार्षिक पंजी में खता खतौनी की संख्या, लाल इंक में' : '3. No of Khata Khatauni in revised annual register in CH Form 11 in red ink'}
                        </label>
                        <input type='text' id='noOfKhataKhatauni' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '4. [ कोई सुधार का विवरण, यदि कोई, जैसे कुआं, ट्यूब-वेल, आदि, प्लॉट में मौजूद है, या उसकी सीमाओं पर खड़ी नदी के अलावा किसी और पेड़ों की विवरण। ]' : '4. [ Details of improvements, if any, like a well, tube-well, etc., existing in the plot or trees other than those constituting a grove standing in the plot or on its boundaries ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolder'>
                            {isHindi ? '4.1. धाराधार का नाम, पता और प्रकार खाते की पहली प्लॉट के खिलाफ' : '4.1. Name of tenure-holder with address and kind of tenure against the first plot of that khata'}
                        </label>
                        <input type='text' id='tenureHolder' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='asami'>
                            {isHindi ? '4.2. असामी का नाम, यदि कोई, उसका पता (मूल खसरा के कॉलम 5)' : '4.2. Name of asami, if any, with his address (Column 5 of the basic khasra)'}
                        </label>
                        <input type='text' id='asami' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='possessionPerson'>
                            {isHindi ? '4.3. मूल खसरा के ब्यान में दर्शाया गया होने वाला व्यक्ति, यदि कोई, जिसे विवाद का ब्यान किया गया है' : '4.3. Name of the person in possession, if any, shown in the remarks column of the basic khasra'}
                        </label>
                        <input type='text' id='possessionPerson' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='disputeDetails'>
                            {isHindi ? '4.4. व्यापाद का विवरण, कब्जे की दावा की अवधि और इसका कारण' : '4.4. Details of dispute of possession with the period of possession claimed and its basis'}
                        </label>
                        <input type='text' id='disputeDetails' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='propertyDescription'>
                            {isHindi ? '4.5. विवरण' : '4.5. Description'}
                        </label>
                        <input type='text' id='propertyDescription' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='propertyMeasurements'>
                            {isHindi ? '4.6. मापन' : '4.6. Measurements'}
                        </label>
                        <input type='text' id='propertyMeasurements' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='propertyValue'>
                            {isHindi ? '4.7. अनुमानित मूल्य' : '4.7. Estimated Value'}
                        </label>
                        <input type='text' id='propertyValue' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='ownerDetails'>
                            {isHindi ? '4.8. मालिक का नाम, उसका पता और संपत्ति में उसका हिस्सा' : '4.8. Name of the owner, his address, and share in the property'}
                        </label>
                        <input type='text' id='ownerDetails' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='grovesDetails'>
                            {isHindi
                                ? '5. [ धारा 4 के तहत अधिसूचना जारी करने वाले वर्ष से पहले के कृषि वर्ष में मौजूद बाग़ के विवरण ]' : '5. [ Details of groves existing in the agricultural year immediately preceding the year in which the notification under section 4 was issued ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='nature5.1'>
                            {isHindi ? '5.1 प्रकृति' : '5.1 Nature'}
                        </label>
                        <input type='text' id='nature5.1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='area5.2'>
                            {isHindi ? '5.2 क्षेत्र' : '5.2 Area'}
                        </label>
                        <input type='text' id='area5.2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='uncultivatedArea6'>
                            {isHindi ? '6. [ अकृषि क्षेत्र का विवरण ]' : '6. [ Details of uncultivated area ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='nature6.1'>
                            {isHindi ? '6.1 प्रकृति' : '6.1 Nature'}
                        </label>
                        <input type='text' id='nature6.1' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='includedInHolding6.2'>
                            {isHindi ? '6.2 होल्डिंग में शामिल' : '6.2 Included in holding'}
                        </label>
                        <input type='text' id='includedInHolding6.2' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='notIncludedInHolding6.3'>
                            {isHindi ? '6.3 होल्डिंग में शामिल नहीं' : '6.3 Not included in holding'}
                        </label>
                        <input type='text' id='notIncludedInHolding6.3' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='irrigationDetails'>
                            {isHindi ? '7. [ सिंचाई का विवरण ]' : '7. [ Details of irrigation ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='sourceAndMethod7.1'>
                            {isHindi ? '7.1 स्रोत और विधि' : '7.1 Source and method'}
                        </label>
                        <input type='text' id='sourceAndMethod7.1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='irrigableArea7.2'>
                            {isHindi ? '7.2 सिंचाई क्षेत्र' : '7.2 Irrigable area'}
                        </label>
                        <input type='text' id='irrigableArea7.2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='cropsGrownDuring'>
                            {isHindi ? '8. [ सामान्य रूप से उगाई जाने वाली फसलें ]' : '8. [ Crops generally grown during ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='kharif'>
                            {isHindi ? '8.1 खरीफ ' : '8.1 Kharif '}
                        </label>
                        <input type='text' id='kharif' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='rabi'>
                            {isHindi ? '8.2 रबी ' : '8.2 Rabi '}
                        </label>
                        <input type='text' id='rabi' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='zaid'>
                            {isHindi ? '8.3 ज़ैद ' : '8.3 Zaid '}
                        </label>
                        <input type='text' id='zaid' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='physicalFeatures'>
                            {isHindi ? '9. खसरा के भौतिक विशेषताएँ जो खेती नहीं होती हैं, अगर अलग से सर्वेक्षित नहीं है, उसका स्तर' : '9. Physical features of the plot showing in particular the area of uncultivated persons if not separately surveyed, its level with.'}
                        </label>
                        <input type='text' id='physicalFeatures' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='soilClass'>
                            {isHindi ? '10. वर्तमान बंदोबस्त में दर्ज भूमि वर्ग' : '10. Soil class as recorded in the current settlement'}
                        </label>
                        <input type='text' id='soilClass' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='Area'>
                            {isHindi ? '11. [ क्षेत्र ]' : '11. [ Area]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='nonconsolidableArea'>
                            {isHindi ? '11.1. गैर-संघटनीय क्षेत्र' : '11.1. Non-Consolidable Area'}
                        </label>
                        <input type='text' id='nonconsolidableArea' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='consolidableArea'>
                            {isHindi ? '11.2. संघटनीय क्षेत्र' : '11.2. Consolidable Area'}
                        </label>
                        <input type='text' id='consolidableArea' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='exchangeRatio'>
                            {isHindi ? '12. प्लॉट के संघटनीय क्षेत्र की अन्ने में आपसाप' : '12. Exchange Ratio in Annas of the Consolidable Area of the Plot as Determined by the A.C.O.'}
                        </label>
                        <input type='text' id='exchangeRatio' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='valuationConsolidableArea'>
                            {isHindi ? '13. प्लॉट के संघटनीय क्षेत्र का मूल्यांकन (कॉल27 x कॉल28)' : '13. Valuation of the Consolidable Area of the Plot (Col27 x Col28)'}
                        </label>
                        <input type='text' id='valuationConsolidableArea' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='modifiedExchangeRatio'>
                            {isHindi ? '14. प्रधान प्राधिकृतियों द्वारा संशोधित आपसाप का अनुभव' : '14. Exchange Ratio as Modified by Superior Authorities, with Details of the Case No. and Date of Order'}
                        </label>
                        <input type='text' id='modifiedExchangeRatio' />
                    </div>

                    <div className='CH-Form-Data'>
                        <label htmlFor='modifiedValuation'>
                            {isHindi ? '15. प्रधान प्राधिकृतियों द्वारा संशोधित मूल्यांकन (कॉल27 x कॉल30)' : '15. Valuation as Modified by Superior Authorities (Col27 x Col30)'}
                        </label>
                        <input type='text' id='modifiedValuation' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi
                                ? '16. [ जिसमें आवंटित किया गया, सी.एच फॉर्म 23 का खता संख्या, अगर कुछ हिस्सा ही आवंटित किया गया है, तो क्षेत्र/मूल्यांकन ]' : '16. [ Khata No. of C.H Form 23 to Which Allotted with Area/Valuation if Partly Allotted ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi
                                ? '16.1 आ.स.ओ. द्वारा प्रस्तावित अनुसार' : '16.1 As Proposed by ACO'}
                        </label>
                        <input type='text' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi
                                ? '16.2 सी.ओ. द्वारा संशोधित अनुसार' : '16.2 As Modified by CO'}
                        </label>
                        <input type='text' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi
                                ? '16.3 अपील और संशोधन में संशोधित अनुसार' : '16.3 As Modified in Appeals and Revisions'}
                        </label>
                        <input type='text' />
                    </div>
                    <div className='CH-Form-Data'>
                            <label htmlFor='input17'>
                                {isHindi ? '17. टिप्पणियाँ' : '17. Remarks'}
                            </label>
                            <input type='text' id='input17' />
                        </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm2ndA;
