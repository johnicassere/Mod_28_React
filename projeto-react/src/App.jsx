import { useState } from "react";
import Perfil from "./componentes/Perfil";
import Formulario from "./componentes/Formulario";
import Repo from "./componentes/Repositorio";

function App() {
const [formVisivel, setFormVisivel] = useState(true)
 

return (
  <>
  <Perfil nome="Johni" endereco="https://github.com/johnicassere.png"/>
    {/* {formVisivel && (
    <Formulario/>
  )}
  <button type="button" onClick={() => setFormVisivel(!formVisivel)}>toggle</button> */}
  <Repo/>
  </>
)
}

export default App
