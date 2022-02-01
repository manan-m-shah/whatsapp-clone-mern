import React, { useState, useEffect } from "react";
import axios from "../axios";
import IconButton from '@mui/material/IconButton';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

function MainWindowFooter(props) {
    const { refresh } = props
    const [input, setInput] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        refresh(input)
        setInput("")
    }

    return (
        <div className='flex items-center
        bg-gray-100 p-3'>
            <IconButton>
                <MoodOutlinedIcon />
            </IconButton>
            <IconButton>
                <AttachFileIcon />
            </IconButton>
            <div className='flex flex-1
                rounded-full bg-white'>
                <form onSubmit={onFormSubmit} className="flex flex-1">
                    <input className='min-w-[200px]
                        flex-1
                        bg-transparent text-sm focus:outline-0 p-3'
                        value={input} onChange={e => setInput(e.target.value)} placeholder='Search or start new chat' type='text' />
                    <button type="submit"></button>
                </form>
            </div>
            <div>
                <IconButton>
                    <KeyboardVoiceIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default MainWindowFooter