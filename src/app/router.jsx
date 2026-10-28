import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Leadership from '../pages/Leadership/Leadership'
import News from '../pages/News/News'
import Opportunities from '../pages/Opportunities/Opportunities'
import Contact from '../pages/Contact/Contact'
import Departments from '../pages/Departments/Departments'
import DepartmentDetail from '../pages/Departments/DepartmentDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'leadership', element: <Leadership /> },
      { path: 'news', element: <News /> },
      { path: 'opportunities', element: <Opportunities /> },
      { path: 'contact', element: <Contact /> },
      { path: 'departments', element: <Departments /> },
      { path: 'departments/:slug', element: <DepartmentDetail /> },
    ],
  },
])
