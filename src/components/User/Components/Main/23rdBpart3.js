import React, { useState } from 'react';
import './2ndCHform.css';

const CHForm23rdBpart3 = ({ setAuth }) => {
    const [isHindi, setIsHindi] = useState(false);



    return (
        <>
            <div className='Header'>
            </div>
            <div className='main'>
                <div className='upper-container'>
                    <h1>{isHindi ? 'च.फॉर्म 23-B (भाग III)' : 'C.H. Form 23-B (Part III)'}</h1>
                    <p>{isHindi ? 'चक सड़क और चकगिद की प्रावधान के लिए मुआवजा की गणना' : 'Calculation of compensation for provision of chak roads and chakgids.'}</p>
                    <hr />
                </div>
                <button className="Translat-button" onClick={() => setIsHindi(!isHindi)}>
                    {isHindi ? 'Switch to English' : ' हिंदी में स्विच करें'}
                </button>
                <div className='upper-container-name'>
                    <div className='CH-Form-Data'>
                        <label>{isHindi ? '1. क्रम संख्या' : '1. Serial No.'}</label>
                        <input type="text" />
                    </div>
                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '2. भूमि धारकों का नाम और पिता का नाम, पता' : '2. Name and parentage of tenure-holders with residence'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '3. चालीत खतौनी की खता संख्या' : '3. Khata No. of current Khatauni'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '4. खतौनी के अनुसार सम्पूर्ण संपत्ति का क्षेत्र' : '4. Total area of the holding as per Khatauni'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '5. खतौनी के अनुसार संपत्ति का भू-आय' : '5. Land revenue of the holding as per Khatauni'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '6. चक सड़कों और चकगुलों के लिए योगदान क्षेत्र के अनुसार योगदान' : '6. Contribution for chakroads and chakguls in terms of area (Col. 6-Col. 11 of C.H. Form 23-B (Part II))'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '7. चक सड़कों और चकगुलों के लिए योगदान करने के लिए भू-आय से कम किया जाने वाला भू-आय' : '7. Land revenue to be reduced on account of contribution for chakroads and chakguls (Col. 6 x Col.5)/Col. 4'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '8. भू-आय जो किया जाने वाला है' : '8. Land revenue payable'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '9. मुआवजा (धारा 9-ब के अंतर्गत निर्धारित गुणनखंड के तहत) जो किया जाने वाला है' : '9. Compensation payable (Col. 7 x multiple prescribed under Section 9-B)'}
                        </label>
                        <input type="text" />
                    </div>

                    <div className='CH-Form-Data'>
                        <label>
                            {isHindi ? '10. टिप्पणी' : '10. Remark'}
                        </label>
                        <input type="text" />
                    </div>

                </div>
            </div>
            <hr />
        </>
    );
};

export default CHForm23rdBpart3;
