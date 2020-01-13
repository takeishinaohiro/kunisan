$(function () {

  function fill(){
    $(".error").removeClass("none")
    $(".newbtn").addClass("none")
  }

  function nofill(){
    $(".error").addClass("none")
    $(".newbtn").removeClass("none")
  }
  
  $(".dateinput").change(function(){
    var input1 = $(".dateinput").val()
    
    var input11 = String(input1)
    
    var input2 = $(".timeinput").val()
    var input22 = String(input2)


    var times1 = $(".hidden1").val()
    
    var times2 = $(".hidden2").val()
    
    var times3 = $(".hidden3").val()
    
    
    if (times1.indexOf(input11) >= 0 && input22 == "15:30~"){
      fill()
     
    }
    else if (times2.indexOf(input11) >= 0 && input22 == "17:30~"){
      fill()
      
    }
    else if (times3.indexOf(input11) >= 0 && input22 == "19:30~"){
      fill()
      
    }
    else{
      nofill()
    }
      
    });

  $(".timeinput").change(function(){
    var input1 = $(".dateinput").val()
    
    var input11 = String(input1)
    
    var input2 = $(".timeinput").val()
    var input22 = String(input2)


    var times1 = $(".hidden1").val()
    
    var times2 = $(".hidden2").val()
    
    var times3 = $(".hidden3").val()
    
    
    if (times1.indexOf(input11) >= 0 && input22 == "15:30~"){
      fill()
    }
    else if (times2.indexOf(input11) >= 0 && input22 == "17:30~"){
      fill()
    }
    else if (times3.indexOf(input11) >= 0 && input22 == "19:30~"){
      fill()
    }
    else{
      nofill()
    }
  })
});