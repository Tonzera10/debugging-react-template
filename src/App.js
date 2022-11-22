import React, { useState } from "react";
import {Post} from "./components/Post/Post";

//!! Os trechos comentados fazem parte do exercício final !!
// !!!!! não descomentar ou modificar até lá !!!!!

export default function App() {
  const [textoNovoPost, setTextoNovoPost] = useState("")
  const [post, setPost] = useState({})
  const [comentario, setComentario] = useState("")
  const [novoComentario, setNovoComentario] = useState("");

  const onChangeTextoNovoPost = (event) => {
    setTextoNovoPost(event.target.value);
  }

  const adicionarPost = () => {
    // Adiciona um post
    const novoPost = {
      id: Date.now(),
      texto: textoNovoPost,
      curtido: false
    }

    setPost(novoPost)
    setTextoNovoPost("")
  }

  const apagarPost = () => {
    // Apaga o post enviado
    setPost({})
  }

  const alterarCurtida = () => {
    // Altera o status de curtida do post
    const alterarCurtida = {
      ...post,
      curtido: !post.curtido
    }
    setPost(alterarCurtida)
  }

  // Exercício final de debug. Descomentar só depois de finalizar o debug de post
  function adicionaComentario() {
    const addComentario = comentario;
    setNovoComentario(addComentario);
    setComentario("");
  }
    
   

   const onChangeComentario = (e) => {
     setComentario(e.target.value)
   }


  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeTextoNovoPost}
          value={textoNovoPost}
        />
        <button onClick={adicionarPost}>Adicionar</button>
      </div>
      <br />
      <Post
        post={post}
        alteraCurtida={alterarCurtida}
        apagarPost={apagarPost}
        onChangeComentario={onChangeComentario}
        adicionaComentario={adicionaComentario}
        comentario={comentario}
        novoComentario={novoComentario}
      />
    </div>
  );
}

