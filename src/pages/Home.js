import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import AppsIcon from '@material-ui/icons/Apps'
import Search from '../components/Search'
import firebase from '../firebase'

import './Home.css'

const Home = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) setUser(authUser.toJSON())
    })
  }, [])

  const provider = new firebase.auth.GoogleAuthProvider()

  const signIn = async () => {
    try {
      const result = await firebase.auth().signInWithPopup(provider)

      setUser(result.user.toJSON())
    } catch (error) {
      console.error(error)
    }
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut()

      setUser(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images' className='home__headerLink'>
            Images
          </Link>
          <IconButton className='home__headerButton'>
            <AppsIcon />
          </IconButton>
          {!user ? (
            <IconButton className='home__headerButton' onClick={signIn}>
              <Avatar />
            </IconButton>
          ) : (
            <IconButton className='home__headerButton' onClick={signOut}>
              {user?.photoURL !== null && (
                <img
                  width='32'
                  height='32'
                  src={user.photoURL}
                  alt='avatar'
                  className='home__headerAvatar'
                />
              )}
            </IconButton>
          )}
        </div>
      </div>
      <div className='home__body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='logo'
        ></img>

        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
