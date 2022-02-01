import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function MainWindowHeader(props) {
    const { current } = props
    return (
        <div className='flex items-center
        bg-gray-100'>
            <IconButton>
                <Avatar />
            </IconButton>
            <div className='flex-1'>
                <h3 className=''>{current}</h3>
            </div>
            <div>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default MainWindowHeader;