/**
 * 
 * Question 1
 * 
 */
var arrOfArray = [2, 
    [1,],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 
        [12], 
        [1,2,
            [5,7,
                [9]
            ]
        ]
    ]
];
// var arrOfArray = [1,2,3,[4,5,[6,7,[8,9,[10,11,[12]]]]]];

function flattener(arr1, arr2){
    flatArr =[];
    flatArr +=  arr1.concat(arr2);
    return flatArr;
};
var arrOfArray1 = arrOfArray.reduce(flattener);
console.log(arrOfArray1);
console.log('-----------------------------------')

