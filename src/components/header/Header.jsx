import React from 'react'

export default function Header(props) {
  return (
    <div className="container-fluid bg-yellow">
        <div className="row justify-content-center align-items-center header-section">
            <div className="col-10">
                <img src={props.section} alt={props.desc} />
            </div>
        </div>
    </div>
  )
}
