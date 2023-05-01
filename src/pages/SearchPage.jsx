import { useQuery } from "@apollo/client"
import { useContext, useState } from "react";
import { GET_SEARCH_ANIME } from "../lib/queries/getSearchAnime"
import NavBar from "../components/NavBar/NavBar"
import Card from "../components/Card/Card";
import { ThemeContext } from "../lib/content/ThemeContent";

export default function SearchPage(){

    let theme = useContext(ThemeContext);

    let [search, setSearch] = useState("");
    let [page, setPage] = useState(1);

    const {loading, error, data} = useQuery(GET_SEARCH_ANIME, {
        variables: {
            page: page,
            search: search
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

    let searchBar = (event) => {
        event.preventDefault();
        setSearch(document.getElementById("bar").value)
    }

    return (
        <div>
            <NavBar />
            <form style={{marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <input style={{minHeight: "20px", minWidth: "80%"}} id="bar" type="text"></input>
                {
                    (theme.curr === "en") ?
                    <input style={{fontWeight: "bold", padding: "3px", backgroundColor: "hsla(122, 86%, 42%, 0.226)", border: "2px solid #0fc715"}} onClick={searchBar} type="submit" value="Search"></input> :
                    <input style={{fontWeight: "bold", padding: "3px", backgroundColor: "hsla(122, 86%, 42%, 0.226)", border: "2px solid #0fc715"}} onClick={searchBar} type="submit" value="Cari"></input>
                }
            </form>
            {
                data.Page.media.map((media, index) => {
                    return <Card media = {media} />
                })
            }
            {
                search !== "" ? (
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
                </div>) : (
                            (theme.curr === "en") ?
                            (<h3 style={{textAlign: "center"}}>Search some animes based on title (Romaji and English)!</h3>) :
                            (<h3 style={{textAlign: "center"}}>Cari anime berdasarkan judul (Romaji dan English)!</h3>)
                          )
            }
        </div>
    );
}