// Generated by CoffeeScript 1.8.0
(function() {
  var __slice = [].slice;

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

}).call(this);
