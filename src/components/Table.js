import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {productsList} from '../actions/categoryActions'


const Table = () => {
  const dispatch = useDispatch()

  const { loading, category, error } = useSelector(
    (state) => state.category
  )

  useEffect(() => {
    dispatch(productsList())
  }, [dispatch])

    return (
      <>
      <h1>Categories</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
      <div>{error}</div>
      ) : (
      <table className="category">
         <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>ShortName</th>
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
    );
  }
  
  export default Table;
  