import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import { publicRoutes, authProtectedRoutes } from './routes/routes'
import { useSelector } from 'react-redux'
import ClassHeader from './components/ClassHeader/ClassHeader'

const App = () => {

  const auth = useSelector(state => state.auth);

  return (
    <>
      {auth.isEmpty ? null : <ClassHeader /> }
      <Routes>
        {
          publicRoutes.map((route, idx) => {
            return (
              <Route key={idx} path={route.path} element={<route.component />} />
            )
          })
        }
        {
          authProtectedRoutes.map((route, idx) => {
            return (
              <Route key={idx} path={route.path} element={auth.isEmpty ? <Navigate to="/login" replace /> : <route.component />} />
            )
          })
        }
      </Routes>
    </>
  )
}


export default App