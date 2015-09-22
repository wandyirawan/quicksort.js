#quicksoft.js

###About
This is utilies for implementation quicksort algorithm, some quora said this is the best algoritm for sorting.
i'm not take credit for this algorithm, or for the code because i'm use example code for this material: [Source](https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/).

Then, base that  example i'm modification to make this. So this utilities is Free to use, what ever purpose you want.

###Feature:
* .asc Sort data of array by ascending order
* .desc Sort data of array by descending order
* Can sort array of object based property of object

###How to use:
quicksort.asc(array, 'propertyObj', startIdx, endIdx)
quicksort.desc(array, 'propertyObj', startIdx, endIdx)

###Example: 
```
quicksort = require('quicksort.js');

quicksort.asc(array) // sort all array ascending
quicksort.desc(array) // sort all array descending

quicksort.asc(arrayOfObj, 'propertyObj') //sort array of object by property ascending
quicksort.desc(arrayOfObj, 'propertyObj') //sort array of object by property descending

quicksort.asc(array, undefined, 0,5) // sort all array ascending with range sort
quicksort.desc(array, undefined, 4,9) // sort all array descending with range sort
```
