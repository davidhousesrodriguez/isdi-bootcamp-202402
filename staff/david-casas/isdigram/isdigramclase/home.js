// presentation

var title = document.querySelector('h1')
var logOutButton = document.querySelector('button')

try {
    var user = retrieveUser(sessionStorage.username)

    title.innerText = 'Hello, ' + user.name + '!'
}catch (error) {
    alert(error.message)
}

logOutButton.addEventListener('click', function () {
    sessionStorage.clear()

    var loginAddress = location.href.replace('home', 'login')

    location.href = loginAddress
})