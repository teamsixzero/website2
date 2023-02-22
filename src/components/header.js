import React from "react"
import { Link } from "gatsby"
import Navigation from './navigation';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <Link className="logo" to="/"><img src="/images/sixzero-logo-dark.svg" alt="Sixzero logo" /></Link>
        <Navigation />
      </header>
    )
  }
}

export default Header;