import './index.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../lib/content/ThemeContent';

export default function Detail({media}){

    let theme = useContext(ThemeContext);

    let [fav, setFavorite] = useState(() => {
        let favorite_ids = localStorage.getItem("Fav")
        if(favorite_ids === null){
          return [];
        }
        else{
          return JSON.parse(favorite_ids)
        }
      })

    let add_favorite = (e) => {
        e.preventDefault()
        let clicked_id = e.currentTarget.id
        setFavorite([...fav, Number(clicked_id)])
    }

    let remove_favorite = (e) => {
        e.preventDefault()
        let clicked_id = e.currentTarget.id
        fav.splice(fav.indexOf(Number(clicked_id)), 1)
        setFavorite([...fav])
    }

    useEffect(() => {
        localStorage.setItem("Fav", JSON.stringify(fav));
      }, [fav])

    return (
    <div class="anime-detail">
        {
            (fav.indexOf(media.id) !== -1) ? <button id={media.id} class="favorite-btn" onClick={remove_favorite}><AiFillHeart size='30'/></button> : <button id={media.id} class="favorite-btn" onClick={add_favorite}><AiOutlineHeart size='30'/></button>
        }
        <div class="anime-image">
            <img src={media.coverImage.large} alt="Anime Cover"></img>
        </div>
        <div class="anime-details">
            <h1 class="anime-title">{media.title.romaji}</h1>
            <h2 class="anime-title">{media.title.english}</h2>
            {
                (theme.curr === "en") ?
                <table class="anime-table">
                    <tbody>
                        <tr>
                            <td class="detail-label">Start Date:</td>
                            <td class="detail-value">{media.startDate.day}/{media.startDate.month}/{media.startDate.year}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">End Date:</td>
                            <td class="detail-value">{media.endDate.day}/{media.endDate.month}/{media.endDate.year}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Season:</td>
                            <td class="detail-value">{media.season}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Year:</td>
                            <td class="detail-value">{media.seasonYear}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Episodes:</td>
                            <td class="detail-value">{media.episodes}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Source:</td>
                            <td class="detail-value">{media.source}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Genre:</td>
                            <td class="detail-value">{media.genres.map((genre, index)=>{return <span>{genre} </span>})}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Score:</td>
                            <td class="detail-value">{media.averageScore}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Popularity:</td>
                            <td class="detail-value">{media.popularity}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Description:</td>
                            <td id="desc" class="detail-value">{media.description}</td>
                        </tr>
                    </tbody>
                </table> :
                <table class="anime-table">
                    <tbody>
                        <tr>
                            <td class="detail-label">Tanggal Mulai:</td>
                            <td class="detail-value">{media.startDate.day}/{media.startDate.month}/{media.startDate.year}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Tanggal Akhir:</td>
                            <td class="detail-value">{media.endDate.day}/{media.endDate.month}/{media.endDate.year}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Musim:</td>
                            <td class="detail-value">{media.season}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Tahun:</td>
                            <td class="detail-value">{media.seasonYear}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Episode:</td>
                            <td class="detail-value">{media.episodes}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Sumber:</td>
                            <td class="detail-value">{media.source}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Kategori:</td>
                            <td class="detail-value">{media.genres.map((genre, index)=>{return <span>{genre} </span>})}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Nilai:</td>
                            <td class="detail-value">{media.averageScore}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Popularitas:</td>
                            <td class="detail-value">{media.popularity}</td>
                        </tr>
                        <tr>
                            <td class="detail-label">Deskripsi:</td>
                            <td id="desc" class="detail-value">{media.description}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    </div>)
}