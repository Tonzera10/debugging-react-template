import React from 'react'
import { Comentario } from '../Comentario/styled'

export default function Comentarios(props) {
    return (
        <Comentario>
            <input onChange={props.onChangeComentario}
            value={props.comentario} placeholder="Adicionar comentario" />
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.novoComentario}</p>
        </Comentario>
    )
}
