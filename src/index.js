import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
// export async function getStaticProps() {
//   const siteData = await someService({
//   	url: process.env.SITE_URL,
//     key: process.env.SITE_KEY
//   })

// }

reportWebVitals()
