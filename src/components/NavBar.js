import { Link } from 'react-router-dom'

const NaVBar = ({ t, handleLanguage }) => {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>{t('home')}</Link>
        </li>
        <li>
          <Link to='/list'>{t('table')}</Link>
        </li>
        <li>
          <Link to='/form'>{t('form')}</Link>
        </li>
        <div className='language-btn'>
          <button onClick={() => handleLanguage('en')}>EN</button>
          <button onClick={() => handleLanguage('es')}>SP</button>
        </div>
      </ul>
    </header>
  )
}

export default NaVBar
