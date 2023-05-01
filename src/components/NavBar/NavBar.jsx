import { useContext } from 'react';
import './index.css'
import logo from './logo.png'
import { ThemeContext } from '../../lib/content/ThemeContent';

export default function NavBar(){

    let theme = useContext(ThemeContext);

    return (
    <div class="navbar">
        <a href="/"><img src={logo} alt="Logo"></img></a>
        <div>
            {
                (theme.curr === "en") ?
                <a class="btn" href="search">Search</a> :
                <a class="btn" href="search">Cari</a>
            }
            {
                (theme.curr === "en") ?
                <a class="btn" href="favorite">Favorites</a> :
                <a class="btn" href="favorite">Favorit</a>
            }
        </div>
    </div>)
}