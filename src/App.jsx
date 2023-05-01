import './App.css'
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import FavoritePage from './pages/FavoritePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { THEME, ThemeContext } from './lib/content/ThemeContent';
import { useState } from 'react';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});

function App() {

  let [currTheme, setCurrTheme] = useState(() => {
    let theme = localStorage.getItem("Theme")
    if(theme === null){
      return THEME.EN
    }
    else if(theme === "en"){
      return THEME.EN
    }
    else{
      return THEME.ID
    }
  })

  let changeTheme = () => {
    if(currTheme === THEME.EN){
      setCurrTheme(THEME.ID)
      localStorage.setItem("Theme", "id")
    }
    else{
      setCurrTheme(THEME.EN)
      localStorage.setItem("Theme", "en")
    }
  };

  return (<ApolloProvider client={client}>
    <ThemeContext.Provider value={currTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}></Route>
          <Route path="/:animeId" element={<DetailPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/favorite" element={<FavoritePage />}></Route>
        </Routes>
      </BrowserRouter>
      {
        currTheme === THEME.EN ? (<button style={{color: "white", fontFamily: "Verdana", fontWeight: "bold", border: "2px solid #0fc715", borderRadius: "10px", backgroundColor: "green", padding: "5px", position: "fixed", bottom: "15px", right: "15px", fontSize: 15}} onClick={changeTheme}>ID</button>) : (<button style={{color: "white", fontFamily: "Verdana", fontWeight: "bold", border: "2px solid #0fc715", borderRadius: "10px", backgroundColor: "green", padding: "5px", position: "fixed", bottom: "15px", right: "15px", fontSize: 15}} onClick={changeTheme}>EN</button>)
      }
    </ThemeContext.Provider>
  </ApolloProvider>);
}

export default App;
