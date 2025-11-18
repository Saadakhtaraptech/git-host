$(document).ready(function(){

    // SPA Single page application start

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

    // SPA Single page application end


    // product filtration start

    $(document).on('click', '.filter', function(){

        let category = $(this).data('category')
        $.ajax({
            url :'data.json',
            success : function(data){
                let filterData = data

                if(category !== 'all'){
                    filterData = data.filter(item =>
                        item.name.toLowerCase().includes(category.toLowerCase())
                    )
                }
                
                let html= ""
                filterData.forEach(users => {

                    html += `
                     <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center mb-5">
                <div class="card" style="width: 18rem;">
  <img src="${users.image}" alt="..."  height="350px">
  <div class="card-body">
    <h5 class="card-title">${users.name}</h5>
    <h5 class="card-title">${users.price}</h5>
    <p class="card-text">Some quick example text to build on the card title </p>
    <a href="#" class="btn btn-primary view" data-id="${users.id}">View Details</a>
  </div>
</div>
            </div>
                    ` 

                })

                $("#myrow").html(html)


            }
        })


    })


    // product filtration end


    // data fetching start

    function datafetching() {
        $.ajax({
            url: "data.json",
            type: "get",
            success: function (user) {
                let myhtml = ""
                user.forEach(users => {
                    myhtml += `<div class="col-3 ">
                    <div class="card" style="width: 18rem;margin:10px;">
  <img src="${users.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${users.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary view" data-id=${users.id}>View Detail</a>
  </div>
  </div>
</div>`                               
                })
                $("#myrow").html(myhtml)
            }
        })
    }
    datafetching()


    $(document).on("click", '.view', function(e){
        e.preventDefault()
        let myid = $(this).data('id');


        $.ajax({
            url : 'data.json',
            success : function (mydata){
                let p = mydata.find(item => item.id == myid)

                $("#m-image").attr('src',p.image)
                $("#m-name").html(p.name)
                $("#m-price").html(p.price)

                let mymodal = new bootstrap.Modal(document.getElementById("mymodal")).show()
            }
        })
    })
})
