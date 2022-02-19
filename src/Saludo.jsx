import React from 'react'
import Button from './Button'

export default function Saludo({ vengador, nombre}) {
  return (
      <>
      <h1 className='h1'>Hola Soy {vengador} y mi nombre real es {nombre}</h1>
      <Button className='button'>ver más info de {vengador}</Button>
      </>
)

}
   