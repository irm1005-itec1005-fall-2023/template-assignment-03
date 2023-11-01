// Description: This file contains the tests for the ToDo App
// Version: 1.0.0

function initializeTestUI() {
  try {
    document.getElementById("run-tests").addEventListener("click", runTests);
  }
  catch (err) {
    console.error("Could not find Button with id 'run-tests'");
  }
}

function displayConsoleTestErrorMessage(testCount, errorReference, errorMessage) {
  console.error(errorReference + " - " + errorMessage);
  console.log(`🤬 Test ${testCount}: Failed`);
}


function runTests() {
  // Temporary variable to track if any errors were thrown
  let errorThrown = false;

  // Used to track the number of tests run
  let testCount = 1;

  // Run the tests

  console.log("🚀 Running tests...");


  // TEST 1
  // Check if the array exists and is empty
  try {

    // Starting test message
    console.log(`🧪 Test ${testCount}: Has the todoItems array been initialised`);

    if (todoItems) {
      console.log("✅ todoItems is defined");
    }
    else {
      throw new Error("todoItems is not defined");
    }

    if (Array.isArray(todoItems)) {
      console.log("✅ todoItems is an array");
    }
    else {
      throw new Error("todoItems is not an array");
    }

    if (todoItems.length === 0) {
      console.log("✅ todoItems is an empty array");
    }
    else {
      throw new Error("todoItems has stuff in it");
    }
  }
  catch (err) {
    /*
    errorThrown = true;
    console.log(`🤬 Test ${testCount}: Failed`);
    console.error(err.message + " - todoItems is not defined");
    */
    errorThrown = true;
    displayConsoleTestErrorMessage(
      testCount,
      err.message,
      "Something went wrong with the todoItems array"
    );
  }
  finally {
    testCount++;
  }



  // TEST 2
  // Test the Add Task Function

  try {

    // Starting test message
    console.log(`🧪 Test ${testCount}: Does the Add Task Function work`);

    const tasksToCreate = 10;

    // Add a few tasks to the array
    for (let i = 0; i < tasksToCreate; i++) {
      addToDoItem("This is a task " + i);
    }

    if (todoItems.length === tasksToCreate) {
      console.table(todoItems)
      console.log(`✅ todoItems has ${tasksToCreate} items now`);

    }
    else {
      throw new Error("todoItems has incorrect amount of items");
    }

    // Check the shape of the objects in the array
    if (todoItems[0].hasOwnProperty("id") === true) {
      console.log("✅ todoItem has the \"id\" property");
    }
    else {
      throw new Error("todoItem does not have the \"id\"  property");
    }

    if (todoItems[0].hasOwnProperty("text") === true) {
      console.log("✅ todoItem has the \"text\" property");
    }
    else {
      throw new Error("todoItem does not have the \"text\"  property");
    }

    if (todoItems[0].hasOwnProperty("completed") === true) {
      console.log("✅ todoItem has the \"completed\" property");
    }
    else {
      throw new Error("todoItem does not have the \"completed\"  property");
    }

  }
  catch (err) {
    errorThrown = true;
    displayConsoleTestErrorMessage(
      testCount,
      err.message,
      "Could not add tasks"
    );
  }
  finally {
    testCount++;
  }


  // TEST 3
  // Test the Remove Task Function
  try {

    // Starting test message
    console.log(`🧪 Test ${testCount}: Does the Remove Task Function work`);

    let count = todoItems.length;

    // Get an ID of a random element in the todoArray
    const randomIndex = Math.floor(Math.random() * todoItems.length);

    // Remove a random ToDoItem from the array
    removeToDoItem(todoItems[randomIndex].id);

    if (todoItems.length === count - 1) {
      console.table(todoItems)
      console.log(`✅ todoItems at ${randomIndex} Index has been deleted and there are ${todoItems.length} items now`);
    }
    else {
      throw new Error("todoItems has an incorrect number of items - one should have been removed");
    }
  }
  catch (err) {
    errorThrown = true;
    displayConsoleTestErrorMessage(
      testCount,
      err.message,
      "Could not remove task"
    );
  }
  finally {
    testCount++;
  }



  // TEST 4
  // Test the Mark ToDo as Completed Function

  try {

    // Starting test message
    console.log(`🧪 Test ${testCount}: Are we able to mark Todos as completed properly`);

    // Get an ID of a random element in the todoArray
    const randomIndex = Math.floor(Math.random() * todoItems.length);

    // Mark a random ToDoItem as completed
    markToDoItemAsCompleted(todoItems[randomIndex].id);

    if (todoItems[randomIndex].completed) {
      console.table(todoItems)
      console.log(`✅ ToDoItem at Index ${randomIndex} has been marked as completed`);
    }
    else {
      throw new Error("ToDoItem has not been marked as completed");
    }
  }
  catch (err) {
    errorThrown = true;
    displayConsoleTestErrorMessage(
      testCount,
      err.message,
      "Could not mark task as completed"
    );
  }
  finally {
    testCount++;
  }




  // TEST 5
  // Test the Delete ToDo Function

  try {

     // Starting test message
     console.log(`🧪 Test ${testCount}: Are we able to delete Todos properly`);

    // Get the count in the todoArray
    const count = todoItems.length;

    // Get an ID of a random element in the todoArray
    const randomIndex = Math.floor(Math.random() * todoItems.length);

    // Delete a random ToDoItem from the array
    deleteToDoItem(todoItems[randomIndex].id);

    if (todoItems.length === count - 1) {
      console.table(todoItems)
      console.log("✅ ToDoItem has been deleted");
    }
    else {
      throw new Error("ToDoItem has not been deleted");
    }
  }
  catch (err) {
    errorThrown = true;
    displayConsoleTestErrorMessage(
      testCount,
      err.message,
      "Could not delete todoItem"
    );
  }
  finally {
    testCount++;
  }



  // Clear the array and cleanup
  try {
    console.log(`🧪 Test ${testCount}: Emptying the todoItems array at the end of the tests`);

    // Clear all tasks from the array
    if (todoItems) {
      todoItems = [];
    }
  }
  catch(err) {
    errorThrown = true;
    displayConsoleTestErrorMessage(
      testCount,
      err.message,
      "Could not clear the array at end of tests"
    );
  }
  finally {
    testCount++;
  }

  if (errorThrown) {
    console.log("❌ Please fix the errors above and try again");
  }
  else {
    console.log("✅ All tests passed. You can now start working on the next phase of the assignment");
  }


}

initializeTestUI();
