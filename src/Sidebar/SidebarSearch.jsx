import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import SearchOutlined from '@mui/icons-material/SearchOutlined'


function SidebarSearch() {
    return (
        <div className='flex
            bg-gray-100 p-2 border border-gray-200'>
            <div className='flex flex-1
                rounded-full bg-white'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <input
                    className='min-w-[200px]
                        flex-1
                        bg-transparent text-sm focus:outline-0'
                    placeholder='Search or start new chat' type='text' />
            </div>
        </div>
    )
}

export default SidebarSearch