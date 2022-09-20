import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='container-fluid'>
        <div className="row bg-yellow min-vh-100 justify-content-center align-items-center p-4">
            <div className="col-12 text-center">
                <h1 className='cover-title font-alpine'>PABLO SÁNCHEZ</h1>
                <p className="lead">¡Hola! Este es mi portafolio, tengo diferentes proyectos y hobbies para mostrarte. Adelante.</p>
                <NavLink className='btn btn-dark my-2 fw-bold' to={'/portafolio/development'}>Saber más</NavLink>
            </div>
        </div>
    </div>
  )
}
