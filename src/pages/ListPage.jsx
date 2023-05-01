import { useQuery } from "@apollo/client"
import { useContext, useState } from "react";
import { GET_ANIME_LIST } from "../lib/queries/getAnimeList"
import NavBar from "../components/NavBar/NavBar"
import Card from "../components/Card/Card";
import { ThemeContext } from "../lib/content/ThemeContent";

export default function ListPage(){

    let theme = useContext(ThemeContext);

    let [page, setPage] = useState(1);

    const {loading, error, data} = useQuery(GET_ANIME_LIST, {
        variables: {
            page: page,
            perPage: 20
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    let next = () => {
        setPage(page + 1);
    };

    let prev = () => {
        if(page > 1) setPage(page - 1);
    };

    return (
        <div>
            <NavBar />
            {
                data.Page.media.map((media, index) => {
                    return <Card media = {media} />
                })
            }
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {
                    (theme.curr === "en") ?
                    <button onClick={prev} style={{fontFamily: "Verdana", fontWeight: "bold", border: "2px solid #0fc715", borderRadius: "10px", backgroundColor: "hsla(122, 86%, 42%, 0.226)", padding: "5px", maxHeight: "50px", minWidth: "80px"}}>Previous</button> :
                    <button onClick={prev} style={{fontFamily: "Verdana", fontWeight: "bold", border: "2px solid #0fc715", borderRadius: "10px", backgroundColor: "hsla(122, 86%, 42%, 0.226)", padding: "5px", maxHeight: "50px", minWidth: "80px"}}>Kembali</button>
                }
                {
                    (theme.curr === "en") ?
                    <h2 style={{textAlign: "center", fontFamily: "Verdana", padding: "5px 20px"}} >Page {page}</h2> :
                    <h2 style={{textAlign: "center", fontFamily: "Verdana", padding: "5px 20px"}} >Halaman {page}</h2>
                }
                {
                    (theme.curr === "en") ?
                    <button onClick={next} style={{fontFamily: "Verdana", fontWeight: "bold", border: "2px solid #0fc715", borderRadius: "10px", backgroundColor: "hsla(122, 86%, 42%, 0.226)", padding: "5px", maxHeight: "50px", minWidth: "80px"}}>Next</button> :
                    <button onClick={next} style={{fontFamily: "Verdana", fontWeight: "bold", border: "2px solid #0fc715", borderRadius: "10px", backgroundColor: "hsla(122, 86%, 42%, 0.226)", padding: "5px", maxHeight: "50px", minWidth: "80px"}}>Lanjut</button>
                }
            </div>
        </div>
    );
}