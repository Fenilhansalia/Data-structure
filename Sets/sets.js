/*
 Sets
  sets data structure is kind of like an array 
  except there are no duplicate items and values 
  are not in any particular order 

  the typical use of and set is to check presence of an item

  es6 already has a set object (not all the methods are included in this set function)
  es6 set methods - clear, add, remove as delete, entries, forEach, has,  values
  set methods - has, values, add, remove,size, intersection, union, difference, subset, 

*/
function mySet() {
  // the var collection will hold the set
  var collection = [];

  //this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //this method will return the size of the collection
  this.size = function () {
    return collection.length;
  };

  //this methiod will return the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // this method will return the difference of two sets ad a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
setB.remove('a');
console.log(setB.has('a'));
console.log(setB.union(setA).values());
