obj =
  a: 1
  b: 2
  c: 3

describe "each", ->
  it "should apply the function to every value in array", ->
    arr = [1, 2, 3]
    newArr = []
    _.each(arr, (element, index) -> newArr[index] = element + 1)
    expect(newArr[0]).toEqual(2)

  it "should apply the function to every value in object", ->

    newObj = {}
    _.each(obj, (value, key) -> newObj[key] = value + 1)
    expect(newObj['a']).toEqual(2)

describe "map", ->
  it "shoud return a new array with the provided function applied to each element of an array", ->
    arr = [1, 2, 3]
    newArr = _.map(arr, (element, index) -> element * 2)
    expect(newArr).toEqual([2,4,6])

  it "should return an array with the provided function applied to each value of an object", ->
    newArr = _.map(obj, (value, key) -> obj[key] = obj[key] * 2)
    expect(newArr).toEqual([2,4,6])

describe "reduce", ->
  arr = []
  startingValue = 10
  arrayCallback = (startingValue, element, index, arr) ->
    startingValue += element

  beforeEach -> arr = [1, 2, 3]

  it "should reduce all elements of an array into one by applying the provided function", ->
    result = _.reduce(arr, arrayCallback)
    expect(result).toEqual(6)

  it "should reduce all values of an object into one by applying the provided function", ->
    obj =
      a: 1
      b: 2
      c: 3

    objCallback = (startingValue, value, key, obj) -> startingValue += value

    result = _.reduce(obj, objCallback)
    expect(result).toEqual(6)

  it "should reduce correctly when provided a starting value", ->
    result = _.reduce(arr, arrayCallback, startingValue)
    expect(result).toEqual(16)

describe "find", ->
  callback = (num)-> num % 2 is 0

  it "should return the first element in an array which passes the provided predicate callback", ->
    arr = [1, 3, 5, 8, 10, 7, 6]
    result = _.find(arr, callback)
    expect(result).toEqual(8)

  it "should return the first value in an object which passes the provided predicate callback", ->
    result = _.find(obj, callback)
    expect(result).toEqual(2)

  it "should return undefined if predicate fails every element in array", ->
    arr = [1, 3, 5]
    result = _.find(arr, callback)
    expect(result).toEqual(undefined)

describe "filter", ->
  callback = (num) -> num % 2 is 0

  it "should return all array elements in an array which pass the provided predicate callback", ->
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    result = _.filter(arr, callback)
    expect(result).toEqual([2, 4, 6, 8, 10])

  it "should return all object values in an array which pass the provided predicate callback", ->
    obj =
      a: 1
      b: 2
      c: 3
      d: 4
      f: 5
      g: 6

    result = _.filter(obj, callback)
    expect(result).toEqual([2, 4, 6])

describe "where", ->
  arrayOfHomes = [
    {location: "Paris Island", age: 18}
      {location: "29 Palms", age: 18}
      {location: "Camp Lejeune", age: 19}
      {location: "Iraq", age: 20}
      {location: "Camp Lejeune", age: 20}
      {location: "Mesa Verda", age: 22}
  ]

  objectOfHomes =
    a: {location: "Paris Island", age: 18}
    b: {location: "29 Palms", age: 18}
    c: {location: "Camp Lejeune", age: 19}
    d: {location: "Iraq", age: 20}
    e: {location: "Camp Lejeune", age: 20}
    f: {location: "Mesa Verda", age: 22}

  it "should returns all matching key/value pairs from array of objects", ->
    result = _.where(arrayOfHomes, {age: 18})
    expect(result).toEqual([{location: "Paris Island", age: 18}, {location: "29 Palms", age: 18}])

  it "should returns all matching key/value pairs from an object of objects", ->
    result = _.where(objectOfHomes, {age: 18})
    expect(result).toEqual([{location: "Paris Island", age: 18}, {location: "29 Palms", age: 18}])

  it "should return an empty array when there are no matches", ->
    result = _.where(arrayOfHomes, {age: 28})
    expect(result).toEqual([])


describe "findWhere", ->
  arrayOfHomes = [
    {location: "Paris Island", age: 18}
      {location: "29 Palms", age: 18}
      {location: "Camp Lejeune", age: 19}
      {location: "Iraq", age: 20}
      {location: "Camp Lejeune", age: 20}
      {location: "Mesa Verda", age: 22}
  ]

  objectOfHomes =
    a: {location: "Paris Island", age: 18}
    b: {location: "29 Palms", age: 18}
    c: {location: "Camp Lejeune", age: 19}
    d: {location: "Iraq", age: 20}
    e: {location: "Camp Lejeune", age: 20}
    f: {location: "Mesa Verda", age: 22}

  it "should return the first matching key/value pairs from array of objects", ->
    result = _.findWhere(arrayOfHomes, {age: 18})
    expect(result).toEqual({location: "Paris Island", age: 18})

  it "should return the first matching key/value pairs from an object of objects", ->
    result = _.findWhere(objectOfHomes, {age: 18})
    expect(result).toEqual({location: "Paris Island", age: 18})

  it "should return undefined when there are no matches", ->
    result = _.findWhere(arrayOfHomes, {age: 28})
    expect(result).toEqual(undefined)

describe "reject", ->

  arr = [1, 2, 3, 4, 5, 6]
  rejectObj = {a: 1, b: 2, c: 3, d: 4}
  callback = (value) -> value % 2 is 0

  it "should return only values from array which fail the predicate callback", ->
    result = _.reject(arr, callback)
    expect(result).toEqual([1, 3, 5])

  it "should return only values from object which fail the predicate callback", ->
    result = _.reject(rejectObj, callback)
    expect(result).toEqual([1, 3])

describe "every", ->

  everyArr1 = [1, 2, 3, 4, 5, 6]
  everyArr2 = [2, 4, 6]
  everyObj1 = {a: 1, b: 2, c: 3, d: 4}
  everyObj2 = {a: 2, b: 4, c: 6}
  callback = (value) -> value % 2 is 0

  it "should return false if a single value in array fails predicate callback", ->
    result = _.every(everyArr1, callback)
    expect(result).toBe(false)

  it "should return true only if all values in array pass predicate callback", ->
    result = _.every(everyArr2, callback)
    expect(result).toBe(true)

  it "should return false if a single value in object fails predicate callback", ->
    result = _.every(everyObj1, callback)
    expect(result).toBe(false)

  it "should return true only if all values in object pass predicate callback", ->
    result = _.every(everyObj2, callback)
    expect(result).toBe(true)

describe "some", ->

  someArr1 = [1, 2, 3, 4, 5, 6]
  someArr2 = [1, 3, 5]
  someObj1 = {a: 1, b: 2, c: 3, d: 4}
  someObj2 = {a: 1, b: 3, c: 9}
  callback = (value) -> value % 2 is 0

  it "should return true if any of the values in the array evaluate to true when passed predicate callback", ->
    result = _.some(someArr1, callback)
    expect(result).toBe(true)

  it "should return false if all values in array evaluate to false when passed predicate callback", ->
    result = _.some(someArr2, callback)
    expect(result).toBe(false)

  it "should return true if any of the values in the object evaluate to true when passed predicate callback", ->
    result = _.some(someObj1, callback)
    expect(result).toBe(true)

  it "should return false if all values in object evaluate to false when passed predicate callback", ->
    result = _.some(someObj2, callback)
    expect(result).toBe(false)
