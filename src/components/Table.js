import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsList } from '../actions/categoryActions'

const Table = ({ t }) => {
  const dispatch = useDispatch()

  const { loading, category, error } = useSelector((state) => state.category)

  useEffect(() => {
    dispatch(productsList())
  }, [dispatch])

  return (
    <>
      <h1>{t('categories')}</h1>
      {loading ? (
        <div>{t('loading')}</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <table className='category'>
          <thead>
            <tr>
              <th>{t('id')}</th>
              <th>{t('name')}</th>
              <th>{t('short_name')}</th>
            </tr>
          </thead>
          <tbody>
            {category.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.short_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Table
