import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) =>
    {
        setActiveIndex(index);
    };
    const renderedItems = items.map((item, index) => {
        
        const active = activeIndex === index ? 'active' : '';
        return (
            <React.Fragment key={item.tittle}>
                <div className={`title ${active}`} onClick= {()=>onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.tittle}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">  {renderedItems} </div>
    );
};

export default Accordion;
