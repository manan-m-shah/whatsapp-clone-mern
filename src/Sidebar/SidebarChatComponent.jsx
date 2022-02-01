import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

function SidebarChatComponent(props) {
    const { refresh, chat, current } = props

    function onSidebarChatComponentClick() {
        //Set messages to the messages of clicked chat
        refresh(chat.title)
    }
    let style = 'min-h-fit min-w-fit flex justify-between p-2 px-0 border'
    if (chat.title === current) {
        style = 'min-h-fit min-w-fit flex justify-between p-2 px-0 border bg-gray-100/75'
    }

    return (
        <div className={style} onClick={onSidebarChatComponentClick}>
            <div className='flex items-center'>
                <IconButton>
                    <Avatar />
                </IconButton>
                <div className='mx-2 px-2'>
                    <h3 className=''>{chat.title}</h3>
                    {chat.lastMessage && <h5 className='text-sm text-gray-500 text-ellipsis whitespace-nowrap'>{chat.lastMessage.name.concat(": ").concat(chat.lastMessage.message).substring(0, 20)}</h5>}
                </div>
            </div>
            <div className='self-start p-2'>
                {chat.lastMessage && <h6 className='text-xs text-gray-500'>{chat.lastMessage.timestamp}</h6>}
            </div>
        </div>
    )
}

export default SidebarChatComponent