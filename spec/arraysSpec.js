// Generated by CoffeeScript 1.8.0
(function() {
  describe('arrays', function() {
    var arr;
    arr = null;
    beforeEach(function() {
      return arr = [5, 4, 3, 2, 1];
    });
    describe('_.first', function() {
      it('should return the first element of an array when n argument is not provided', function() {
        var result;
        result = _.first(arr);
        return expect(result).toEqual(5);
      });
      it('should return the first n elements of an array when passed n as an argument', function() {
        var result;
        result = _.first(arr, 3);
        return expect(result).toEqual([5, 4, 3]);
      });
      return it('should return all the elements if n is greater than or equal to the arrays length', function() {
        var result;
        result = _.first(arr, 20);
        return expect(result).toEqual(arr);
      });
    });
    return describe('_.initial', function() {
      it('should return all elements except the last in the array when n argument is not provided', function() {
        var result;
        result = _.initial(arr);
        return expect(result).toEqual([5, 4, 3, 2]);
      });
      it('should exclude n elements when n is passed as an argument', function() {
        var result;
        result = _.initial(arr, 2);
        return expect(result).toEqual([5, 4, 3]);
      });
      return it('should return an empty array if n exceeds the number of elements in array', function() {
        var result;
        result = _.initial(arr, 99);
        return expect(result).toEqual([]);
      });
    });
  });

}).call(this);