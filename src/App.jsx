/* eslint-disable react/display-name */
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

export default props =>
    <div id="app">
      <Primeiro />
      <p>Seja bem vindo</p>
      <ComParametro
        titulo="Segundo Componente"
        subtitulo="Muito legal"
        aluno="Cleiton"
        nota={8}
      />
    </div>
