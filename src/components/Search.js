import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducers/searchReducer'

import './Search.css'

const Search = ({ hideButtons = false }) => {
  //eslint-disable-next-line
  const [{}, dispatch] = useStateValue()
  const [input, setInput] = useState('')
  const history = useHistory()

  const search = (e) => {
    e.preventDefault()

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })

    input === '' ? console.log('nothing') : history.push('/search')
  }

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <svg
          className='search__micIcon'
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
            fill='#4285f4'
          ></path>
          <path d='m11 18.08h2v3.92h-2z' fill='#34a853'></path>
          <path
            d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
            fill='#f4b400'
          ></path>
          <path
            d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
            fill='#ea4335'
          ></path>
        </svg>
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
          <Button variant='outlined' type='submit' onClick={search}>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            variant='outlined'
            type='submit'
            onClick={search}
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  )
}

export default Search
