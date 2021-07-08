import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Detail from '../../components/Detail'
import Loader from '../../components/Loader'
import { Row } from 'react-bootstrap'

const DetailsPage = () => {
  const { id } = useParams()
  const apiUrl = `comics/${id}`
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <Row style={{ alignItems: 'flex-start' }}>
      {isLoading && <Loader />}
      {!isLoading && response && <Detail data={response} />}
    </Row>
  )
}

export default DetailsPage
