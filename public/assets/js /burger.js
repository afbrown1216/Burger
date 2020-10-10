//using jquery so waiting until everything is loaded to run 
$(function () {

    $(".devour-change").on("click", function (event) {
        let id = $(this).data("id");

        let newDevour = $(this).data("devour");

        let newDevourState = {
            devoured: devour
        };


        $.ajax('/api/burgers' + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour)
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#ca').val().trim(),
            devoured: $("[devoured]:checked").val().trim()
        };

        $.ajax('/api/cats', {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });


    $(".delete-burger").on("click", function (event) {
        let id = $(this).data("id");

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