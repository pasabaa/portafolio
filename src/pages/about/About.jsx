import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { sectionAbout } from '../../assets/img'

export default function About() {
  return (
    <>
    <Navbar/>
    <Header section={sectionAbout} desc={'Seccíón Sobre Mí'} />
    
    <div className="continer mt-4">
        <div className="row justify-content-center p-4 m-0 gap-4">
            <div className="col-lg-8 col-12 p-4">
                <h1 className='display-2 font-alpine'>Experiencia</h1>
                <p className='text-muted'>¡Hola! Soy un desarrollador web jr, buscando oportunidad y experiencia. En este momento, me centro más en el desarrollo de aplicaciones con la librería JavaScript: <b>ReactJS</b>; además de tener experiencia en los lenguajes básicos de la tecnología web, <b>HTML5, CSS3 y JavaScript</b>.</p>
                <p className='text-muted'>He trabajado en proyectos personales, desde los más sencillos hasta los más complejos en estructura y lógica, me enfoco más en un desarrollo <b>frontend</b> y disifruto de hacerlo, es lo que más me apasiona, sin embargo, también tengo experiencia en el desarrollo backend, maquetación y UI/UX.</p>
            </div>
            <div className="col-lg-8 col-12 p-4">
                <h1 className='display-2 font-alpine'>Otras habilidades</h1>

                <h4 className='fw-bold mt-4'>Ilustración digital</h4>
                <p className='text-muted'>Tengo experiencia manejando <b>Illustrator y Photoshop</b> de la suite de Adobe, además, estás ilustraciones, las dono a un banco de imagenes para uso comercial o personal.</p>
                <a className='btn btn-sm btn-dark mb-4' rel={'noopener noreferrrer'} target={'_blank'} href="https://pixabay.com/es/users/pasabaa-20256978/"><i className='bi bi-eye'></i>  Saber más</a>

                <h4 className='fw-bold mt-4'>Audio digital</h4>
                <p className='text-muted'>En mi canal de <b>Youtube</b>, puedes escuchar mis temas realizados en el software FL Studio, que es utilizados para la creación de temas musicales, audios, tonos, etc., usado por profesionales t y principiantes.</p>
                <a className='btn btn-sm btn-dark mb-4' rel={'noopener noreferrrer'} target={'_blank'} href="https://www.youtube.com/channel/UC6HfZKd1Z8LvET3wBKelDEA"><i className='bi bi-youtube'></i> Canal de Youtube</a>
                
            </div>
        </div>
    </div>

    </>
  )
}
