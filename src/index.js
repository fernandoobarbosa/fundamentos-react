import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
  <div>
    <Primeiro />
    <p>Seja bem vindo</p>
    <ComParametro
      titulo="Segundo Componente"
      subtitulo="Muito legal"
      aluno="Cleiton"
      nota={8}
    />
  </div>,
  document.getElementById('root')
)
