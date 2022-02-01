import React, { useState, useEffect } from 'react';
import MainWindowHeader from './MainWindowHeader'
import MainWindowChat from './MainWindowChat'
import MainWindowFooter from './MainWindowFooter'

function MainWindow(props) {
    const { refresh, messages, current, user } = props
    return (
        <div className='flex flex-col basis-1/2 sm:basis-2/3 lg:basis-3/4'>
            <MainWindowHeader current={current} />
            <MainWindowChat messages={messages} user={user} />
            <MainWindowFooter refresh={refresh} />
        </div>
    )
}

export default MainWindow;