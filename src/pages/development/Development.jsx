import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Projects from '../../assets/data/projects.json'
import Project from '../../components/project/Project'

export default function Development() {
  return (
    <>

    <Navbar/>

    <Header section={'DESARROLLO WEB'} />

    <div className="continer mt-4">
        <div className="row justify-content-around m-0 p-4 gap-4">

            {
                Projects.projects.map( e => {
                    return(
                        <Project key={e.id} name={e.name} author={e.author} description={e.description} image={e.image}
                        features={e.features} dateUpdated={e["date-updated"]} realeased={e.released} repo={e.repo} url={e.url}
                        version={e.version} event={e} />
                    )
                })
            }

        </div>
    </div>

    </>
  )
}
