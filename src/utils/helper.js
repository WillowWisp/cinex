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
  }
}