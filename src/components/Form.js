import React, { useState } from 'react'

const Form = ({ t }) => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(name, gender)
  }

  return (
    <>
      <h1>{t('form')}</h1>
      <form className='custom_form' onSubmit={submitHandler}>
        <input
          type='text'
          placeholder={t('form_name')}
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <select name='gender' onChange={(e) => setGender(e.target.value)}>
          <option value=''>Gender</option>
          <option value='female'>female</option>
          <option value='male'>male</option>
          <option value='other'>other</option>
        </select>
        <input type='submit' value={t('submit')} />
      </form>
    </>
  )
}

export default Form
