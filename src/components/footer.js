import React from "react"
import Navigation from './navigation';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <Navigation />
        <p>© {(new Date().getFullYear())} Sixzero — <a href="mailto:hello@sixzero.co" target="_blank" rel="noreferrer">hello@sixzero.co</a></p>
      </footer>
    )
  }
}

export default Footer