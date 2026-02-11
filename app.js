$(document).ready(function(){

    function loadpage(page){
        $.ajax({
            url : page + ".html",
            success : function(data){
                $("#content").html(data)
            }
        })
    }

    $("#home").click(function(e){
        e.preventDefault();
        loadpage("home")
    })

    $("#about").click(function(e){
        e.preventDefault();
        loadpage("about")
    })

    $("#contact").click(function(e){
        e.preventDefault();
        loadpage("contact")
    })

    $("#category").click(function(e){
        e.preventDefault();
        loadpage("category")
    })
    $(document).on("click" , "#exploreBtn" , function(){
        loadpage("category")
    })

    $("#gallery").click(function(e){
        e.preventDefault();
        loadpage("gallery")
    })
    $("#feedback").click(function(e){
        e.preventDefault();
        loadpage("feedback")
    })
        $("#kids").click(function(e){
        e.preventDefault();
        loadpage("kids")
    })
        $("#elders").click(function(e){
        e.preventDefault();
        loadpage("elders")
    })
    $(document).on("click" , ".card" , function(){
        let page = $(this).data("page")
        if(page){
            loadpage(page)
        }
    })
    $(document).on("click" , "#backkids" , function(){
        loadpage("kids")
    })
      $(document).on("click" , "#backelders" , function(){
        loadpage("elders")
    })
    loadpage("home")
})

