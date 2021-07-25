// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

describe("fibb", () => {
  test("returns a string of numbers the length of the input that follow the fibonnaci sequence", () => {
    expect(fibb(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibb(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.

// Create a function called fibb
// It takes a parameter of a number
// I know I am going to need an empty array that I will call finArr
// I am not entirely sure where to go from here... I am fairly certain the fibonnaci sequence has a formula so I will look that up.
// I will probably pause on the function and just work on the logic of the sequence
// The function will return an array of numbers follwing the fibonnaci sequence that is the length of the argument.

// const fibb = (num) => {
//   finArr = []
// }

// Ok so the formula is x(n) = x(n-1) + x(n-2)
// I am trying to figure out how to come up with the next index so the new index should be x(n)... or maybe the array at an index? a(i)...
// So the formula can then be written a(i)=a(i-1)+a(i-2). This is starting to look or read like a for loop. I think... I guess I can try it.

// for(let i = 0; i < array.length; i++){
//   return a(i) = a(i-1)+a(i-2)
// }
// The answer I will push into the empty array so

// for(let i = 0; i < array.length; i++){
//   return finArr.push(a(i) = a(i-1)+a(i-2))
// }

// Ok, I will add it to the function and see what happens

// const fibb = (num) => {
//   finArr = []
//   for(let i = 0; i < array.length; i++){
//     return finArr.push(a(i) = a(i-1)+a(i-2))
//   }  return finArr
// }
// console.log(fibb(6))

// Welp failed miserably. Also I am reading the directions again and it needs to take in a number greater than 2 so I am most likely going to need a conditional for that. Also, I am just realizing my for loop doesn't have an array to iterate over so there's also that. Fun.

// const fibb = (num) => {
  // In order for the formula to start it needs an array. so maybe it starts with one number just to initiate the formula?
  // Also I forgot to switch the ()from the equation to []. *insert eyeroll here*
  // arr = [0]
  // finArr = []
  // if(num > 2){
  //   for(let i=0; i<= arr.length; i++){
  //     arr[i] = arr[i-1] + arr[i-2]
  //     finArr.push(arr[i])
      // I think I can adjust the array length returned by assigning it the number in the parameter so I will do that...
      // Nope, didn't work..
    // }
    // finArr.length = num - 1

//     return finArr
//   }
// }



// So I am fairly certain I got the fibb sequence to work. It 1. kept going after 6 indexes and 2. stopped working after 6 indexes. Hmmm. off to google I go...
// Ok, so first thing is first. In my research I found that (i) needed to be set to  <= the length of the number I am passing in so it can run to that length.
// Ok, that worked except I am missing one 1 and after position 6 getting NAN...
// After some pen and paper work (so fun) of running through my formula there I realized:
  // 1. i needs to start at index 2 in order for it to not be a negative index number so I will add another number in and...just missing a 1
  // 2. I am missing a 1 because the way the math works the first number pushed into the new array is the second 1 in the sequence since I had to start at index 2. So I added 1 to my finArr... and it passed!

  const fibb = (num) => {
    arr = [0,1]
    finArr = [1]
    if(num > 2){
      for(let i=2; i<= num; i++){
        arr[i] = arr[i-1] + arr[i-2]
        finArr.push(arr[i])
        }
        return finArr
      }
    }
    // woo, that was a doozy

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddSort", () => {
  test("returns an array of odd numbers sorted from least to greatest", () => {
    expect(oddSort(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddSort(fullArr2)).toEqual([-823, 7, 23])
  })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// First I make a function called oddSort
// Takes in a parameter of an array
// I need to .filter() through the array and retrurn only odd number values
// Not sure if I can put those two parameters on filter but I will try
// Out of the new array of number values I will sort them from least to greatest and return that in a new array.

const oddSort = (array) => {
  // oooo hoo hoo, in my research of type of I realized I have to create a function to compare the values first to see if they are the right type AND THEN plug that value through the filter. I think this might be how I do my odds only in addition to my numbers...maybe a logical operator I think...

  const oddNums = (value) => {
    if(typeof(value) === "number" && value % 2 != 0){
      return value
    }
  }
  let oddArr = array.filter(oddNums)
  console.log(oddArr)
  return oddArr.sort((a,b) => a-b)
}

// Super score! All green! I needed this one after that first challenge. I'm nervous this is the little pick me up before another crazy challenge though lol.  


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.
