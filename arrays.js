var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (list,item) {
  const list2 = [item,...list]
  return list2
}

function destructivelyAddElementToBeginningOfArray (list,item) {
  list.unshift(item)
  return list
}

function addElementToBeginningOfArray (list,item) {
  const list2 = [item,...list]
  return list2
}

function destructivelyAddElementToBeginningOfArray (list,item) {
  list.unshift(item)
  return list
}
