import React, { useState, useEffect } from "react";
import SidebarChatComponent from './SidebarChatComponent';
import GroupIcon from '@mui/icons-material/Group';
import IconButton from "@mui/material/IconButton";

function SidebarChat(props) {
    const { refresh, chats, current } = props

    return (
        <div className='min-h-fit min-w-fit
        flex-1 flex flex-col overflow-auto'>
            {chats.map(chat => <SidebarChatComponent refresh={refresh} chat={chat} current={current} />)}
        </div>
    )
}

export default SidebarChat