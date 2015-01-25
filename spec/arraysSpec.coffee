describe 'arrays', ->
  arr = null
  beforeEach ->
    arr = [5, 4, 3, 2, 1]

  describe '_.first', ->
    it 'should return the first element', ->
      result = _.first arr;
      expect(result).toEqual(5)

    it 'should return the first n elements when n is provided', ->
      result = _.first arr, 3
      expect(result).toEqual([5, 4, 3])

    it 'should return all the elements if n exceeds size', ->
      result = _.first arr, 20
      expect(result).toEqual(arr)

  describe '_.initial', ->
    it 'should return all elements except the last', ->
      result = _.initial(arr);
      expect(result).toEqual([5, 4, 3, 2])

    it 'should exclude n elements when n is provided', ->
      result = _.initial(arr, 2)
      expect(result).toEqual([5, 4, 3])

    it 'should return an empty array if n exceeds size', ->
      result = _.initial(arr, 99)
      expect(result).toEqual([])

  describe '_.last', ->
    it 'should return the last element', ->
      result = _.last(arr)
      expect(result).toEqual(1)

    it 'should accept argument n which will return last n elements', ->
      result = _.last(arr, 3)
      expect(result).toEqual([3, 2, 1])

    it 'should return the entire array if n exceeds size', ->
      result = _.last(arr, 33)
      expect(result).toEqual(arr)

  describe '_.rest', ->
    it 'should return all elements except first', ->
      result = _.rest(arr)
      expect(result).toEqual([4, 3, 2, 1])

    it 'should accept argument index which will return elements onward starting at index', ->
      result = _.rest(arr, 3)
      expect(result).toEqual([2, 1])

    it 'should return the empty array if index exceeds size', ->
      result = _.rest(arr, 33)
      expect(result).toEqual([])

  describe '_.compact', ->
    it 'should return a new array with all falsey values removed', ->
      result = _.compact([0, 1, false, 2, '', 3]);
      expect(result).toEqual([1, 2, 3])

  describe '_.flatten', ->
    it 'should flatten a nested array', ->
      result = _.flatten([1, [2], [3, [[4]]]])
      expect(result).toEqual([1, 2, 3, 4])

    it 'should flatten only a single level if shallow argument is provided', ->
      result = _.flatten([1, [2], [3, [[4]]]], true)
      expect(result).toEqual([1, 2, 3, [[4]]])

  describe '_.without', ->
    it 'should return a copy of the array with all instances of the values passed in as arguments removed', ->
      result = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1)
      expect(result).toEqual([2, 3, 4])

  describe '_.uniq', ->
    it 'should produce a duplicate free version of the array', ->
      result = _.uniq([1, 2, 1, 3, 1, 4])
      expect(result).toEqual([1, 2, 3, 4])

    it 'should compute unique items based on transformation', ->
      result = _.uniq(arr, (value) -> value % 2 is 0)
      expect(result).toEqual([5, 4])

  describe '_.union', ->
    it 'should return the list of unique items in order they appear in the passed in arrays', ->
      result = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1])
      expect(result).toEqual([1, 2, 3, 101, 10])

  describe '_.zip', ->
    it 'should merge together arrays with corresponding positions', ->
      result = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])
      expect(result).toEqual([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]])

    it 'should fill missing values in with undefined', ->
      result = _.zip([1,2,3,],['a','b'])
      expect(result).toEqual([[1, 'a'], [2, 'b'], [3, undefined]])
