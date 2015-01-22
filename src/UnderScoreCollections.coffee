window._ = {}
_.each = (container, callback) ->
  if Array.isArray container
    callback item, index, container for item, index in container 
  else
    callback value, key, container for own key, value of container 

_.map = (container, callback) ->
  if Array.isArray container
    (callback item, index, container for item, index in container)
  else
    (callback value, key, container for own key, value of container)

_.reduce = (container, callback, startingValue = 0) ->
  if Array.isArray container
    for element, index in container
      startingValue = callback startingValue, element, index, container
  else
    for own key, value of container
      startingValue = callback startingValue, value, key, container
  startingValue

_.find = (container, callback) ->
  if Array.isArray container
    result = result or element for element in container when callback(element) is true
  else
    result = result or value for own key, value of container when callback(value) is true
  result

_.filter = (container, callback) ->
  if Array.isArray container
    result = (element for element in container when callback(element) is true)
  else
    result = (value for own key, value of container when callback(value) is true)
  result

_.where = (container, properties) ->
  results = []
  if Array.isArray container
    for object in container
      if checkObjectForProperties(object, properties)
        results.push object
  else
    for key of container
      if checkObjectForProperties(container[key], properties)
        results.push container[key]
  results

checkObjectForProperties = (object, properties) ->
  for key of properties
    unless checkObjectForProperty(key, properties[key], object)
      return false
  true

checkObjectForProperty = (key, value, object) ->
  for otherKey of object
    if (otherKey is key and value is object[key])
      return true
  false

_.findWhere = (container, properties) ->
  if Array.isArray container
    for object in container
      if checkObjectForProperties(object, properties)
        return object
  else
    for key of container
      if checkObjectForProperties(container[key], properties)
        return container[key]
  undefined
