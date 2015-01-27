// Generated by CoffeeScript 1.8.0
(function() {
  var fillInArguments,
    __slice = [].slice;

  _.bind = function() {
    var context, fn, partial;
    fn = arguments[0], context = arguments[1], partial = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    return function() {
      var args, full;
      full = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args = partial.concat(full);
      return fn.apply(context, args);
    };
  };

  _.bindAll = function() {
    var functions, object;
    object = arguments[0], functions = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    _.each(functions, function(fn) {
      return _.bind(fn, object);
    });
    return object;
  };

  fillInArguments = function(partial, full) {
    _.each(partial, function(arg, index) {
      if (arg === "_") {
        return partial[index] = full.pop();
      }
    });
    return partial.concat(full);
  };

  _.partial = function() {
    var fn, partial;
    fn = arguments[0], partial = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return function() {
      var args, full;
      full = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args = fillInArguments(partial, full);
      return fn.apply(this, args);
    };
  };

  _.memoize = function(fn) {
    var cache;
    cache = {};
    return function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return cache[args[0]] || (cache[args[0]] = fn.apply(this, args));
    };
  };

}).call(this);
