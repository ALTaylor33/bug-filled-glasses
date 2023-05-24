// Anchors
const string1 = "Start of the string";
const string2 = "End of the string";
console.log(/^Start/.test(string1)); // true
console.log(/string$/.test(string2)); // true

// Quantifiers
const string3 = "aaa";
const string4 = "ab";
console.log(/a{2}/.test(string3)); // true
console.log(/b+/.test(string4)); // true

// OR Operator
const string5 = "apple";
const string6 = "banana";
console.log(/apple|banana/.test(string5)); // true
console.log(/apple|banana/.test(string6)); // true

// Character Classes
const string7 = "abc";
console.log(/[a-z]/.test(string7)); // true

// Flags
const string8 = "Case Insensitive";
console.log(/insensitive/i.test(string8)); // true

// Grouping and Capturing
const string9 = "Hello, World!";
const regex1 = /(Hello), (World)!/;
const match = regex1.exec(string9);
console.log(match[0]); // Hello, World!
console.log(match[1]); // Hello
console.log(match[2]); // World

// Bracket Expressions
const string10 = "abcdef";
console.log(/[aeiou]/.test(string10)); // true

// Greedy and Lazy Match
const string11 = "aaaaaa";
console.log(/a{2,4}/.test(string11)); // true

// Boundaries
const string12 = "Hello, World!";
console.log(/\bHello\b/.test(string12)); // true

// Back-references
const string13 = "apple apple";
console.log(/(\w+)\s\1/.test(string13)); // true

// Look-ahead and Look-behind
const string14 = "abc123def";
console.log(/(?<=abc)\d+/.test(string14)); // true
console.log(/(?<!abc)\d+/.test(string14)); // false