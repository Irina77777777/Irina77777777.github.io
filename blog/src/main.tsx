import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import Chat from "./pages/chat";
import BlogInfo from './components/BlogInfo.tsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        

        children: [
            {
                index: true,
                element: <BlogInfo  />,
            },
            
            {
                path: "chat",
                element: <Chat />,
            },
            
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
