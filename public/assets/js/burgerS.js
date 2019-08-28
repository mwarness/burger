$(document).ready(function(){
    console.log("i loaded man");
    $("#devButtForm").on("submit", function(event){
        event.preventDefault();
        var burgerId = $(this).children("#currentBurger").val();
        console.log(burgerId);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burgerId
            
        })
        .then(function(data){
            location.reload();
        })
    })

})
