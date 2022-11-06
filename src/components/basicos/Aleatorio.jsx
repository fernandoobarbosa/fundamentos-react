/* eslint-disable react/prop-types */
import React from 'react'

const obterNumeroAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

export default function Aleatorio ({ minimo, maximo }) {
  return (
    <h2>
      O Numero aleatorio entre {minimo} e {maximo} ={' '}
      {obterNumeroAleatorio(minimo, maximo)}
    </h2>
  )
}
