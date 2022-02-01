import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js'
import axios from './axios';
import Sidebar from './Sidebar/Sidebar';
import MainWindow from './MainWindow/MainWindow';
import { signIn, getCurrentUser } from './firebase';

function App() {
  const [currentChat, setcurrentChat] = useState("Chat 1")
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  //*Initializer and Pusher
  useEffect(function () {
    fetchAllChats()

    const pusher = new Pusher('1ab0f52a2ffa2f6f1b84', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chats');
    channel.bind('inserted', function (newMessage) {
      console.log("Change Occured")
      fetchAllChats()
    });

    return function () {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [])

  //*Fetch current chat messages upon change in chats or currentChat
  useEffect(function () {
    fetchChatMessages(currentChat)
  }, [chats, currentChat])

  //*Getting all chats
  function fetchAllChats() {
    axios.get('/messages/sync').then(response => {
      const newChats = response.data
      setChats(newChats);
    })
  }

  //*Fetching All Chats
  function fetchChatMessages(title) {
    setcurrentChat(title)
    chats.map(chat => {
      if (chat.title === title) {
        return setMessages(chat.messages)
      }
    })
  }

  function getTime() {
    const timestamp = Date.now(); // This would be the timestamp you want to format
    var time = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(timestamp)
    console.log(time)
    return time
  }

  //*Send Message
  function sendMessage(message) {
    console.log(currentUser)
    setCurrentUser(getCurrentUser())
    if (currentUser === null) {
      alert("Only Signed in users can send messages")
      signIn()
      return
    }

    axios.post('/messages/new', {
      title: currentChat,
      message: {
        message: message,
        name: currentUser.displayName,
        timestamp: getTime(),
        sender: currentUser.email,
      }
    })
  }

  {/* main takes up the whole screen and flexes to justify content accordingly*/ }
  return (
    <main className='h-screen
    flex overflow-auto
    bg-orange-100'>
      <div className='h-full w-full min-h-[500px] min-w-[640px]
      flex justify-center
      bg-white m-auto'>
        <Sidebar refresh={fetchChatMessages} chats={chats} current={currentChat} user={currentUser} />
        <MainWindow refresh={sendMessage} messages={messages} current={currentChat} user={currentUser} />
      </div>
    </main>
  );
}

export default App;
