import { useParams } from "react-router-dom"

export default function ReadById() {
    const { id } = useParams()

    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`

    //TODO: Implementar o carregamento da API na URL:
    //TODO: Guardar a informaç]ao recebida da API em um estado
    //TODO: Exibiressas informações no JS


    return <div>ReadById: {id}</div>
}