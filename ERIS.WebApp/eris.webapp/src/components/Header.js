const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-light" id="header">
        <a class="navbar-brand" href="#" >
            <img src="./images/logo_big.png" alt="" style={headingStyle} />
            <span style={textStyle} >ERIS  </span>
        </a>
      </nav>
    </header>
  )
}

const headingStyle = {
  display: 'inline-block',
  height: 70,
  width: 70,
}

const textStyle = {
  padding: 30,
}

export default Header