import { useEffect, useState } from "react"

const Repo = () => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/johnicassere/repos')
            .then(res => res.json())
            .then(resJoson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJoson)
                }, 2000)

            })

    }, []);

    return (
        <>
            {
                estaCarregando && (
                    <h1>Carregando ...</h1>
                )
            }
            <ul>
                <li>Repositorios: </li> <br />
                <hr />
                {repos.map(repositorios => (
                    <li key={repositorios.id}>
                        <b>Nome: {repositorios.name}</b> <br />
                        <b>Linguagem: {repositorios.language}</b> <br />
                        <a href={repositorios.html_url} target="_blank" >Visitar no Git Hub</a> <br />
                    </li>
                ))}

            </ul>

        </>
    )
}

export default Repo