import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import CssBaseline from '@material-ui/core/CssBaseline'

// var options = {  weekday: 'long' };
// var prnDt = 'Hey Quarantiner - Today is ' + new Date().toLocaleDateString('en-us', options);

const Header = ({ siteTitle }) => (
  <CssBaseline />
  <header
    style={{
      background: `linear-gradient(to right,  #663399, #5B72FF)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {prnDt} */}
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
  </ CssBaseline>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
