import React, {useState} from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [money, setMoney] = useState([
    {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
    {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
    {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
    {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
    {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
    {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
    {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
    {banknote: 'ruble', nominal: 50, number: ' v1234567890'}
])

type NewComponentPropsType = {
    banknote: string
    nominal: number
    number: string
}

type filterType = 'All' | 'dollar' | 'ruble'
export const NewComponent = (props: NewComponentPropsType) => {

    const [filter, setFilter] = useState<filterType>('All')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar');
    }
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');
    }

    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map(() => {
                    return (
                        <li>
                            <span>{props.banknote}</span>
                            <span>{props.nominal}</span>
                            <span>{props.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('All')}>ALL</button>
                <button onClick={() => onClickFilterHandler('ruble')}>Ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>Dollar</button>
            </div>
        </>
    )
}