import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-yellow py-4 sticky-top">
        <div className="container">
            <a className="navbar-brand" href="#"><img className='img-fluid' width={24} src={'img/logos/logo-iso.png'} alt="Logotipo pasabaa" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item'><NavLink className={({isActive}) => (isActive ? 'nav-link' : '')} to={'/portafolio'}>Inicio</NavLink></li>
                    <li className='nav-item'><NavLink className={({isActive}) => (isActive ? 'active nav-link' : 'nav-link')} to={'/portafolio/development'}>Desarrollo Web</NavLink></li>
                    <li className='nav-item'><NavLink className={({isActive}) => (isActive ? 'active nav-link' : 'nav-link')} to={'/portafolio/about'}>Sobre mí</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
