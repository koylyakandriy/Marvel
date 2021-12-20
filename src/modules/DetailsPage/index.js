import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Detail from '../../components/Detail'
import Loader from '../../components/Loader'

const DetailsPage = () => {
  const { id } = useParams()
  const apiUrl = `comics/${id}`
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && response && <Detail item={response?.results[0]} />}
    </>
  )
}

export default DetailsPage
