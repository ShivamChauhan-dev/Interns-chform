import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm6thB = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'सी.एच. फॉर्म 6-B' : 'C.H. FORM 6-B'}</h1>
                    <h1>{isHindi ? '[नियम 28(2), 46(2), 50(2) और 100 देखें]' : '[See Rules 28(2), 46(2), 50(2) and 100]'}</h1>
                    <p>{isHindi ? 'सुधार सूची जिसका संबंध है' : 'Errata list relating to'}
                         <input type="text" className="styled-input" /> 
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
                        <label htmlFor='input1'>
                            {isHindi
                                ? '1. क्रमांक'
                                : '1. Serial No.'}
                        </label>
                        <input type='text' id='input1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input2'>
                            {isHindi
                                ? '2. रिकॉर्ड का पृष्ठ नंबर'
                                : '2. Page No. of the record'}
                        </label>
                        <input type='text' id='input2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input3'>
                            {isHindi
                                ? '3. रिकॉर्ड का स्तम्भ'
                                : '3. Column of the record'}
                        </label>
                        <input type='text' id='input3' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input4'>
                            {isHindi
                                ? '4. लाइन'
                                : '4. Line'}
                        </label>
                        <input type='text' id='input4' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input5'>
                            {isHindi
                                ? '5.[ एंट्री ]'
                                : '5.[ Entries ]'}
                        </label>
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input5.1'>
                            {isHindi
                                ? '5.1 गलत या संदेहास्पद'
                                : '5.1 Incorrect or Doubtful'}
                        </label>
                        <input type='text' id='input5.1' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input5.2'>
                            {isHindi
                                ? '5.2 सही'
                                : '5.2 Correct'}
                        </label>
                        <input type='text' id='input5.2' />
                    </div>
                    <div className='CH-Form-Data'>
                        <label htmlFor='input6'>
                            {isHindi 
                              ? '6. टिप्पणियाँ'
                              : '6. Remarks'}
                        </label>
                        <input type='text' id='input6' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm6thB;
