

// export { default as Twilio } from './components/Twilio'
import React from 'react'
import ReactDOM from 'react-dom'

// import Twilio from './components/Twilio'
import EmailValidator from './components/EmailValidator'


function App() {
    const urlParams = new URLSearchParams(window.location.search);
    const rapidKey = urlParams.get('rapidKey') || '';
    
    return <EmailValidator rapidKey={rapidKey} />
}

ReactDOM.render(<App />, document.getElementById('root'))
