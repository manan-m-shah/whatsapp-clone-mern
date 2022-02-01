import React, { useState, useEffect } from 'react';

function MainWindowChatMessageComponent(props) {
    const { message, user } = props


    /* 
    ! Custom CSS included for overflow-wrap
    Bug in Tailwind CSS- .break-words class should include word-break: break-word;
    along with the already included overflow-wrap: break-word;
    TODO: DRY code
    */

    if (user === null || message.sender !== user.email) {
        return (
            <div className='flex
            m-10 mr-[20%] md:mr-[30%] lg:mr-[40%]'>
                <span className='
                bg-white p-1 px-2 rounded-md'>
                    <span className='[overflow-wrap:anywhere]
                    px-1 text-sm font-bold text-gray-500'>{message.name}</span>
                    <span className='flex'>
                        <span className='[overflow-wrap:anywhere]
                    px-1 text-sm font-light'>{message.message}</span>
                        <span className='px-5' />
                        <span className='self-end
                    text-xs text-gray-500'>{message.timestamp}</span>
                    </span>

                </span>
            </div>
        )
    } else {
        return (
            <div className='flex justify-end
            m-10 ml-[20%] md:ml-[30%] lg:ml-[40%]'>
                <span className='bg-green-100 p-1 px-2 rounded-md'>
                    <span className='[overflow-wrap:anywhere]
                    px-1 text-sm font-bold text-gray-500'>{message.name}</span>
                    <span className='flex'>
                        <span className='[overflow-wrap:anywhere]
                    px-1 text-sm font-light'>{message.message}</span>
                        <div className='px-5' />
                        <span className='self-end
                    text-xs text-gray-500'>{message.timestamp}</span>
                    </span>
                </span>
            </div>
        )
    }
}

export default MainWindowChatMessageComponent