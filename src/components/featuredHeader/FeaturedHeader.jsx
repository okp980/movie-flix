import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'


import styles from './featuredHeader.module.css'

const FeaturedHeader = ({ items, handleCategory }) => {

    const [state, setState] = useState([])


    const onSelecthandler = useCallback((id) => {
        // get the actual link to send request

        handleCategory(id)
        // set link as active
        const changedItems = items.map((itm, idx) => {

            if (id === idx) {
                return (<li onClick={() => onSelecthandler(idx)} className={[styles.list, styles.active].join(' ')} key={idx}>

                    {itm}
                </li>)
            } else {
                return (
                    <li onClick={() => onSelecthandler(idx)} className={styles.list} key={idx}>
                        {itm}
                    </li>
                )
            }
        })
        setState(changedItems);


    }, [items, handleCategory])

    // changes the active link state of the links on first render
    useEffect(() => {
        onSelecthandler(0)
    }, [onSelecthandler])




    return (
        <div className={styles.featuredHeader}>
            <ul className={styles.menu}>
                {state}
            </ul>
        </div>

    )
}

export default FeaturedHeader
