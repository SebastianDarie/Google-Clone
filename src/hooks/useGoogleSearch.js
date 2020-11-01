import { useState, useEffect } from 'react'
import API_KEY from '../key'

const CONTEXT_KEY = '9d552b521165c2a65'

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      const result = await res.json()

      setData(result)
    }

    fetchData()
  }, [term])

  return { data }
}

export default useGoogleSearch
