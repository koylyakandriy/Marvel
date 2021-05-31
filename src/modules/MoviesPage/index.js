import React, { useEffect, useState } from 'react'
import { fetchData } from '../../helpers/fetchData'
import Loader from '../../components/Loader'
import CardItem from '../../components/Card'

const MoviesPage = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    fetchData('comics').then(({ data }) => {
      setData(data)
    })
  }, [])

  return (
    <>
      {data ? (
        data.results.map((item) => <CardItem key={item.id} item={item} />)
      ) : (
        <Loader />
      )}
    </>
  )
}

export default MoviesPage
