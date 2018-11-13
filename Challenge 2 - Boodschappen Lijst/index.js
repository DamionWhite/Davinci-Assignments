var shoppingList = [];

//  Function addItem
//  Takes in a string and an array
//  If item isn't already in array, add item to array
//  Returns Array;
function addItem(itemName, arr) {
  //  Loop through array
  for (var item in arr) {
    //  If item already exists in array
    if (arr[item] === itemName) {
      console.log(`Item ${itemName} already exists in array`);
      return;
    }
  }

  //  Items isn't already in array, add it
  return arr.push(itemName);
}

//  Function addItem
//  Takes string and array
//  If string is found in array, delete that entry
function deleteItem(itemName, arr) {
  var isDeleted = false;

  //  Loop through array
  for (var item in arr) {
    if (arr[item] === itemName) {
      arr.splice(item, 1);
      isDeleted = true;
      break;
    }
  }

  if (isDeleted) {
    console.log(`${itemName} is succesfully removed.`);
  } else {
    console.log(`${itemName} couldn't be removed`);
  }
}

//  Function getItems
//  Takes Array
//  Logs all the items in Array
function getItems(arr) {
  console.log(`Shopping List:`);
  for (item in arr) {
    console.log(`${arr[item]}`);
  }
}

//  Function sortItems
//  Takes array
//  Alphabetically sorts the content
function sortItems(arr) {
  return arr.sort();
}

//  Function clearList
//  Takes string and array
//  Clears the array
function clearList(arr) {
  console.log(`Clearing List...`);
  arr = [];
}

//  Test Adding
addItem("Cheese", shoppingList);
addItem("Milk", shoppingList);
addItem("Cheese", shoppingList);
addItem("Butter", shoppingList);
addItem("Bread", shoppingList);

//  Test Deleting
deleteItem("Butter", shoppingList);
deleteItem("Chips", shoppingList);

//  Test getting and sorting
getItems(shoppingList);
sortItems(shoppingList);
getItems(shoppingList);

//  Test clearing
clearList(shoppingList);
getItems();