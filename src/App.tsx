import Navbar from './assets/components/Navbar.tsx'
import imagePath from './assets/levetica.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from '../src/index.tsx'
import Tools from '../src/assets/routes/pages/tools.tsx'
import News from '../src/assets/routes/pages/news.tsx'
import About from '../src/assets/routes/pages/about.tsx'
import Text from './index.tsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  let items = ["Accueil","Produits","Articles","À propos"];
  return (
    <>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/outils' element={<Tools />} />
        <Route path='/articles' element={<News />} />
        <Route path='/a-propos' element={<About />} />
      </Routes>
    </div>
        <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath}
        navItems={items}
        />
      <Text />
  </>
  )
}

export default App