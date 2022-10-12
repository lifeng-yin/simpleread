import React, {useState} from 'react';
import {FiMenu, FiX} from "react-icons/fi"
import './Hamburger.scss';
import AccountButton from '../AccountButton/AccountButton';

import CustomLink from "../CustomLink/CustomLink.js"

const Hamburger = () => {
    const [menuMode, setMenuMode] = useState(false)

    return ( 
        <div className="Hamburger mobile">
            <button onClick={() => setMenuMode(!menuMode)}>
                {menuMode ? <FiX /> : <FiMenu />}
            </button>
            <div className={"hamburger__pages--" + menuMode}>
                <ul>
                    <li>
                        <CustomLink to = '/explore' onClick={() => setMenuMode(false)}>Explore</CustomLink>
                    </li>
                    <li>
                        <CustomLink to = '/add' onClick={() => setMenuMode(false)}>Add Review</CustomLink>
                    </li>
                    <li>
                        <CustomLink to = '/about' onClick={() => setMenuMode(false)}>About</CustomLink>
                    </li>
                    <li>
                        <AccountButton onClick={() => setMenuMode(false)} />
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default Hamburger;
