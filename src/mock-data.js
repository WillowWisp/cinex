export const mockScreenType = [
  {
    id: 'screenType_00',
    name: '2D',
  },
  {
    id: 'screenType_01',
    name: '3D',
  },
  {
    id: 'screenType_02',
    name: 'IMAX',
  },
  {
    id: 'screenType_03',
    name: 'CINEMA 4D',
  },
]

const mockGenres = [
  {
    id: 'genre_00',
    name: 'Crime',
  },
  {
    id: 'genre_01',
    name: 'Drama',
  },
  {
    id: 'genre_02',
    name: 'Thriller',
  },
  {
    id: 'genre_03',
    name: 'Action',
  },
  {
    id: 'genre_04',
    name: 'Adventure',
  },
  {
    id: 'genre_05',
    name: 'Sci-fi',
  },
  {
    id: 'genre_06',
    name: 'Animation',
  },
]

const movieJoker = {
  id: 'movie_00',
  poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
  title: 'Gã hề dí dỏm',
  runtime: 122,
  genres: []
}

export const mockNowOnMovies = [
  {
    id: 'movie_00',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    title: 'Gã hề dí dỏm',
    runtime: 122,
    genres: [ mockGenres[0], mockGenres[1], mockGenres[2] ],
  },
  {
    id: 'movie_01',
    poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    title: 'Batman v Superman: Dawn of Justice',
    runtime: 151,
    genres: [ mockGenres[3], mockGenres[4], mockGenres[5] ],
  },
  {
    id: 'movie_02',
    poster: 'https://m.media-amazon.com/images/M/MV5BZmUxZmVlNGMtZGMyMy00MmM3LTg5ZjgtNzFhZWU4MTU5MjIwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    title: 'Code Geass: Lelouch of the Re;Surrection',
    runtime: 112,
    genres: [ mockGenres[3], mockGenres[4], mockGenres[6] ],
  },
  {
    id: 'movie_03',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    title: 'Spider-Man: Into the Spider-Verse',
    runtime: 117,
    genres: [ mockGenres[3], mockGenres[4], mockGenres[6] ],
  },
]

// showtime {
//   -id: string
//   -movieId: string
//   -startAt: yyyy-MM-ddThh:mm:ss.SSS
//   -screenType: string
//   }
  
export const mockShowtimes = [
  {
    id: 'showtime_00',
    movieId: 'movie_00',
    startAt: '2019-12-21T11:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_01',
    movieId: 'movie_00',
    startAt: '2019-12-21T15:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_02',
    movieId: 'movie_00',
    startAt: '2019-12-21T21:00:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_03',
    movieId: 'movie_00',
    startAt: '2019-12-22T9:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_04',
    movieId: 'movie_00',
    startAt: '2019-12-22T13:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_05',
    movieId: 'movie_00',
    startAt: '2019-12-22T18:00:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_06',
    movieId: 'movie_00',
    startAt: '2019-12-21T9:30:00.000',
    screenType: 'IMAX',
  },
  {
    id: 'showtime_07',
    movieId: 'movie_00',
    startAt: '2019-12-21T13:30:00.000',
    screenType: 'IMAX',
  },
  {
    id: 'showtime_08',
    movieId: 'movie_00',
    startAt: '2019-12-21T18:00:00.000',
    screenType: 'IMAX',
  },
  {
    id: 'showtime_09',
    movieId: 'movie_01',
    startAt: '2019-12-21T18:00:00.000',
    screenType: '3D',
  },
  {
    id: 'showtime_10',
    movieId: 'movie_02',
    startAt: '2019-12-22T13:00:00.000',
    screenType: '3D',
  },
  {
    id: 'showtime_11',
    movieId: 'movie_01',
    startAt: '2019-12-22T11:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_12',
    movieId: 'movie_01',
    startAt: '2019-12-22T15:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_13',
    movieId: 'movie_01',
    startAt: '2019-12-22T21:00:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_14',
    movieId: 'movie_01',
    startAt: '2019-12-23T9:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_15',
    movieId: 'movie_01',
    startAt: '2019-12-23T13:30:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_16',
    movieId: 'movie_01',
    startAt: '2019-12-23T18:00:00.000',
    screenType: '2D',
  },
  {
    id: 'showtime_17',
    movieId: 'movie_01',
    startAt: '2019-12-22T9:30:00.000',
    screenType: 'IMAX',
  },
  {
    id: 'showtime_18',
    movieId: 'movie_01',
    startAt: '2019-12-22T13:30:00.000',
    screenType: 'IMAX',
  },
  {
    id: 'showtime_19',
    movieId: 'movie_01',
    startAt: '2019-12-22T18:00:00.000',
    screenType: 'IMAX',
  },
  {
    id: 'showtime_20',
    movieId: 'movie_02',
    startAt: '2019-12-22T18:00:00.000',
    screenType: '3D',
  },
  {
    id: 'showtime_21',
    movieId: 'movie_03',
    startAt: '2019-12-23T13:00:00.000',
    screenType: '3D',
  },
]