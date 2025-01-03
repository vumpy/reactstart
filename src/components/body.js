import React, { useState } from 'react'

import '../css/body.css'
import Userlink from '../images/user.png'
import ListLink from '../images/list.png'
import DocLink from '../images/document.png'
import SendLink from '../images/send.png'

import Card from './card.js'
import Myinfo from './myinfo.js'

function Body() {
    const [isVisiblefirst, setIsVisibleFirst] = useState(false);
    const [isVisiblesecond, setIsVisibleSecond] = useState(false);
    const [isVisiblethird, setIsVisibleThird] = useState(false);
    const [isVisibleforth, setIsVisibleForth] = useState(false);

    const toggleVisibilityfirst = () => {
        setIsVisibleSecond(false);
        setIsVisibleThird(false);
        setIsVisibleForth(false);
        setIsVisibleFirst(!isVisiblefirst);
    }

    return(
        <div className = "body">
            <div className = "cards">
                <Card text = "My Info" link = {Userlink} onClick={toggleVisibilityfirst} content="Click me!" />
                <Card text = "My Account Numbers" link = {ListLink} />
                <Card text = "My Documents" link = {DocLink}  />
                <Card text = "Messages" link = {SendLink}  />
            </div>
            {isVisiblefirst && (
                <Myinfo />
      )}
        </div>
    );
}

export default Body;