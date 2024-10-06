import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Paths/Paths.jsx';
import Auth from './Authfile/Auth.jsx';
import { PaymentProvider } from './Authfile/PaymentContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth> <PaymentProvider>
<RouterProvider router={router} />
</PaymentProvider></Auth>
  </React.StrictMode>,
)
