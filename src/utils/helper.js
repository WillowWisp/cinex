export const helper = {
  getFormattedGenresString(genres) {
    var res = '';
    for (var genre of genres) {
      res += genre.name + ', ';
    }
    return res.slice(0, res.length - 2);
  },
  getMonthName(monthNumber) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber];
  },
  getDayOfWeekName(dayOfWeekNumber) {
    const dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"
    ]
    return dayOfWeekNames[dayOfWeekNumber];
  },
  getFormattedTime(date) {
    var res = '';
    const hour = date.getHours();
    const isAM = hour < 12;
    const hourStr = ('0' + (isAM ? hour : hour - 12)).slice(-2); // 2 digits
    const minStr = ('0' + date.getMinutes()).slice(-2);
    res = hourStr + ':' + minStr + ' ' + (isAM ? 'AM' : 'PM');
    return res
  },
  paginate (array, pageSize, pageNumber) {
    --pageNumber;
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  },
  sortMoviesByReleaseDate (array) {
    if (array.length < 2) {
      return array;
    }
    return array.sort((movie1, movie2) => (new Date(movie1.released) - new Date(movie2.released)) )
  },
  getYouTubeID(url){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  },
  getFormattedDate(date) {
    var res ='';
    res = date.getDate() + ' ' + this.getMonthName(date.getMonth()).slice(0, 3) + ' ' + date.getFullYear();
    return res;
  }
}