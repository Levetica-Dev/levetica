import Navbar from './assets/components/Navbar.tsx'
import FooterLinks from './assets/components/FooterLinks.tsx'
import imagePath from './assets/levetica.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Text from './index.tsx'

function App() {
  let items = ["Accueil","Outils","Articles","À propos"];
  return (
    <>
        <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath} 
        navItems={items}
        />
      <Text />
    <FooterLinks />
  </>
  )
}

export default App