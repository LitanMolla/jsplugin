$(function() {
    //Hide codes
    $("#hide").click(function(){
        $(".box").hide(1000)
    })
    //Show Codes
    $("#show").click(function(){
        $(".box").show(1000)
    })
    //showhide
    $("#showhide").click(function(){
        $(".box").toggle(1000)
    })

    // Fade In
    $("#fadein").click(function(){
        $(".box").fadeIn(1000)
    })

    $("#fadeout").click(function(){
        $(".box").fadeOut(1000)
    })
    $("#fadeinout").click(function(){
        $(".box").fadeToggle(1000)
    })

    //Slide Up Down Toggle
    $("#slideUp").click(function(){
        $(".box").slideUp(1000)
    })
    $("#slideDown").click(function(){
        $(".box").slideDown(1000)
    })
    $("#slideUpDown").click(function(){
        $(".box").slideToggle(1000)
    })

    //Image in out toggle
    $("#imgin").click(function(){
        $(".box").addClass("boxImg")
    })
    $("#imgout").click(function(){
        $(".box").removeClass("boxImg")
    })
    $("#imginout").click(function(){
        $(".box").toggleClass("boxImg")
    })
})