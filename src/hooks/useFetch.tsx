import axios, { AxiosResponse } from 'axios'
import CryptoJS from 'crypto-js'
import { useCallback, useEffect, useState } from 'react'

const PUBLIC_KEY: string = `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
const PRIVATE_KEY: string = `${process.env.REACT_APP_MARVEL_PRIVATE_KEY}`

const ts: number = new Date().getTime()
const hash: string = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()

export default (url: string) => {
  const baseURL: string = 'https://gateway.marvel.com/v1/public/'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    let skipGetResponseAfterDestroy: boolean = false

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
      .then(({ data }: AxiosResponse) => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(data.data)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        if (!skipGetResponseAfterDestroy) {
          setError(error.response.data)
          setIsLoading(false)
        }
      })

    return () => {
      skipGetResponseAfterDestroy = true
    }
  }, [isLoading, options, url])

  return [{ isLoading, response, error }, doFetch]
}
