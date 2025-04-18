import React from "react"
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root"))
const h1 = React.createElement(
  "div", 
  {
    id: "parent", 
    className:"parentClass",
    kuldeep:"Panwar"
  }, 
  React.createElement(
    "div",
    {
      id: 'child',
      className: 'childClass'
    },
    [
      React.createElement(
        'h1',
        {
          id: 'heading',
          key: 'key1'
        },
        "This is heading"
      ),

      React.createElement(
        'h1',
        {
          id: 'heading2',
          key: 'key2'
        },
        "This is heading 2"
      )
    ]

  )
  )
  
console.log({h1, root})
console.log(root.render(h1))