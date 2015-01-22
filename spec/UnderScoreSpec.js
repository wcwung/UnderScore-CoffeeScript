// Generated by CoffeeScript 1.8.0
(function() {
  var obj;

  obj = {
    a: 1,
    b: 2,
    c: 3
  };

  describe("each", function() {
    it("should apply the function to every value in array", function() {
      var arr, newArr;
      arr = [1, 2, 3];
      newArr = [];
      _.each(arr, function(element, index) {
        return newArr[index] = element + 1;
      });
      return expect(newArr[0]).toEqual(2);
    });
    return it("should apply the function to every value in object", function() {
      var newObj;
      newObj = {};
      _.each(obj, function(value, key) {
        return newObj[key] = value + 1;
      });
      return expect(newObj['a']).toEqual(2);
    });
  });

  describe("map", function() {
    it("shoud return a new array with the provided function applied to each element of an array", function() {
      var arr, newArr;
      arr = [1, 2, 3];
      newArr = _.map(arr, function(element, index) {
        return element * 2;
      });
      return expect(newArr).toEqual([2, 4, 6]);
    });
    return it("should return an array with the provided function applied to each value of an object", function() {
      var newArr;
      newArr = _.map(obj, function(value, key) {
        return obj[key] = obj[key] * 2;
      });
      return expect(newArr).toEqual([2, 4, 6]);
    });
  });

  describe("reduce", function() {
    var arr, arrayCallback, startingValue;
    arr = [];
    startingValue = 10;
    arrayCallback = function(startingValue, element, index, arr) {
      return startingValue += element;
    };
    beforeEach(function() {
      return arr = [1, 2, 3];
    });
    it("should reduce all elements of an array into one by applying the provided function", function() {
      var result;
      result = _.reduce(arr, arrayCallback);
      return expect(result).toEqual(6);
    });
    it("should reduce all values of an object into one by applying the provided function", function() {
      var objCallback, result;
      obj = {
        a: 1,
        b: 2,
        c: 3
      };
      objCallback = function(startingValue, value, key, obj) {
        return startingValue += value;
      };
      result = _.reduce(obj, objCallback);
      return expect(result).toEqual(6);
    });
    return it("should reduce correctly when provided a starting value", function() {
      var result;
      result = _.reduce(arr, arrayCallback, startingValue);
      return expect(result).toEqual(16);
    });
  });

  describe("find", function() {
    var callback;
    callback = function(num) {
      return num % 2 === 0;
    };
    it("should return the first element in an array which passes the provided predicate callback", function() {
      var arr, result;
      arr = [1, 3, 5, 8, 10, 7, 6];
      result = _.find(arr, callback);
      return expect(result).toEqual(8);
    });
    it("should return the first value in an object which passes the provided predicate callback", function() {
      var result;
      result = _.find(obj, callback);
      return expect(result).toEqual(2);
    });
    return it("should return undefined if predicate fails every element in array", function() {
      var arr, result;
      arr = [1, 3, 5];
      result = _.find(arr, callback);
      return expect(result).toEqual(void 0);
    });
  });

  describe("filter", function() {
    var callback;
    callback = function(num) {
      return num % 2 === 0;
    };
    it("should return all array elements in an array which pass the provided predicate callback", function() {
      var arr, result;
      arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      result = _.filter(arr, callback);
      return expect(result).toEqual([2, 4, 6, 8, 10]);
    });
    return it("should return all object values in an array which pass the provided predicate callback", function() {
      var result;
      obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        f: 5,
        g: 6
      };
      result = _.filter(obj, callback);
      return expect(result).toEqual([2, 4, 6]);
    });
  });

  describe("where", function() {
    var arrayOfHomes, objectOfHomes;
    arrayOfHomes = [
      {
        location: "Paris Island",
        age: 18
      }, {
        location: "29 Palms",
        age: 18
      }, {
        location: "Camp Lejeune",
        age: 19
      }, {
        location: "Iraq",
        age: 20
      }, {
        location: "Camp Lejeune",
        age: 20
      }, {
        location: "Mesa Verda",
        age: 22
      }
    ];
    objectOfHomes = {
      a: {
        location: "Paris Island",
        age: 18
      },
      b: {
        location: "29 Palms",
        age: 18
      },
      c: {
        location: "Camp Lejeune",
        age: 19
      },
      d: {
        location: "Iraq",
        age: 20
      },
      e: {
        location: "Camp Lejeune",
        age: 20
      },
      f: {
        location: "Mesa Verda",
        age: 22
      }
    };
    it("should returns all matching key/value pairs from array of objects", function() {
      var result;
      result = _.where(arrayOfHomes, {
        age: 18
      });
      return expect(result).toEqual([
        {
          location: "Paris Island",
          age: 18
        }, {
          location: "29 Palms",
          age: 18
        }
      ]);
    });
    it("should returns all matching key/value pairs from an object of objects", function() {
      var result;
      result = _.where(objectOfHomes, {
        age: 18
      });
      return expect(result).toEqual([
        {
          location: "Paris Island",
          age: 18
        }, {
          location: "29 Palms",
          age: 18
        }
      ]);
    });
    return it("should return an empty array when there are no matches", function() {
      var result;
      result = _.where(arrayOfHomes, {
        age: 28
      });
      return expect(result).toEqual([]);
    });
  });

  describe("findWhere", function() {
    var arrayOfHomes, objectOfHomes;
    arrayOfHomes = [
      {
        location: "Paris Island",
        age: 18
      }, {
        location: "29 Palms",
        age: 18
      }, {
        location: "Camp Lejeune",
        age: 19
      }, {
        location: "Iraq",
        age: 20
      }, {
        location: "Camp Lejeune",
        age: 20
      }, {
        location: "Mesa Verda",
        age: 22
      }
    ];
    objectOfHomes = {
      a: {
        location: "Paris Island",
        age: 18
      },
      b: {
        location: "29 Palms",
        age: 18
      },
      c: {
        location: "Camp Lejeune",
        age: 19
      },
      d: {
        location: "Iraq",
        age: 20
      },
      e: {
        location: "Camp Lejeune",
        age: 20
      },
      f: {
        location: "Mesa Verda",
        age: 22
      }
    };
    it("should return the first matching key/value pairs from array of objects", function() {
      var result;
      result = _.findWhere(arrayOfHomes, {
        age: 18
      });
      return expect(result).toEqual({
        location: "Paris Island",
        age: 18
      });
    });
    it("should return the first matching key/value pairs from an object of objects", function() {
      var result;
      result = _.findWhere(objectOfHomes, {
        age: 18
      });
      return expect(result).toEqual({
        location: "Paris Island",
        age: 18
      });
    });
    return it("should return undefined when there are no matches", function() {
      var result;
      result = _.findWhere(arrayOfHomes, {
        age: 28
      });
      return expect(result).toEqual(void 0);
    });
  });

  describe("reject", function() {
    var arr, callback, rejectObj;
    arr = [1, 2, 3, 4, 5, 6];
    rejectObj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    callback = function(value) {
      return value % 2 === 0;
    };
    it("should return only values from array which fail the predicate callback", function() {
      var result;
      result = _.reject(arr, callback);
      return expect(result).toEqual([1, 3, 5]);
    });
    return it("should return only values from object which fail the predicate callback", function() {
      var result;
      result = _.reject(rejectObj, callback);
      return expect(result).toEqual([1, 3]);
    });
  });

  describe("every", function() {
    var callback, everyArr1, everyArr2, everyObj1, everyObj2;
    everyArr1 = [1, 2, 3, 4, 5, 6];
    everyArr2 = [2, 4, 6];
    everyObj1 = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    everyObj2 = {
      a: 2,
      b: 4,
      c: 6
    };
    callback = function(value) {
      return value % 2 === 0;
    };
    it("should return false if a single value in array fails predicate callback", function() {
      var result;
      result = _.every(everyArr1, callback);
      return expect(result).toBe(false);
    });
    it("should return true only if all values in array pass predicate callback", function() {
      var result;
      result = _.every(everyArr2, callback);
      return expect(result).toBe(true);
    });
    it("should return false if a single value in object fails predicate callback", function() {
      var result;
      result = _.every(everyObj1, callback);
      return expect(result).toBe(false);
    });
    return it("should return true only if all values in object pass predicate callback", function() {
      var result;
      result = _.every(everyObj2, callback);
      return expect(result).toBe(true);
    });
  });

  describe("some", function() {
    var callback, someArr1, someArr2, someObj1, someObj2;
    someArr1 = [1, 2, 3, 4, 5, 6];
    someArr2 = [1, 3, 5];
    someObj1 = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    someObj2 = {
      a: 1,
      b: 3,
      c: 9
    };
    callback = function(value) {
      return value % 2 === 0;
    };
    it("should return true if any of the values in the array evaluate to true when passed predicate callback", function() {
      var result;
      result = _.some(someArr1, callback);
      return expect(result).toBe(true);
    });
    it("should return false if all values in array evaluate to false when passed predicate callback", function() {
      var result;
      result = _.some(someArr2, callback);
      return expect(result).toBe(false);
    });
    it("should return true if any of the values in the object evaluate to true when passed predicate callback", function() {
      var result;
      result = _.some(someObj1, callback);
      return expect(result).toBe(true);
    });
    return it("should return false if all values in object evaluate to false when passed predicate callback", function() {
      var result;
      result = _.some(someObj2, callback);
      return expect(result).toBe(false);
    });
  });

}).call(this);
