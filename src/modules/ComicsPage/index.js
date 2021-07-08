import React, { useEffect, useRef, useState } from 'react'
import Loader from '../../components/Loader'
import CardItem from '../../components/Card'
import useFetch from '../../hooks/useFetch'
import { Row } from 'react-bootstrap'

const MoviesPage = () => {
  const baseApiUrl = 'comics'
  const moreItems = 20
  const maxLimit = 100
  const [apiUrl, setApiUrl] = useState(baseApiUrl)
  const [limit, setLimit] = useState(0)
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch, apiUrl])

  useEffect(() => {
    if (response) {
      setLimit(response?.limit)
    }
  }, [response])

  const onLoad = () => {
    setApiUrl(`${baseApiUrl}?limit=${limit + moreItems}`)
  }

  const pageEnd = useRef()
  useEffect(() => {
    if (!isLoading && response) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onLoad()
            if (limit >= maxLimit) {
              observer.unobserve(pageEnd.current)
            }
          }
        },
        { threshold: 1 }
      )
      observer.observe(pageEnd.current)
    }
  }, [onLoad, isLoading])

  return (
    <>
      <Row style={{ alignItems: 'flex-start' }}>
        {isLoading && <Loader />}
        {!isLoading &&
          response &&
          response.results.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
      </Row>
      <Row fluid className="justify-content-center">
        <button onClick={onLoad} ref={pageEnd}>
          More
        </button>
      </Row>
    </>
  )
}

export default MoviesPage
