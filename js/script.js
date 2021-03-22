$(".addTodo").on("click", () => {
  let todoTask = $(".todo-input").val();
  const li = $("<li></li>");
  li.text(todoTask);

  //Done Button
  const doneBtn = $("<button></button>");
  doneBtn.addClass("done");
  doneBtn.text("Done");

  //Undo Button
  const undoBtn = $("<button></button>");
  undoBtn.addClass("undo no-display");
  undoBtn.text("Undo");

  //Remove Button
  const rmvBtn = $("<button></button>");
  rmvBtn.addClass("rmv");
  rmvBtn.text("Remove");

  //Appending done and remove Buttons
  $(".todo-list").append(li);
  $(li).append(undoBtn);
  $(li).append(doneBtn);
  $(li).append(rmvBtn);

  //Removing the todo Item
  $(".rmv").on("click", (e) => {
    let todoItem = $(e.currentTarget).parent();
    todoItem.fadeOut("1s");
  });

  //Marking todo Item as done
  $(".done").on("click", (e) => {
    let todoItem = $(e.currentTarget).parent();
    todoItem.addClass("strikethrough");
    todoItem.children(".done").addClass("no-display");
    todoItem.children(".undo").removeClass("no-display");
  });

  //Undo Marking
  $(".undo").on("click", (e) => {
    let todoItem = $(e.target).parent();
    todoItem.removeClass("strikethrough");
    todoItem.children(".undo").addClass("no-display");
    todoItem.children(".done").removeClass("no-display");
  });
});
