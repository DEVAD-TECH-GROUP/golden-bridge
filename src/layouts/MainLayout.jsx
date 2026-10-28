
import { Outlet } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/footer/Footer'

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
