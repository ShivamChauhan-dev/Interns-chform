import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm5thB = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);

     return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? '[सी.एच. फॉर्म 5-ब]' : '[C.H. FORM 5-B]'}</h1>
                    <h1>{isHindi ? '[नियम 25(b) देखें]' : '[See Rule 25(b)]'}</h1>
                    <p>
                        {isHindi ? "बुकिंग नंबर" : "Booking Number"}
                        <input type="text" className="styled-input" />
                        {isHindi ? 'सीरियल नंबर' : 'Serial Number'}
                        <input type="text" className="styled-input" />
                    </p>

                    <p>
                        {isHindi
                            ? '(a) भूमि में अधिकार और दायित्व और संयुक्त होल्डिंग में व्यक्त धाराधारों के हिस्सों की विशेषता और योजनित विभाजन से संबंधित अन्य सभी संबंधित मामलों के बारे में'
                            : '(a) rights in and liabilities in respect of land, and specification of shares of co-tenure-holders in joint holdings, and other cognate matters relating to proposed partition; and'}
                    </p>
                    <p>
                        {isHindi
                            ? '(b) ख़त्ता संख्या'
                            : '(b) valuation of plots, trees, wells and other improvements.'}
                    </p>
                    <p>
                        {isHindi
                            ? 'इसके बारे में कुछ कहने के लिए कुछ हो तो कृपया ध्यान दें कि प्रत्येक के लिए यह विशेष रूप से दर्ज किया जाना चाहिए कि आपके पास इस विधि के तहत अधिकार में कोई आपत्ति की है, या किसी भी प्रकार की गलत या सही जानकारी के ख़िलाफ नहीं है, या तहसील के लिए आवश्यकता के ख़िलाफ। इस आलेख को प्राप्ति की ख़बर के बाद 21 दिन के भीतर अलग से दर्ज करना चाहिए। यदि समय सीमा के भीतर कोई आपत्ति प्राप्त नहीं होती, तो मान लिया जाएगा कि आपको किसी भी आलेख के ख़िलाफ कोई आपत्ति नहीं है और विधि के हिसाब से आदेश दिए जाएंगे।'
                            : `If you have any thing to say about the nature or correctness of any entry, or against the need for partition it should be filed separately for each of the two categories specified above within twenty-one-days from the receipt of this notice. In case no objection is received within the time prescribed, it shall be presumed that you have no objection to make against any of the entries and orders shall be passed according to law.`}
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
                        {isHindi ? 'कार्यालय का मुहर,' : 'Seal of the office'}
                    </p>
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
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input1'>
                            {isHindi ? '1. प्लॉट नंबर' : '1. Plot No.'}
                        </label>
                        <input type='text' id='input1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input2'>
                            {isHindi
                                ? '2. मौजूदा वार्षिक रजिस्टर के ख़त्ते की संख्या।'
                                : '2. No. of the Khata of current Annual Register.'}
                        </label>
                        <input type='text' id='input2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input3'>
                            {isHindi
                                ? '3. वार्षिक रजिस्टर में दर्ज व्यक्ति का नाम उसके पते और प्रकृति के साथ।'
                                : '3. Name of the person recorded in the annual register with his address and nature of tenure.'}
                        </label>
                        <input type='text' id='input3' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input4'>
                            {isHindi
                                ? '4. व्यक्ति का नाम जिस पर क़ब्ज़ा हो रहा है उसके पते और यदि वह दावा करता है कि वह अन्यों के साथ भूमि के क़ब्ज़े में है तो उसका हिस्सा।'
                                : '4. Name of the person alleged to be in possession with his address and share in case he claims to be in possession of the land jointly with others.'}
                        </label>
                        <input type='text' id='input4' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input5'>
                            {isHindi ? '5. कुल।' : '5. Total.'}
                        </label>
                        <input type='text' id='input5' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input6'>
                            {isHindi
                                ? '6. क्षेत्र जो संघटनयोग्य नहीं है।'
                                : '6. Area Non-Consolidable.'}
                        </label>
                        <input type='text' id='input6' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input7'>
                            {isHindi ? '7. संघटनयोग्य क्षेत्र।' : '7. Area Consolidable.'}
                        </label>
                        <input type='text' id='input7' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input8'>
                            {isHindi
                                ? '8. अन्ना में संघटनयोग्य क्षेत्र में विनिमय अनुपात (शब्दों में)।'
                                : '8. Exchange ratio in annas (in words) of the consolidable area shown in Column 7.'}
                        </label>
                        <input type='text' id='input8' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input9'>
                            {isHindi ? '9. वार्षिक मूल्यांकन।' : '9. Annual valuation.'}
                        </label>
                        <input type='text' id='input9' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi
                                ? '10. [प्लॉट में या उसकी सीमाओं में ख़ुदाई जैसे कोई भी सुधारों का विवरण, यदि हो, जैसे कि एक कुएं, ट्यूब-वेल, आदि, मौजूद है।] '
                                : '10. [Details of improvements, if any, like a well, tube-well, etc., existing in the plot or trees other than those constituting a grove standing in the plot or its boundaries.]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input10.1'>
                            {isHindi ? '10.1 वर्ग.' : '10.1 Class.'}
                        </label>
                        <input type='text' id='10.1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input10.2'>
                            {isHindi
                                ? '10.2 माप और आयु।'
                                : '10.2 Measurements and age.'}
                        </label>
                        <input type='text' id='10.2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input10.3'>
                            {isHindi ? '10.3 मूल्य मूल्यांकन।' : '10.3 Estimated Value.'}
                        </label>
                        <input type='text' id='10.3' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input10.4'>
                            {isHindi
                                ? '10.4 मालिक का नाम, उसका पता और संपत्ति में उसका हिस्सा।'
                                : '10.4 Name of the owner, his address and share in the property.'}
                        </label>
                        <input type='text' id='10.4' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input11'>
                            {isHindi
                                ? '11. क्षेत्र की कोई गलतियों का विवरण, यदि हो।'
                                : '11. Details of mistakes of area, if any.'}
                        </label>
                        <input type='text' id='input11' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input12'>
                            {isHindi ? '12. टिप्पणी।' : '12. Remark.'}
                        </label>
                        <input type='text' id='input12' />
                    </div>
                </div>
            </div>
            <hr />

        </>
    );
};

export default CHForm5thB;
