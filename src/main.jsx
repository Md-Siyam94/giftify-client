import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './context/AuthContext/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
<<<<<<< HEAD



const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
=======
import { ToastContainer } from 'react-toastify'

const queryclient=new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryclient}>
      <ToastContainer />
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
>>>>>>> b1bbe4fee6ef88cf7db4486cd4ef14804f44f547
  </StrictMode>,
)
