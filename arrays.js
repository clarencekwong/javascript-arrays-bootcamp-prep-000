var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (list,item) {
  const list2 = [item,...list]
  return list2
}

function destructivelyAddElementToBeginningOfArray (list,item) {
  return list.unshift(item)
}