import { Outlet } from 'react-router-dom' ;
import Topper from './components/Topper' ;
import Footer from './components/Footer' ;
import { Toaster } from 'react-hot-toast';
import './App.css'


function App() {

  return (
    <>
    <Topper />
    <main className='min-h-[78vh]'>
      <Outlet />
    </main>
    <Footer />
    <Toaster />
    </>
  )
}

export default App
