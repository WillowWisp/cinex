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
    movie: mockNowOnMovies[0],
    startAt: '2019-12-24T11:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_01',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-24T15:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_02',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-24T21:00:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_03',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-22T9:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_04',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-22T13:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_05',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-22T18:00:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_06',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-24T9:30:00.000',
    screenType: mockScreenType[2],
  },
  {
    id: 'showtime_07',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-24T13:30:00.000',
    screenType: mockScreenType[2],
  },
  {
    id: 'showtime_08',
    movie: mockNowOnMovies[0],
    startAt: '2019-12-24T18:00:00.000',
    screenType: mockScreenType[2],
  },
  {
    id: 'showtime_09',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-24T18:00:00.000',
    screenType: mockScreenType[1],
  },
  {
    id: 'showtime_10',
    movie: 'movie_02',
    startAt: '2019-12-22T13:00:00.000',
    screenType: mockScreenType[1],
  },
  {
    id: 'showtime_11',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-22T11:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_12',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-22T15:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_13',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-22T21:00:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_14',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-23T9:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_15',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-23T13:30:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_16',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-23T18:00:00.000',
    screenType: mockScreenType[0],
  },
  {
    id: 'showtime_17',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-22T9:30:00.000',
    screenType: mockScreenType[2],
  },
  {
    id: 'showtime_18',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-22T13:30:00.000',
    screenType: mockScreenType[2],
  },
  {
    id: 'showtime_19',
    movie: mockNowOnMovies[1],
    startAt: '2019-12-22T18:00:00.000',
    screenType: mockScreenType[2],
  },
  {
    id: 'showtime_20',
    movie: mockNowOnMovies[2],
    startAt: '2019-12-22T18:00:00.000',
    screenType: mockScreenType[1],
  },
  {
    id: 'showtime_21',
    movie: mockNowOnMovies[3],
    startAt: '2019-12-23T13:00:00.000',
    screenType: mockScreenType[1],
  },
]