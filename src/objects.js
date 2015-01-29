// Generated by CoffeeScript 1.8.0
(function() {
  var __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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

  _.functions = _.methods = function(obj) {
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

  _.isFunction = function(object) {
    return typeof object === 'function';
  };

  _.pick = function() {
    var fn, keys, obj, result;
    obj = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    fn = keys[0];
    result = {};
    _.each(obj, function(value, key) {
      if (_.isFunction(fn) && fn(value) || __indexOf.call(keys, key) >= 0) {
        return result[key] = value;
      }
    });
    return result;
  };

  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  _.isArray = function(obj) {
    return Array.isArray(obj);
  };

  _.isObject = function(value) {
    return typeof value === 'function' || typeof value === 'object';
  };

  _.isArgument = function(obj) {
    return obj.toString() === "[object Arguments]";
  };

  _.isNumber = function(value) {
    return typeof value === 'number' || typeof value === 'NaN';
  };

  _.isString = function(value) {
    return typeof value === 'string';
  };

  _.isBoolean = function(value) {
    return typeof value === 'boolean';
  };

  _.isDate = function(value) {
    return value instanceof Date;
  };

  _.isRegExp = function(value) {
    return value instanceof RegExp;
  };

  _.isNaN = function(value) {
    return Number.isNaN(value);
  };

  _.isUndefined = function(value) {
    return value === void 0;
  };

  _.isNull = function(value) {
    return value === null;
  };

  _.isFinite = function(value) {
    return isFinite(value) && !isNaN(parseFloat(value));
  };

}).call(this);
