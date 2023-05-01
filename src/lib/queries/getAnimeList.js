import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
    query getAllAnime($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
        media(type: ANIME, sort: POPULARITY_DESC) {
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