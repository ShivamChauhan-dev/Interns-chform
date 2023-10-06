import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm5th = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 5' : 'C.H. FORM 5'}</h1>
                    <h1>{isHindi ? '[नियम 25(b) देखें]' : '[See Rule 25(b)]'}</h1>
                    <p>
                        {isHindi
                            ? 'वर्तमान वार्षिक पंजी से अंश दिखाने वाले सूचना जोड़कर भी निर्मित है जिसमें समझौता सहबी के हिस्से, खिलाफ़ी खट्टा, वृक्ष, कुएं और अन्य सुधार हैं'
                            : 'Notice with extract from current Annual Register showing also the shares of co-tenure-holder in joint holdings, valuation of plots, trees, wells and other improvements existing in plots and details of mistakes and disputes, if any.'}
                        <br />
                        {isHindi ? "श्री" : "Sri"} <input type="text" className="styled-input" /> 
                        {isHindi ? "पुत्र" : "son of"} <input type="text" className="styled-input" /> 
                        {isHindi ? "निवासी" : "resident of"} <input type="text" className="styled-input" /> 
                        
                        <br />
                        {isHindi ? "खतौनी के अंश, वर्ष 13 के लिए" : "An extract from the Khatauni for the year 13"}<input type="text" className="styled-input" /> 
                        {isHindi ? "गाँव की फसली" : "Fasli of village"} <input type="text" className="styled-input" /> 
                        {isHindi ? "परगना" : "pargana"} <input type="text" className="styled-input" /> 
                        {isHindi ? "तहसील" : "tahsil"} <input type="text" className="styled-input" /> 
                        {isHindi ? "जिला" : "district"} <input type="text" className="styled-input" /> 
                        {isHindi
                            ? ' सभी आपके विभागों/होल्डिंग्स के संदर्भ में निम्नलिखित जानकारी दी गई है। कॉलम 19 में रिकॉर्ड की जाँच के दौरान पाए गए गलतियों और विवादों का विवरण होता है। संयुक्त होल्डिंग में विभिन्न सहदार-सहदारियों की मान्यताओं के अनुसार शेयर्स, विभिन्न सुधारों के लिए विभाजन के लिए, कॉलम I के तहत दिखाए गए हैं। प्लॉट्स, पेड़, कुएं और अन्य सुधारों का मूल्यांकन नीचे भी दिखाया गया है। कृपया ध्यान दें कि प्रस्तावित है कि सभी विवाद और आपत्तियों को, जो भी हों, सुनने के बाद निर्णय करने का प्रस्ताव किया जाता है , तो -'
                            : ' in respect of all your departments/holdings is given below. Column 19 contains the details of mistakes and disputes discovered during a check-up of the records. Shares as alleged of various co-tenure-holders in joint holding, for effecting partition are shown in Column I against the name of the tenure-holder concerned. Valuation of plots, trees, wells and others improvements is also shown below. Please take notice that it is proposed to decide, after hearing the parties concerned, all disputes and objection, if any, regarding -'}
                    </p>
                    <p>
                        {isHindi ? '(a) भूमि में अधिकार और दायित्व और संयुक्त होल्डिंग में व्यक्त धाराधारों के हिस्सों की विशेषता और योजनित विभाजन से संबंधित अन्य सभी संबंधित मामलों के बारे में'
                            : '(a) rights in and liabilities in respect of land, and specification of shares of individual tenure-holders in joint holding and other cognate matters relating to proposed partition; and'}
                    </p>
                    <p>
                        {isHindi ? '(b) भूखंड, पौधों, कुएं और अन्य सुधार की मूल्यांकन।'
                            : '(b) valuation of plots, tress, wells and other improvements.'}
                    </p>
                    <p>
                        {isHindi
                            ? 'यदि इस अंश में किसी भी प्रविष्टि के हस्ताक्षर या सही होने के खिलाफ़ कोई आपत्ति हो, तो इस सूचना प्राप्ति के पूर्व दो वर्गों के लिए अलग-अलग दर्ज करनी चाहिए, जिन्हें प्राप्ति के पश्चात् इस समय के लिए 21 दिनों के भीतर दर्ज किया जाना चाहिए। यदि निर्धारित समय के भीतर कोई आपत्ति प्राप्त नहीं होती है, तो माना जाएगा कि आपको किसी भी प्रविष्टि के खिलाफ़ कोई आपत्ति नहीं है और कानून के मुताबिक़ आदेश दिए जाएंगे। इस कार्यालय के मुद्रा और मेरे हाथ के नीचे दिया गया है'
                            : 'If you have any objection to make against the signature or correctness of any entry in this extract, or against the need for partition, it should be filed separately for each of the two categories specified above within twenty-one-days from the receipt of this notice. In case no objection is received within the time prescribed it shall be presumed that you have no objection to make against any of the entries and orders shall be passed according to law. Given under my hand and the seal of my office this the'}
                            <input type="text" className="styled-input" />
                        {isHindi ? "के दिन" : "day of"} <input type="text" className="styled-input" /> 
                        {isHindi ? "19" : "19"} <input type="text" className="styled-input" /> 
                        {isHindi ? "कार्यालय का मुहर" : "Seal of the office."}
                    </p>
                    
                    <h6>
                        {isHindi
                            ? 'सहायक संघटन अधिकारी,सर्कल'
                            : 'Assistant Consolidation Officer,Circle'}
                            <input type="text" className="styled-input" /> 
                    </h6>
                    <h1>{isHindi ? 'अंश' : 'Extract'}</h1>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label htmlFor='khataNumber'>
                            {isHindi ? '1. वर्तमान वार्षिक पंजी की खाता संख्या' : '1. No of Khata of the current Annual Register'}
                        </label>
                        <input type='text' id='khataNumber' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderName'>
                            {isHindi
                                ? '2. सहबी होल्डिंग के मामले में धाराधार का नाम, माता-पिता का नाम और निवास और उसका हिस्सा'
                                : '2. Name of tenure holder with parentage and residence and his share, in case of joint holding'}
                        </label>
                        <input type='text' id='tenureHolderName' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureClass'>{isHindi ? '3. धाराधार का वर्ग' : '3. Class of tenure'}</label>
                        <input type='text' id='tenureClass' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureCommencementYear'>
                            {isHindi ? '4. धाराधार की प्रारंभ वर्ष' : '4. Year of commencement of tenure'}
                        </label>
                        <input type='text' id='tenureCommencementYear' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='plotNumber'>{isHindi ? '5. ख़त्ता संख्या' : '5. Plot No.'}</label>
                        <input type='text' id='plotNumber' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='totalArea'>{isHindi ? '6. कुल क्षेत्र' : '6. Total Area'}</label>
                        <input type='text' id='totalArea' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='Non-Consolidable'>{isHindi ? '7. क्षेत्र गैर-संघटनीय' : '7. Area Non-Consolidable'}</label>
                        <input type='text' id='Non-Consolidable' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='Consolidable'>{isHindi ? '8. क्षेत्र संघटनीय' : '8. Area Consolidable'}</label>
                        <input type='text' id='Consolidable' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='exchangeRatio'>
                            {isHindi
                                ? '9. कॉलम 8 में दिखाए गए संघटनीय क्षेत्र का अन्नासों में (शब्दों में) विनिमय अनुपात'
                                : '9. Exchange ratio in annas (in words) of consolidable area shown in Column 8'}
                        </label>
                        <input type='text' id='exchangeRatio' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='valuation'>{isHindi ? '10. संघटनीय क्षेत्र का मूल्यांकन अन्नासों में' : '10. Valuation in annas of the Consolidable area'}</label>
                        <input type='text' id='valuation' />
                    </div>
                    <p>
                        {isHindi
                            ? 'टिप्पणी. - स्थान पर पाए जाने वाले क्षेत्र को कॉलम 6 से 8 में रिकॉर्ड किया जाना चाहिए। वार्षिक पंजी में रिकॉर्ड किया गया क्षेत्र कॉलम 19 में दिखाया जाना चाहिए।'
                            : 'Note. - Area as found on the spot should be recorded in Columns 6 to 8. The area recorded in the Annual Register should be shown in Column 19.'}
                    </p>
                    <div className='CH-Form-Data'>
                        <label htmlFor='Description'>
                            {isHindi
                                ? '11. विवरण में कुएं, ट्यूब-वेल, आदि जैसे सुधार, यदि कोई है, जो ख़त्ते में मौजूद है, या उसकी सीमा पर खड़ा वृक्षों के अलावा अन्य वृक्ष'
                                : '11. Details of improvement, if any, like a well, tube-well, etc., existing in the plot or trees other than those Constituting a grove standing in the plot or on its boundaries (Description)'}
                        </label>
                        <input type='text' id='Description' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='Measurementsandage'>
                            {isHindi
                                ? '12. माप और आयु के साथ विवरण में कुएं, ट्यूब-वेल, आदि जैसे सुधार, यदि कोई है, जो ख़त्ते में मौजूद है, या उसकी सीमा पर खड़ा वृक्षों के अलावा अन्य वृक्ष'
                                : '12. Details of improvement, if any, like a well, tube-well, etc., existing in the plot or trees other than those Constituting a grove standing in the plot or on its boundaries (Measurements and age)'}
                        </label>
                        <input type='text' id='Measurementsandage' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='Estimatedvalue'>
                            {isHindi
                                ? '13. मूल्यांकन में विवरण में कुएं, ट्यूब-वेल, आदि जैसे सुधार, यदि कोई है, जो ख़त्ते में मौजूद है, या उसकी सीमा पर खड़ा वृक्षों के अलावा अन्य वृक्ष'
                                : '13. Details of improvement, if any, like a well, tube-well, etc., existing in the plot or trees other than those Constituting a grove standing in the plot or on its boundaries (Estimated value)'}
                        </label>
                        <input type='text' id='Estimatedvalue' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='propertyOwner'>
                            {isHindi ? '14. संपत्ति के मालिक का नाम, उनका पता और संपत्ति में हिस्सा' : '14. Name of the owner, his address, and share in the property'}
                        </label>
                        <input type='text' id='propertyOwner' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor="RevenuePayable">
                            {isHindi ? '15. भूमि के स्वामी द्वारा देय किया जाने वाला भूमि राजस्व' : '15. Land revenue payable by the tenure-holder'}
                        </label>
                        <input type="text" id='RevenuePayable' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderDetails'>
                            {isHindi
                                ? '16. विवरण में कुएं, ट्यूब-वेल, आदि जैसे सुधार के विवरण, यदि कोई हो, जो ख़त्ते में मौजूद है, या उसकी सीमा पर खड़ा वृक्षों के अलावा अन्य वृक्ष'
                                : '16. Details of Assami, if any (Name with parentage and residence)'}
                        </label>
                        <input type='text' id='tenureHolderDetails' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderDetails'>
                            {isHindi ? '17. विवरण में कुएं, ट्यूब-वेल, आदि जैसे सुधार के विवरण, यदि कोई हो, जो ख़त्ते में मौजूद है, या उसकी सीमा पर खड़ा वृक्षों के अलावा अन्य वृक्ष'
                                : '17. Details of Assami, if any (Year of commencement of tenure)'}
                        </label>
                        <input type='text' id='tenureHolderDetails' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='tenureHolderDetails'>
                            {isHindi ? '18. विवरण में कुएं, ट्यूब-वेल, आदि जैसे सुधार के विवरण, यदि कोई हो, जो ख़त्ते में मौजूद है, यदि कोई हो, तो किराया देय हो' : '18. Details of Assami, if any (Rent payable)'}
                        </label>
                        <input type='text' id='tenureHolderDetails' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='mistakesDisputes'>
                            {isHindi ? '19. दर्ज किए गए गलतियों और विवादों का विवरण, और सी.एच. फॉर्म 4 (भाग II) में दर्ज हिस्सा' : '19. Details of mistakes and disputes discovered, and share recorded in C.H. Form 4 (Part II)'}
                        </label>
                        <input type='text' id='mistakesDisputes' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input8'>{isHindi ? '20. टिप्पणियाँ' : '20. Remarks'}</label>
                        <input type='text' id='input8' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm5th;
