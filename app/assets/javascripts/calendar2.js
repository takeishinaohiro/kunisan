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


$(function(){
  let html = `<form action="/users/calendar2" method="post">
                <div class=fc-day1>15~
                    <input type="hidden" value = "1" name = "time">
                    <label class="mark">○
                      <input type="submit" value="送信する" class = "calebtn">
                    </label>
                </div>
              </form>
              <form action="/users/calendar2" method="post">
                <div class=fc-day2>17~
                    <input type="hidden" value="2" name = "time">
                    <label class="mark">○
                      <input type="submit" value="送信する" class = "calebtn">
                    </label>
                </div>
              </form>
              <form action="/users/calendar2" method="post">
                <div class=fc-day3>19~
                    <input type="hidden" value="3" name = "time">
                    <label class="mark">○
                      <input type="submit" value="送信する" class = "calebtn">
                    </label>
                </div>
              </form>`
  $('.fc-day').append(html);


   var dates = $('.caleday').val();
   var times = $('.caletime').val();
   console.log(dates)
   console.log(times)


  
  $("input:submit").click(function(){
    const day = $(this).parent().parent().parent().parent().data("date");
    $(".fc-day1,.fc-day2,.fc-day3").append(`<input type="hidden" value=${day} name="day">`)
  })
  
  $('.fc-day').click(function(){
    const day = $(this).data('date');
    console.log(day)
  });
  $('.fc-day1, .fc-day2, .fc-day3').click(function(){
    var days = $(this).val();
    console.log(days)
  });
  $('input').change(function(){
    var days = $(this).val();

    console.log(days)
  });

  var dates1 = $('.caleday1').val();
  console.log(dates1)
  var dates2 = $('.caleday2').val();
  console.log(dates2)
  var dates3 = $('.caleday3').val();
  console.log(dates3)

  $("input:submit").each(function(i,e){
    var day = $(this).parent().parent().parent().parent().data("date");
    labelDate2 = `"${day}"`
    var parents = $(this).parent()
    const bro = parents.prev()
    const bros = bro.val()
    const bros2 = `"${bros}"`
    if (dates1.indexOf(labelDate2) >= 0 && bros == "1"){
      $(this).parent().text("×")
      $(this).addClass("none")
    }
    else if (dates2.indexOf(labelDate2) >= 0 && bros == "2"){
      $(this).parent().text("×")
      $(this).addClass("none")
    }
    else if (dates3.indexOf(labelDate2)>= 0 && bros == "3"){
      $(this).parent().text("×")
      $(this).addClass("none")
    }
  })
  


});
