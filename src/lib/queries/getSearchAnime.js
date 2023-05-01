import { gql } from "@apollo/client";

export const GET_SEARCH_ANIME = gql`
    query getSearchAnime($page: Int, $search: String) {
        Page(page: $page, perPage: 20) {
        media(type: ANIME, search: $search, sort: POPULARITY_DESC) {
            id
            coverImage {
            large
            }
            title {
            romaji
            english
            }
            popularity
        }
        }
    }`;

