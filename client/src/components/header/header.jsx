import'./header.scss'

const header = () => {
  return (
    <div className='header_container'>
      <div className="header_container__subcontainer">
      <nav className='header'>
      <div className="header__logo">
        <img src="public/images/Main logo.PNG" alt="Logo" height={40} />
      </div>
      <div className="header__buttons">
        <button className="header__buttons__secondary">Sign In</button>
        <button className="header__buttons__primary">Sign Up</button>
      </div>
    </nav>
      </div>
    </div>
  )
}

export default header
