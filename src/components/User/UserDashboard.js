import React, { useState } from 'react';
import './Components/Main/2ndCHform.css'

const CH1Dashboard = ({ setAuth }) => {
  // State variables to hold input values and result
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [isHindi, setIsHindi] = useState(false);

  // Function to handle the multiplication and update the result
  const handleMultiply = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResult((num1 * num2).toString());
    } else {
      setResult('*****Invalid Input*****');
      // alert('Theek sa daal na Bhosdka')
    }
  };

  return (
    <>
      <div className='Header'>
      </div>
      <div className='main'>
        <div className='upper-container'>
          <h1>{isHindi ? 'च.फॉर्म 45' : 'C.H. Form 45'}</h1>
          <h1>{isHindi ? '[नियम 97 देखें]' : '[See Rule 97]'}</h1>
          <p>{isHindi ? 'धारा 27 के तहत तैयार की गई खतौनी' : 'Khatauni prepared under section 27 of the Act'}</p>
          <div className='CH-form-group'>
            <div className='CH-form-item'>
              <label htmlFor='Village'>
                {isHindi ? 'गाँव ' : 'Village '}
              </label>
              <input placeholder={isHindi ? 'गाँव' : 'Village'} type='text' />
            </div>
            <div className='CH-form-item'>
              <label htmlFor='Pargana'>
                {isHindi ? 'परगना ' : 'Pargana '}
              </label>
              <input placeholder={isHindi ? 'परगना' : 'Pargana'} type='text' />
            </div>
            <div className='CH-form-item'>
              <label htmlFor='Tahsil'>
                {isHindi ? 'तहसील ' : 'Tahsil '}
              </label>
              <input placeholder={isHindi ? 'तहसील' : 'Tahsil'} type='text' />
            </div>
            <div className='CH-form-item'>
              <label htmlFor='District'>
                {isHindi ? 'जिला ' : 'District '}
              </label>
              <input placeholder={isHindi ? 'जिला' : 'District'} type='text' />
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
              {isHindi ? '1. क्रमांक' : '1. Serial Number'}
            </label>
            <input type='text' />
          </div>
          <div className='CH-Form-Data'>
            <label>
              {isHindi ? '2. खतौनी खता' : '2. Khatauni Khata'}
            </label>
            <input type='text' />
          </div>
          <div className='CH-Form-Data'>
            <label>
              {isHindi ? '3. धारक का नाम, माता-पिता और निवास' : '3. Name of tenure-holder with parentage and residence'}
            </label>
            <input type='text' />
          </div>
          <div className='CH-Form-Data'>
            <label>
              {isHindi ? '4. धारा की शुरुआत की वर्ष' : '4. Year of commencement of tenure'}
            </label>
            <input type='text' />
          </div>
          <div className='CH-Form-Data'>
            <label>
              {isHindi ? '5. नए प्लॉट नंबर' : '5. New plot Numbers'}
            </label>
            <input type='text' />
          </div>
          <div className='CH-Form-Data'>
            <label>
              {isHindi ? '6. भूमि, भू-राजस्व, या किराया, जो कि धारक द्वारा देय है' : '6. Area Land Revenue of rent payable by the tenureholder'}
            </label>
            <input type='text' />
          </div>
          <div className='CH-Form-Data'>
            <label>
              {isHindi ? '7. टिप्पणियाँ' : '7. Remarks'}
            </label>
            <input type='text' />
          </div>

        </div>
        <div className='multiplication-container'>
          <div className='input-item-multiply'>
            <label htmlFor='Input1'>{isHindi ? 'इनपुट 1' : 'Input 1'}</label>
            <input
              placeholder={isHindi ? 'इनपुट 1' : 'Input 1'}
              type='text'
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <div className='input-item-multiply'>
            <label htmlFor='Input2'>{isHindi ? 'इनपुट 2' : 'Input 2'}</label>
            <input
              placeholder={isHindi ? 'इनपुट 2' : 'Input 2'}
              type='text'
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
          <div className='input-item-multiply'>
            <label htmlFor='Result'>{isHindi ? 'परिणाम' : 'Result'}</label>
            <input
              placeholder={isHindi ? 'परिणाम' : 'Result'}
              type='text'
              value={result}
              readOnly
            />
          </div>
          <button onClick={handleMultiply}>{isHindi ? 'परिणाम' : 'Result'}</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CH1Dashboard;
