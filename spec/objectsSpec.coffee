describe 'objects', ->
  describe '_.keys', ->
    it 'should return all of the names of the object\'s properties', ->
      results = _.keys({one: 1, two: 2, three: 3})
      expect(results).toEqual(['one', 'two', 'three'])

  describe '_.values', ->
    it 'should return all of the values of the object\'s properties', ->
      results = _.values({one: 1, two: 2, three: 3})
      expect(results).toEqual([1, 2, 3])

  describe '_.pairs', ->
    it 'should convert an object into a list of [key, value] pairs', ->
      results = _.pairs({one: 1, two: 2, three: 3})
      expect(results).toEqual([["one", 1], ["two", 2], ["three", 3]])

  describe '_.invert', ->
    it 'should return an object where the keys and values have been swapped', ->
      results = _.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"})
      expect(results).toEqual({Moses: "Moe", Louis: "Larry", Jerome: "Curly"})

  describe '_.functions', ->
    it 'should return a sorted list of the names of every method in an object', ->
      results = _.functions(_)
      expect(results.length).not.toEqual(0)

  describe '_.extend', ->
    it 'should copy all of the properties in the source objects over to the destination object', ->
      results = _.extend({name: 'moe'}, {age: 50})
      expect(results).toEqual({name: 'moe', age: 50})

  describe '_.isFunction', ->
    it 'should return true if object is a function', ->
      expect(_.isFunction(alert)).toBe(true)

  describe '_.pick', ->
    it 'should return a copy of the object, filtered to only have values for the whitelisted keys', ->
      result= _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age')
      expect(result).toEqual({name: 'moe', age: 50})

    it 'should return a copy of the object, filtered to only have values which pass the predicate', ->
      result = _.pick({name: 'moe', age: 50, userid: 'moe1'}, (value, key, object) -> typeof value is 'number')
      expect(result).toEqual({age: 50})

  describe '_.isElement', ->
    it 'should return true if object is a DOM element', ->
      results = _.isElement(document.getElementsByTagName('body')[0])
      expect(results).toBe(true)

    it 'should return false if not DOM node', ->
      expect(_.isElement('test')).toBe(false)
      expect(_.isElement([])).toBe(false)
      expect(_.isElement(32)).toBe(false)
      expect(_.isElement({})).toBe(false)

  describe '_.isArray', ->
    it 'should return false if object is not an Array', ->
      results = (-> _.isArray arguments)()
      expect(results).toBe(false)

    it 'should return true if object is an Array', ->
      expect(_.isArray([1, 2, 3])).toBe(true)

  describe '_.isObject', ->
    it 'should return true if passed a function', ->
      result = _.isObject(->)
      expect(result).toBe(true)

    it 'should return true if passed an array', ->
      result = _.isObject([1, 2, 3])
      expect(result).toBe(true)

    it 'should return true if passed an object', ->
      result = _.isObject({a: 1})
      expect(result).toBe(true)

    it 'should return false if passed primitive value', ->
      result = _.isObject(2)
      expect(result).toBe(false)

    it 'should return true if object is an Arguments object', ->
      result = _.isArgument(((a, b, c)-> arguments)(1, 2, 3))
      expect(result).toBe(true)

    it 'should return false if object is not an Arguments object', ->
      result = _.isArgument([1, 2, 3])
      expect(result).toBe(false)

  describe '_.omit', ->
    it 'should return a copy of the object filtered to omit the blacklisted keys passed as strings', ->
      result = _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid')
      expect(result).toEqual({name: 'moe', age: 50})

    it 'should return a copy of the object filtered to omit the blacklisted keys passed as array', ->
      result = _.omit({name: 'moe', age: 50, userid: 'moe1'}, ['userid'])
      expect(result).toEqual({name: 'moe', age: 50})

    it 'should return a copy of the object filtered to omit the values which pass the predicate', ->
      result = _.omit({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}, (value, key) -> value % 2 is 0)
      expect(result).toEqual({ a: 1, c: 3, e: 5 })

  describe '_.defaults', ->
    it 'should fill in undefined properties in object with the first value present in the list of defaults object', ->
      iceCream = {flavor: "chocolate"}
      result = _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"})
      expect(result).toEqual({flavor: "chocolate", sprinkles: "lots"})

  describe '_.clone', ->
    it 'should create a shallow-copied clone of the object', ->
      result = _.clone({name: 'moe'})
      expect(result).toEqual({name: 'moe'})

  describe '_.has', ->
    it 'should return a boolean indicating whether an object has the specified key', ->
      result = _.has({a: 1, b: 2, c: 3}, "b")
      expect(result).toBe(true)

  describe '_.moe', ->
    it 'should return a function that will itself return the key property of any passed-in object', ->
      moe = {name: 'moe'}
      result = _.property('name')(moe)
      expect(result).toEqual('moe')
