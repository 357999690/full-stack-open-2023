import React from 'react'
import  ReactDOM from 'react-dom/client'

const Hello = (props) => {
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Maya' age = {26 +10}/>
      <Hello name = {name} age = {age}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)