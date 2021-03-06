import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          dangerouslySetInnerHTML={{ 
            __html: `
            window.utag_cfg_ovrd = {noview : true};
          `}}
          />
          <script type="text/javascript"
          dangerouslySetInnerHTML={{ 
            __html: `
    (function(a,b,c,d){
    a='https://tags.tiqcdn.com/utag/services-kyle/main/prod/utag.js';
    b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
    })();
          `}}
          />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var utag_data = {
              phone : ""
            }
            `}}
            />
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
