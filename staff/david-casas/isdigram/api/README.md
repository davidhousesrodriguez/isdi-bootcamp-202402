# API

## endpoints

- register user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"Mano Manito","birthdate":"2000-01-01","email":"mano@manito.com","username":"manito","password":"123qwe123"}' http://localhost:8080/users -v

curl -X POST -H "Content-Type: application/json" -d '{"name":"Palo Palito","birthdate":"2000-01-01","email":"palo@palito.com","username":"palito","password":"123qwe123"}' http://localhost:8080/users -v
```

- login user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"username":"manito","password":"123qwe123"}' http://localhost:8080/users/auth -v
```

- retrieve user
```sh
curl -X GET -H "Content-Type: application/json" -d '{"id":"pynt68j0ekw"}' http://localhost:8080/users -v
```
- retrievePosts
```sh
curl -X GET -H "Content-Type: application/json" -d '{"id":"p35grcmd2wr8"}' http://localhost:8080/posts -v
```



// TODO