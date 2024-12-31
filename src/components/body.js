import React, { useState } from 'react'

import '../css/body.css'
import Userlink from '../images/user.png'
import ListLink from '../images/list.png'
import DocLink from '../images/document.png'
import SendLink from '../images/send.png'

import Card from './card.js'
import Myinfo from './myinfo.js'

function Body() {
    state = { isVisible: false };

    toggleVisibility = () => {
        this.setState({ isVisibile: !this.state.isVisibile })
    }

    return(
        <div className = "body">
            <div className = "cards">
                <Card text = "My Info" link = {Userlink} onClick={this.toggleVisibility} content="Click me!" />
                <Card text = "My Account Numbers" link = {ListLink} />
                <Card text = "My Documents" link = {DocLink}  />
                <Card text = "Messages" link = {SendLink}  />
            </div>
            this.state.showinfo ? <Myinfo />
        </div>
    );
}

export default Body;