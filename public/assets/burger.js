// handles display logic
const path = require('path')
$(() => {
  $(".change-devoured").on("click", function (e) {
    let id = $(this).data("id");
    let newdevoured = $(this).data("newdevoured");

    let newDevouredState = {
      devoured: newdevoured,
    };
    $.ajax(`/api/burgers/${id}`, {
      type: "put",
      data: newDevouredState,
    }).then(() => {
      console.log(`changed to${newdevoured}`);
      location.reload();
    });
  });

  $(".create-form").on("submit", (e) => {
    e.preventDefault();

    let newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured:checked").val().trim(),
    };
  });

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(() => {
    console.log("created new burger");
    location.reload();
  });

  $.(".delete-burger").on("click", function(e){
      let id=$(this).data("id");

      $.ajax(`api/burgers/${id}`,{
          type: "DELETE"
      }).then(()=>{
          console.log("deleted burger", id)
          location.reload();
      })
  })
});
