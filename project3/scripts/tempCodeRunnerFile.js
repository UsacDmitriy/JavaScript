let arr = ['qww', 2, 'siski', 4, true];


//for (let i = 0; i< arr.length; i++ ) {
//    (arr[i]);
//}

arr.forEach(function(item, i, mass) {   
    console.log(i + ': ' + item + " (massive: " + mass + ')');
} );