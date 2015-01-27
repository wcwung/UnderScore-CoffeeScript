// Generated by CoffeeScript 1.8.0
(function() {
  describe('functions', function() {
    describe('_.bind', function() {
      it('should bind a function to an object', function() {
        var fn, result;
        fn = function() {
          return "Hello " + this.name;
        };
        result = _.bind(fn, {
          name: "world"
        });
        return expect(result()).toEqual("Hello world");
      });
      it('should partially apply single argument to function', function() {
        var fn, result;
        fn = function(greeting) {
          return "" + greeting + " " + this.name;
        };
        result = _.bind(fn, {
          name: 'moe'
        }, 'hi');
        return expect(result()).toEqual('hi moe');
      });
      return it('should partially apply multiple arguments to function', function() {
        var fn, result;
        fn = function(a, b, c) {
          return a + b + c;
        };
        result = _.bind(fn, {}, 1, 2);
        return expect(result(1)).toEqual(4);
      });
    });
    return describe('_.bindAll', function() {
      return it('should bind multiple functions to an object at once', function() {
        var buttonView;
        buttonView = {
          label: 'underscore',
          onClick: function() {
            return "Clicked on " + this.label;
          },
          onHover: function() {
            return "Hovered on " + this.label;
          }
        };
        _.bindAll(buttonView, 'onClick', 'onHover');
        expect(buttonView.onHover()).toEqual("Hovered on underscore");
        return expect(buttonView.onClick()).toEqual("Clicked on underscore");
      });
    });
  });

}).call(this);
