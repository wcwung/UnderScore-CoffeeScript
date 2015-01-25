// Generated by CoffeeScript 1.8.0
(function() {
  describe('arrays', function() {
    var arr;
    arr = null;
    beforeEach(function() {
      return arr = [5, 4, 3, 2, 1];
    });
    describe('_.first', function() {
      it('should return the first element', function() {
        var result;
        result = _.first(arr);
        return expect(result).toEqual(5);
      });
      it('should return the first n elements when n is provided', function() {
        var result;
        result = _.first(arr, 3);
        return expect(result).toEqual([5, 4, 3]);
      });
      return it('should return all the elements if n exceeds size', function() {
        var result;
        result = _.first(arr, 20);
        return expect(result).toEqual(arr);
      });
    });
    describe('_.initial', function() {
      it('should return all elements except the last', function() {
        var result;
        result = _.initial(arr);
        return expect(result).toEqual([5, 4, 3, 2]);
      });
      it('should exclude n elements when n is provided', function() {
        var result;
        result = _.initial(arr, 2);
        return expect(result).toEqual([5, 4, 3]);
      });
      return it('should return an empty array if n exceeds size', function() {
        var result;
        result = _.initial(arr, 99);
        return expect(result).toEqual([]);
      });
    });
    describe('_.last', function() {
      it('should return the last element', function() {
        var result;
        result = _.last(arr);
        return expect(result).toEqual(1);
      });
      it('should accept argument n which will return last n elements', function() {
        var result;
        result = _.last(arr, 3);
        return expect(result).toEqual([3, 2, 1]);
      });
      return it('should return the entire array if n exceeds size', function() {
        var result;
        result = _.last(arr, 33);
        return expect(result).toEqual(arr);
      });
    });
    describe('_.rest', function() {
      it('should return all elements except first', function() {
        var result;
        result = _.rest(arr);
        return expect(result).toEqual([4, 3, 2, 1]);
      });
      it('should accept argument index which will return elements onward starting at index', function() {
        var result;
        result = _.rest(arr, 3);
        return expect(result).toEqual([2, 1]);
      });
      return it('should return the empty array if index exceeds size', function() {
        var result;
        result = _.rest(arr, 33);
        return expect(result).toEqual([]);
      });
    });
    describe('_.compact', function() {
      return it('should return a new array with all falsey values removed', function() {
        var result;
        result = _.compact([0, 1, false, 2, '', 3]);
        return expect(result).toEqual([1, 2, 3]);
      });
    });
    describe('_.flatten', function() {
      it('should flatten a nested array', function() {
        var result;
        result = _.flatten([1, [2], [3, [[4]]]]);
        return expect(result).toEqual([1, 2, 3, 4]);
      });
      return it('should flatten only a single level if shallow argument is provided', function() {
        var result;
        result = _.flatten([1, [2], [3, [[4]]]], true);
        return expect(result).toEqual([1, 2, 3, [[4]]]);
      });
    });
    return describe('_.without', function() {
      return it('should return a copy of the array with all instances of the values passed in as arguments removed', function() {
        var result;
        result = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
        return expect(result).toEqual([2, 3, 4]);
      });
    });
  });

}).call(this);
