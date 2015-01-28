// Generated by CoffeeScript 1.8.0
(function() {
  var __slice = [].slice;

  _.keys = function(obj) {
    return _.map(obj, function(value, key) {
      return key;
    });
  };

  _.values = function(obj) {
    return _.map(obj, function(value) {
      return value;
    });
  };

  _.pairs = function(obj) {
    return _.map(obj, function(value, key) {
      return [key, value];
    });
  };

  _.invert = function(obj) {
    _.each(obj, function(value, key) {
      obj[value] = key;
      return delete obj[key];
    });
    return obj;
  };

  _.functions = function(obj) {
    return _.compact(_.map(obj, function(value, key) {
      if (typeof value === 'function') {
        return key;
      }
    }));
  };

  _.extend = function() {
    var destination, sources;
    destination = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    _.each(sources, function(obj) {
      return _.each(obj, function(value, key) {
        return destination[key] = value;
      });
    });
    return destination;
  };

}).call(this);
