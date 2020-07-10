// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Solution 1 - (Procedural approach)

function largestOfFour(arr) {                         //1
  var results = [];                                   //2
  for (var i = 0; i < arr.length; i++) {              //3 
    var largestNumber = arr[i][0];                    //4
    //console.log(i, largestNumber);                  //4.1
    for (var j = 0; j < arr[i].length; j++) {         //5
      if (arr[i][j] > largestNumber) {                //6
        largestNumber = arr[i][j];                    //7
        //console.log(i, largestNumber, j);           //7.1
      }
    }

    results[i] = largestNumber;                       //8
  }

  return results;                                     //9
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


/*/

/ Notes

    //1 Initializes function that takes in an Array as an argument

      ----------------------------------------------------------
      FCC notes and own further explanations
      ----------------------------------------------------------
       FCC1. Create a variable to store the results as an array.
        //2 - var results = [];

       FCC2. Create an outer loop to iterate through the outer array.
        //3 - [initialization];   = var i = 0;
              [condition];        = i < arr.length;
              [final-expression]  = i++

       FCC3. Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
        //4 - var largestNumber = arr[i][0];
              [i] in this case refering to the outer array or parent array
              [0] The first (or zero index) of each child array 4, 13, 32, 39

        //4.1 - Below

       FCC4. Create said inner loop to work with the sub-arrays.
       //5 - [initialization];   = var j = 0;
             [condition];        = j < arr[i].length;
             [final-expression]  = j++

             j < arr[i].length - The j refers to the child array (The arrays that each hold four numbers)
                               - arr[i].length refers to the length of the child array. In this case 4 at index [3]

             It is important to note that the first loop `i` makes it possible for all child arrays to be iterated over and the second loop  `j` makes it possible so that all the items (numbers in this case) can be iterated over.

       FCC5.  Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
       //6 - This is the condition for the second loop. It says the array of the parents children (arr[i][j]). If any of these children are greater than the number in //4

       //7 - then set the largestNumber variable to the number that is greater than the initial number. In the diagrams below it shows that the loop will iterate over every single number in the child array and if each iteration is higher that the next the largestNumber variable will be updated for that particular child array
       //7.1 - See diagram below

       FCC6. After the inner loop, save the largest number in the corresponding position inside of the results array.
          And finally return said array.
        //8   - results[i] = largestNumber; 
        //7.1 - See diagram below
       
       FCC7. After the inner loop, save the largest number in the corresponding position inside of the results array.
          And finally return said array. 
        //9 - return results;
          
          
         
          

     //4.1  The largestNumber variable at THIS point is only needed to capture initial first values in the array to use later for Greater than or Less than comparisons.
            +----+--------------+
            | i  | largestNumber|
            +----+--------------+
            | 0  |      4       |
            +----+--------------+
            | 1  |      13      |
            +----+--------------+
            | 2  |      32      |
            +----+--------------+
            | 3  |      1000    |
            +----+--------------+

    //7.1   +----+--------------+----+
            | i  | largestNumber| j  |
            +----+--------------+----+
            | 0  |      5       | 1  | - Only 5 > 4 [i[0]] [j[1]] in this case
            +----+--------------+----+
            | 1  |      27      | 1  | - Only 27 > 13 [i[1]] [j[1]] in this case
            +----+--------------+----+
            | 2  |      35      | 1  | 
            | 2  |      37      | 2  |
            | 2  |      39      | 3  | - All numbers in i[2] > 32 [i[2]] [j[3]] in this case
            +----+--------------+----+
            | 3  |      1001    | 1  | - Only 1001 > 1000 [i[3]] [j[1]] in this case
            +----+--------------+----+
    

    


  What is another term for procedural programming?
    Procedural programming relies on - you guessed it - procedures, also known as routines or subroutines. A procedure contains a series of computational steps to be carried out. Procedural programming is also referred to as imperative programming. Procedural programming languages are also known as top-down languages.
    Source - [https://study.com/academy/lesson/object-oriented-programming-vs-procedural-programming.html]
                                */