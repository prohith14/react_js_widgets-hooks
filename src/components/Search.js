import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('');
    const [deBouncedTerm, setdeBouncedTerm] = useState(term);
    const [resultList, setResult] = useState([]);
    console.log(resultList);
    useEffect(() =>{
        const timeOutId = setTimeout(()=>{
            
                setdeBouncedTerm(term)
           
        },500);
        return () => {
            clearTimeout(timeOutId);
        };
    },[term]);
    useEffect(() =>{
        const searchWiki = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin :'*',
                    format:'json',
                    srsearch:deBouncedTerm
                }
            });

            setResult(data.query.search);
        };
     if(deBouncedTerm)
     {
        searchWiki();
     }
    },[deBouncedTerm]);
    const renederedList = resultList.map((result)=>
    {
        return(<div className="item" key={result.pageid}>
            <div className="right floated content">
            <a className ="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
                Go
            </a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        </div>)
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list"> 
                {renederedList}
            </div>
        </div>
    );
};

export default Search;