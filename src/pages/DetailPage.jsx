import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_ANIME_DETAIL } from "../lib/queries/getAnimeDetail"
import NavBar from "../components/NavBar/NavBar"
import Detail from "../components/Detail/Detail";

export default function ListPage(){

    let {animeId} = useParams()

    const {loading, error, data} = useQuery(GET_ANIME_DETAIL, {
        variables: {
            id: {animeId}.animeId
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <NavBar />
            {
                data.Page.media.map((media, index) => {
                    return <Detail media = {media} />
                })
            }
        </div>
    );
}