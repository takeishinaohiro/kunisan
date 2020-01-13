$(document).ready(function(){
  $('#calendar').fullCalendar({
    users: 'users.json',
    titleFormat: 'YYYY年 M月',
    monthNames: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
    monthNamesShort: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
    dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    dayNamesShort: ['日','月','火','水','木','金','土'],
    header: {
      left: 'prev, next, today',
      center: 'title',
      right: 'month, agendaWeek, agendaDay, listMonth',
    },
    buttonText: {
      today: '今日',
      month: '月',
    },
  });
});
