import React, { useState, useEffect } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import SidebarChat from './SidebarChat'

function Sidebar(props) {
    const { refresh, chats, current, user } = props
    return (
        <div className='flex flex-col basis-1/2 sm:basis-1/3 lg:basis-1/4
        border'>
            <SidebarHeader user={user} />
            <SidebarSearch />
            <SidebarChat refresh={refresh} chats={chats} current={current} />
        </div>
    )
}

export default Sidebar;