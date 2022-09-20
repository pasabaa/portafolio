import { NavLink } from 'react-router-dom'
import { cover} from '../../assets/img'

export default function HomePage() {
  return (
    <div className='container-fluid'>
        <div className="row bg-yellow min-vh-100 justify-content-center align-items-center p-4">
            <div className="col-12 text-center">
                <img src={cover} alt="" />
                <p className="lead">¡Hola! Este es mi portafolio, tengo diferentes proyectos y hobbies para mostrarte. Adelante.</p>
                <NavLink className='btn btn-dark my-2 fw-bold' to={'/portafolio/development'}>Saber más</NavLink>
            </div>
        </div>
    </div>
  )
}
