import ToggleVisibility from "../toggle/ToggleVisibility";

export default function Project(props) {
return (
<div className="col-lg-8 col-12">
    <div className="card p-4 border-0">
        <div className="row">
            <div className="col-lg-4 col-12">
                <img src={'img/thumbnails/' + props.image} className="img-fluid rounded"
                    alt={props.name} />
            </div>
            <div className="col-lg-8 col-12">
                <div className="card-body">
                    <div className="mb-4">
                        <h1 className="display-1 font-alpine m-0 text-truncate" title={props.name}>{props.name}</h1>
                        <h4>{props.author}</h4>
                    </div>
                    <div className="my-4">
                        <h5 className='mt-4 fw-bold'>Acerca de este proyecto</h5>
                        <p className="text-muted">{props.description}</p>
                    </div>
                    <div className="my-4">
                <div className="card bg-light p-4 border-0 fs-sm">
                    <div className="row">
                        <div className="col-lg-6 col-12">

                            <div className="mt-4">
                                <p className='fw-bold m-0'>Versión</p>
                                <p className='text-muted'>{props.version}</p>
                                <ToggleVisibility>
                                    {
                                    props.event.versions.map(version => {
                                        return(
                                        <>
                                        <div className="mt-sm border-0">
                                            <div className="p-0 text-muted">
                                            <small>
                                            {
                                                version === null 
                                                ? <p className='m-0'>No hay nada para mostrar</p> 
                                                : <div key={version.id}>
                                                <b>Nombre</b>
                                                <p className='m-0'>{version.name}</p>
                                                <b>Caracteristicas</b>
                                                <p className='m-0'>{version.features}</p>
                                                <b>Autor</b>
                                                <p className='m-0'>{version.author}</p>
                                                <b>Versión</b>
                                                <p className='m-0'>{version.version}</p>
                                                <b>Fecha de actualización</b>
                                                <p className='m-0'>{version['date-updated']}</p>
                                                <hr />
                                                </div>
                                            }
                                            </small>
                                            </div>
                                            
                                        </div>
                                        </>
                                        )
                                    })
                                    }
                                </ToggleVisibility>
                            </div>

                            <div className="mt-4">
                                <p className='fw-bold m-0'>Última actualización</p>
                                <p className='text-muted'>{props.dateUpdated}</p>
                            </div>

                            <div className="mt-4">
                                <p className='fw-bold m-0'>Caracteristicas de la actualización</p>
                                <p className='text-muted'>{props.features}</p>
                            </div>

                            <div className="mt-4">
                                <p className='fw-bold m-0'>Fecha de lanzamiento</p>
                                <p className='text-muted'>{props.realeased}</p>
                            </div>

                        </div>

                        <div className="col-lg-6 col-12">

                            <div className="mt-4">
                                <p className='fw-bold m-0'>Herramientas de desarrollo</p>
                                {props.event.tech.map(tech => {
                                return(
                                    <p key={tech.name} className="fs-sm text-muted">{tech.name}</p>
                                )
                                })}
                            </div>

                            <div className="mt-4">
                                <p className='fw-bold'>Despliegue</p>
                                <div className="d-flex flex-column flex-wrap gap-2">
                                    {props.repo === null ? 
                                    <p className="text-muted">Información no disponible</p> : 
                                    <>
                                    <a rel={'noopener noreferrer'} target={'_blank'} className='text-dark' href={props.repo}><i className='bi bi-github'></i> <span
                                            className='badge bg-dark'>GitHub</span></a>
                                    <a rel={'noopener noreferrer'} target={'_blank'} className='text-dark' href={props.url}><i className='bi bi-globe'></i> <span
                                            className='badge bg-dark'>Online</span></a>
                                    </>
                                    }
                                    
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className='fw-bold m-0'>Hecho por</p>
                                <p className='text-muted'>{props.author}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
                    
                </div>
            </div>

        </div>
    </div>
</div>
)
}