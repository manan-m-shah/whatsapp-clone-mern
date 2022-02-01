import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SidebarHeader(props) {

    const { user } = props

    const [image, setImage] = useState("")

    useEffect(() => {
        try {
            setImage(user.photoURL)
        } catch (erorr) {
            // console.log(user)
        }
    }, [user])

    return (<div className='flex justify-between
            bg-gray-200/75 p-2'>
        <Avatar src={image} />
        <div className='flex-none'>
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
    </div >)
}

export default SidebarHeader