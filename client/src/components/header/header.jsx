import'./header.scss'

const header = () => {
  return (
    <div>
      <nav className='header'>
      <div className="header__logo"></div>
      <div className="header___buttons">
        <button>Sign In</button>
        <button>Sign Out</button>
      </div>
    </nav>
    </div>
  )
}

export default header
