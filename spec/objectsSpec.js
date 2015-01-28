// Generated by CoffeeScript 1.8.0
(function() {
  describe('objects', function() {
    return describe('keys', function() {
      return it('should return all of the names of the object\'s properties', function() {
        var results;
        results = _.keys({
          one: 1,
          two: 2,
          three: 3
        });
        return expect(results).toEqual(['one', 'two', 'three']);
      });
    });
  });

}).call(this);
