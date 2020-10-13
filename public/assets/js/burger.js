//using jquery so waiting until everything is loaded to run 
$(function () {
    //burger devoured change state
    $(".change-burger").on("click", function (event) {
        var id = $(this).data("id");
        // console.log("clicked")
        // console.log('id',id)
         var newDevour = $(this).data("newburger");

        console.log(newDevour);
        var newDevourState = {
            devoured: newDevour
        };
        console.log('here')

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newDevourState
        }).then(function(){
            console.log('success');
            location.reload();
        })
        // $.ajax("/api/burgers/" + id, {
        //     type: "PUT",
        //     data: newDevourState
        // }).then(
        //     function () {
        //         console.log("changed devour to", newDevour)
        //         location.reload();
        //     }
        // );
    });
    // new burger added from form 
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("clicked")

        var newBurger = {
            burger_name: $('#ca').val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    // delete burger based on id 
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});