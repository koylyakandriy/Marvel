import axios from 'axios'
import CryptoJS from 'crypto-js'
import { useCallback, useEffect, useState } from 'react'

const PUBLIC_KEY = `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
const PRIVATE_KEY = `${process.env.REACT_APP_MARVEL_PRIVATE_KEY}`
const ts = new Date().getTime()
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()

export default (url) => {
  const baseURL = 'https://gateway.marvel.com/v1/public/'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    let skipGetResponseAfterDestroy = false

    const requestOptions = {
      ...options,
      ...{
        params: {
          apikey: `${PUBLIC_KEY}`,
          ts: ts,
          hash: hash,
        },
      },
    }

    if (!isLoading) return
    axios(baseURL + url, requestOptions)
      .then(({ data }) => {
        if (!skipGetResponseAfterDestroy) {
          setIsLoading(false)
          setResponse(data.data)
        }
      })
      .catch((error) => {
        if (!skipGetResponseAfterDestroy) {
          setIsLoading(false)
          setError(error.response.data)
        }
      })

    return () => {
      skipGetResponseAfterDestroy = true
    }
  }, [isLoading, options, url])

  return [{ isLoading, response, error }, doFetch]
}
