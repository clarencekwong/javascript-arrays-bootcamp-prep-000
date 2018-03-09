var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (list,item) {
  const list2 = list.unshift(item)
  return list2
}

function destructivelyAddElementToBeginningOfArray (list,item) {
  return list.unshift(item)
}