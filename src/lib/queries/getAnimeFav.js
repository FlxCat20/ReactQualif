import { gql } from "@apollo/client";

export const GET_ANIME_FAV = gql`
    query getAllAnime($ids: [Int], $page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
        media(type: ANIME, sort: POPULARITY_DESC, id_in: $ids) {
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