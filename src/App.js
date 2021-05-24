import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
    {
        tittle: "What is React?",
        content: "React is a front end javascript framework"
    },
    {
        tittle: "Why use React?",
        content: "React is favourite JS library among engineers"
    },
    {
        tittle: "How do you use React?",
        content: "You use React by creating components"
    },
]
const options = [
    {
        label: "The color is Red",
        value: "Red"
    },
    {
        label: "The color is Green",
        value: "Green"
    },
    {
        label: "The color is Blue",
        value: "Blue"
    }
]
// const showAccordian = () => {
//     if (window.location.pathname === '/') {
//         return (
//             <div> <Accordion items={items} /></div>
//         )
//     }
// }
// const showList = () => {
//     if (window.location.pathname === '/list') {
//         return (
//             <div> <Search /></div>
//         )
//     }
// }
// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//         return (
//             <div> <Translate /></div>
//         )
//     }
// }

const App = () => {
    const[color,setColor]=useState(options[0]);
    const showDropdown = () => {
        if (window.location.pathname === '/dropdown') {
            return (
                <div>
                   
                </div>
            )
        }
    }
    return (
        <div className="ui container">
            <Header />
           <Route path="/">
                <Accordion items={items} />
           </Route>
           <Route path="/dropdown">
           <Dropdown
                        label={'Select Color'}
                        selected={color}
                        onSelectedChange={setColor}
                        options={options}
                    />
           </Route>
           <Route path="/translate">
                <Translate />
           </Route>
           <Route path="/list">
                <Search />
           </Route>

        </div>
    )
};

export default App;