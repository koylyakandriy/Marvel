import axios from 'axios'
import CryptoJS from 'crypto-js'

const PUBLIC_KEY = `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
const PRIVATE_KEY = `${process.env.REACT_APP_MARVEL_PRIVATE_KEY}`
const ts = new Date().getTime()
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()
const baseURL = 'https://gateway.marvel.com/v1/public/'

const instance = axios.create({
  baseURL: `${baseURL}`,
  params: {
    apikey: `${PUBLIC_KEY}`,
    ts: ts,
    hash: hash,
  },
})

export const fetchData = (url) => {
  return instance
    .get(url)
    .then(({ data }) => data)
    .catch((err) => console.log(err))
}
