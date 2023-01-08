import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    return (
        <>
            <NewComponent banknote={"banknote"} nominal={0} number={"number"}/>
            {/*<ul>
                {currentMoney.map((objFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArray.banknote}</span>
                            <span>{objFromMoneyArray.nominal}</span>
                            <span>{objFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('All')}>ALL</button>
                <button onClick={() => onClickFilterHandler('ruble')}>Ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>Dollar</button>
            </div>*/}
        </>
    );
}

export default App;
