import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Search from '../components/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import './SearchPage.css'

const SearchPage = () => {
  //eslint-disable-next-line
  const [{ term }, dispatch] = useStateValue()
  const { data } = useGoogleSearch(term)

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            className='searchPage__logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='logo'
          ></img>
        </Link>

        <div className='searchPage__headerBody'>
          <Search hideButtons />

          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <svg
                  className='searchPage__icon'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fill='#34a853'
                    d='M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8'
                  ></path>
                  <path
                    fill='#ea4335'
                    d='M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6'
                  ></path>
                  <path
                    fill='#fbbc04'
                    d='M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6'
                  ></path>
                  <path
                    fill='#4285f4'
                    d='M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59'
                  ></path>
                </svg>
                <Link to='/all'>All</Link>
              </div>

              <div className='searchPage__option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>

              <div className='searchPage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>

              <div className='searchPage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
              </div>

              <div className='searchPage__option'>
                <RoomIcon />
                <Link to='/maps'>maps</Link>
              </div>

              <div className='searchPage__option'>
                <MoreVertIcon />
                <Link to='/more'>more</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className='searchPage__result' key={item.link}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchPage__resultImage'
                      src={item.pagemap?.cse_image[0]?.src}
                      alt='logo'
                    />
                  )}
                {item.displayLink}{' '}
                <span className='searchPage__resultIcon'>&#x25BC;</span>
              </a>
              <a href={item.link} className='searchPage__resultTitle'>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
