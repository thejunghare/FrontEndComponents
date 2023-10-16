/* 
// using vanilla javascript

// set cookie
document.cookie = 'userLanguage=english; expires=Sun, 22 Oct 2023 23:56:11 UTC; path=/index.html'

// Get cookie
console.log(document.cookie);

// Delete cookie
document.cookie = 'userLanguage; expires=Sun, 22 Oct 2023 23:56:11 UTC; path=/index.html'

*/

// using JS cookie library

// set cookie
Cookies.set('userLanguage', 'english', {expires: 7, path: '/'})

// get cookie
Cookies.get('userLanguage')

// Read all visible cookie
Cookies.get()

// Delete cookie
Cookies.remove(user)




