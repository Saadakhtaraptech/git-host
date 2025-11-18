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
        loadpage("index")
    })

    $("#about").click(function(e){
        e.preventDefault();
        loadpage("about")
    })

    $("#contact").click(function(e){
        e.preventDefault();
        loadpage("contact")
    })

    $("#service").click(function(e){
        e.preventDefault();
        loadpage("service")
    })

    $("#gallery").click(function(e){
        e.preventDefault();
        loadpage("gallery")
    })
    loadpage("home")

    function datafetching() {
        $.ajax({
            url: "data.json",
            type: "get",
            success: function (user) {
                let myhtml = ""
                user.forEach(users => {
                    myhtml += `<div class="col-3 ">
                    <div class="card" style="width: 18rem;margin:10px;">
  <img src="${users.p_image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${users.p_name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>`
                })
                $("#myrow").html(myhtml)
            }
        })
    }
    datafetching()
})
