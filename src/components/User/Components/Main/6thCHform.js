import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm6th = ({ setAuth }) => {
  const [isHindi, setIsHindi] = useState(false);

  return (
    <>
      <div className='Header'>
      </div>
      <div className='main'>
        <div className='upper-container'>
          <h1>{isHindi ? "[सी.एच. फॉर्म 4]" : "[C.H. FORM 6]"}</h1>
          <h1>{isHindi ? "[नियम 22 (एफ) देखें]" : "[See Rule 25 (f)]"}</h1>
          <p>
            {isHindi
              ? "मिसिलबंद केस का रजिस्टर"
              : "Misilband register of cases instituted before"}
            <input type="text" className="styled-input" /> 
            {isHindi ? "तहसील" : "tahsil"}
            <input type="text" className="styled-input" /> 
            {isHindi ? "जिला" : "district"}
            <input type="text" className="styled-input" />
          </p>
          <hr />
        </div>
        <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
        {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
      </button>
        <div className='upper-container-name'>
          <div className='CH-Form-Data'>
            <label htmlFor='input1'>{isHindi ? '1. मामला संख्या' : '1. Case No.'}</label>
            <input type='text' id='input1' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input2'>{isHindi ? '2. गाँव और परगना' : '2. Village and Pargana.'}</label>
            <input type='text' id='input2' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input3'>{isHindi ? '3. पक्षों का नाम' : '3. Name of Parties.'}</label>
            <input type='text' id='input3' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input4'>{isHindi ? '4. मामले का विवरण' : '4. Description of the case.'}</label>
            <input type='text' id='input4' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input5'>{isHindi ? '5. प्रारम्भ करने की तारीख' : '5. Date of Institution.'}</label>
            <input type='text' id='input5' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input6'>{isHindi ? '6. आदेश की तारीख' : '6. Date of Order.'}</label>
            <input type='text' id='input6' />
          </div>
          <div className='CH-Form-Data'>
            <label>{isHindi ? '7. [जो आदेश पारित हुए हैं के आलोचना]' : '7. [Gist of orders passed regarding.]'}</label>
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input7.1'>{isHindi ? '7.1 विभाजन और संयोजन' : '7.1 Partition and amalgamation.'}</label>
            <input type='text' id='input7.1' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input7.2'>{isHindi ? '7.2 अन्य मामले' : '7.2 Other Matters.'}</label>
            <input type='text' id='input7.2' />
          </div>
          <div className='CH-Form-Data'>
            <label>{isHindi ? '8. [जो आदेशों का अमलद्रमाद की तारीख]' : '8. [Dates of amaldramad of orders mentioned in.]'}</label>
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input8.1'>{isHindi ? '8.1 कॉलम 7' : '8.1 Column 7.'}</label>
            <input type='text' id='input8.1' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input8.2'>{isHindi ? '8.2 कॉलम 8' : '8.2 Column 8.'}</label>
            <input type='text' id='input8.2' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input9'>{isHindi ? "9. चालान संख्या और तारीख जिससे फ़ाइल को कलेक्टर के रिकॉर्ड कक्ष में भेजा गया" : "9. No. and date of Chalan through which the file sent to the Collector's record-room."}</label>
            <input type='text' id='input9' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input10'>{isHindi ? "10. अगर फ़ाइल किसी कोलेक्टर के रिकॉर्ड कक्ष के अधिकारी को व्यक्तिगत रूप से सौंपी जाती है, तो उसका हस्ताक्षर और वितरण की तारीख" : "10. In case the file is made over to an official of the record room personally, his signature and date of delivery"}</label>
            <input type='text' id='input10' />
          </div>
          <div className='CH-Form-Data'>
            <label htmlFor='input11'>{isHindi ? "11. टिप्पणी" : "11. Remark"}</label>
            <input type='text' id='input11' />
          </div>
        </div>
      </div>
      <hr />
      
    </>
  );
};

export default CHForm6th;
