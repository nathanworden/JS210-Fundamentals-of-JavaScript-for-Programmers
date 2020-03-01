// create a string that starts at 1.
// create a string of stars of num - 1 length
// While the length of the number string is less than num
//    add the next number. (which is the last number + 1)
// for the star string, pop off one star
// each iteration add these two strings together and log

// function generatePattern(num) {
//   var nums = '1';
//   var stars = ["*"];
//   while (stars.length < num - 1) {
//     stars.push("*");
//   }


//   for (var i = num; i > 0; i -= 1) {
//     console.log(nums + stars.slice(0, i).join(''));
//     var idx = nums.length - 1
//     var strNum = nums[idx]
//     var intNum = Number(strNum) + 1
//     nums += String(intNum);
//   }
// }


// console.log(generatePattern(20));

///////////////////////////////////////
// Further Exploration

function generatePattern(n) {
  for (var i = 1; i <= n; i += 1) {
    var string = '';
    for (var j = 1; j <= i; j += 1) {
      string += String(j);
    }

    for (var k = i; k < n; k += 1) {
      if (k > 8) {
        string += "**";
      } else {
        string += '*'
      }
    }

    console.log(string);
  }
}

generatePattern(20);


// function generatePattern(n) {
//   var string;
//   var i;
//   var j;
//   var k;

//   for (i = 1; i <= n; i += 1) {
//     string = '';
//     for (j = 1; j <= i; j += 1) {
//       string += String(j);
//     }

//     for (k = i + 1; k <= n; k += 1) {
//       string += '*';
//     }

//     console.log(string);
//   }
// }

// generatePattern(20);





