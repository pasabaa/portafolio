import React, {useState} from 'react'

export default function ToggleVisibility({children}) {

    const[show, setShow] = useState();

    function toggleShow(){
        setShow(!show);
    }

    let buttonText = show ? 'Ocultar veriones' : 'Mostrar más versiones'


  return (
    <>
    {
    //if show is true, else show children
    show && children
    }

    <button onClick={toggleShow} type={'button'} className='border-0 bg-transparent fs-sm link-dark p-0 m-0'><u>{buttonText}</u></button>
    </>
  )
}
