import React, { useState, useEffect } from 'react';
import MainWindowChatMessageComponent from './MainWindowChatMessageComponent'
import { animateScroll } from "react-scroll";

function MainWindowChat(props) {
    const { messages, user } = props
    useEffect(() => {
        scrollToBottom()
    }, [messages])

    function scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "messages-holder"
        });
    }

    return (
        <div id='messages-holder' className="flex-1 overflow-scroll md:px-4 lg:px-8
        bg-[url('https://img.wallpapersafari.com/desktop/728/410/1/80/8DYndB.png')] bg-repeat bg-center">
            {messages.map(message => <MainWindowChatMessageComponent message={message} user={user} />)}
        </div >
    )
}

export default MainWindowChat