const url = require('url');
const myUrl = new URL('https://www.google.com/search?q=goo&oq=goo&aqs=chrome..69i57j69i59j69i60l2j69i65j69i60.1667j0j7&sourceid=chrome&ie=UTF-8');

// Serialized URL
// console.log(myUrl.href)
// console.log(myUrl.toString())
// console.log(myUrl)

// Host (root domain)
// console.log(myUrl.host)

// // Host name
// console.log(myUrl.hostname)

// // Pathname
// console.log(myUrl.pathname)

// // Serialized query
// console.log(myUrl.search)

// Params Object
// console.log(myUrl.searchParams)

// Add Param
myUrl.searchParams.append('abc', '123')
console.log(typeof myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => { console.log(`${name}: ${value}`) })
