$(document).ready(function () {

    $(".section").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });

    $("#322").hover(function () {
        $(".bk322").addClass("bk322-active")
    }, function () {
        $(".bk322").removeClass("bk322-active")
    })

    $("#521").hover(function () {
        $(".bk521").addClass("bk521-active")
    }, function () {
        $(".bk521").removeClass("bk521-active")
    })

    $("#1226").hover(function () {
        $(".bk1226").addClass("bk1226-active")
    }, function () {
        $(".bk1226").removeClass("bk1226-active")
    })

    $("#1404").hover(function () {
      $(".bk1404").addClass("bk1404-active")
  }, function () {
      $(".bk1404").removeClass("bk1404-active")
  })

  $("#1551").hover(function () {
    $(".bk1551").addClass("bk1551-active")
}, function () {
    $(".bk1551").removeClass("bk1551-active")
})

$("#15760").hover(function () {
  $(".bk15760").addClass("bk15760-active")
}, function () {
  $(".bk15760").removeClass("bk15760-active")
})

$("#14614").hover(function () {
  $(".bk14614").addClass("bk14614-active")
}, function () {
  $(".bk14614").removeClass("bk14614-active")
})

$("#9423").hover(function () {
  $(".bk9423").addClass("bk9423-active")
}, function () {
  $(".bk9423").removeClass("bk9423-active")
})

$("#10893").hover(function () {
  $(".bk10893").addClass("bk10893-active")
}, function () {
  $(".bk10893").removeClass("bk10893-active")
})

$("#16269").hover(function () {
  $(".bk16269").addClass("bk16269-active")
}, function () {
  $(".bk16269").removeClass("bk16269-active")
})

$("#23049").hover(function () {
  $(".bk23049").addClass("bk23049-active")
}, function () {
  $(".bk23049").removeClass("bk23049-active")
})
    

  

   

})