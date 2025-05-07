// src/routes/AppRoutes.tsx
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { routes } from './routes'

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<MainLayout>{element}</MainLayout>}
        />
      ))}
    </Routes>
  )
}

export default AppRoutes
