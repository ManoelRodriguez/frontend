[1,2,3].push(4); // [1,2,3,4]
[1,2,3].pop(); // [1,2]
[1,2,3].shift(); // [2,3]
[1,2,3].unshift(0); // [0,1,2,3]

["a", "b"].concat("c"); // ["a", "b", "c"]
["a", "b"].join("-"); // "a-b"
["b", "b"].indexOf("b"); // 0
["b", "b"].lastIndexOf("b"); // 1
["a", "b"].includes("b"); // true (-----CASE SENSITIVE-----)
["a", "b", "c"].slice("1"); // ["b", "c"]

[3, 5, 6, 8].find(n => n > 7)
[3, 5, 6, 8].findIndex()
[3, 5, 6, 8].map()
[3, 5, 6, 8].filter()
[3, 5, 6, 8].reduce()
[3, 5, 6, 8].every()
[3, 5, 6, 8].some()
[3, 5, 6, 8].reverse()
[3, 5, 6, 8].at(-2)