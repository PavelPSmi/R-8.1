import { Routes, Route } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { ChatList } from './components/ChatList/ChatList';
import { AboutWithConnect } from "./pages/AboutPage";
import { useState } from 'react'
import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from "redux-persist/integration/react";
import { RickandMorty } from "./pages/RickandMorty";
import{SignIn} from './pages/SignIn'
import { SignUp } from "./pages/SignUp";

const defaultMessges = {
  default: [
    {
      author: 'ALISA',
      text: 'HI'
    },
    
  ]
}

export function App () {
  const [messages, setMessages] = useState(defaultMessges)
  const [theme, setTheme] = useState(defaultContext.theme)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      {/* <Header /> */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeContext.Provider
            value={{
              theme,
              toggleTheme,
            }}
          >
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="about" element={<AboutWithConnect />} />
                <Route path="rickandmorty" element={<RickandMorty />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="chats">
                  <Route index element={<ChatList />} />
                  <Route path=":chatId" element={<ChatsPage />} />
                </Route>
              </Route>

              <Route path="*" element={<h2>404 Page not FOUND</h2>} />
            </Routes>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  );
}