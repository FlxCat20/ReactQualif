import { gql } from "@apollo/client";

export const GET_ANIME_DETAIL = gql`
query getAnimeDetail($id: Int) {
    Page(page: 1, perPage: 1) {
      media(type: ANIME, id: $id) {
        id
        coverImage {
          large
        }
        title {
          romaji
          english
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        season
        seasonYear
        episodes
        source
        genres
        averageScore
        popularity
        description
      }
    }
  }`;