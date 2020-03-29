import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// var options = { weekday: 'long'};
// var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// var day = days[ now.getDay() ];
// year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
var options = {  weekday: 'long' };
var prnDt = 'Hey Quarantiner - Today is ' + new Date().toLocaleDateString('en-us', options);

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
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
          {prnDt}
          {/* {siteTitle} */}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
