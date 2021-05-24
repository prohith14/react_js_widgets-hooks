import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Convert = ({ language, text }) => {
    const [translatedText, setTranslatedText] = useState('');
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslatedText(data.data.translations[0].translatedText);
        };
        const timeOutId = setTimeout(() => {
           
            if (text) {
                doTranslation();
            }

        }, 1000);
        return () => {
            clearTimeout(timeOutId);
        };
        
    }, [language,text]);
   
    return (
        <div>
            <h1>{translatedText}</h1>
        </div>
    );
};

export default Convert;
