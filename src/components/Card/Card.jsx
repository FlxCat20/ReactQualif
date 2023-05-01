import { useContext } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../lib/content/ThemeContent';

export default function Card({media}){

    let theme = useContext(ThemeContext);

    return (
    <div>
        <Link style={{textDecoration: "none", color: "black"}} to={`/${media.id}`}><div class="card">
            <img src={media.coverImage.large} alt="Anime Cover"></img>
            <div class="info">
                <div class="list-title">
                    <h2>{media.title.romaji}</h2>
                    <h2>{media.title.english}</h2>
                </div>
                <table class="card-table">
                    <thead>
                        {
                            (theme.curr === "en") ?
                            <th>Popularity</th> :
                            <th>Popularitas</th>
                        }                       
                    </thead>
                    <tbody>
                        <tr>
                            <td>{media.popularity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div></Link>
    </div>)
}