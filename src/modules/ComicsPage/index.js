import React, { useEffect } from 'react'
import Loader from '../../components/Loader'
import CardItem from '../../components/Card'
import useFetch from '../../hooks/useFetch'

const MoviesPage = () => {
  const apiUrl = 'comics'
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading &&
        response &&
        response.results.map((item) => <CardItem key={item.id} item={item} />)}
    </>
  )
}

export default MoviesPage
