import express from "express";
import logic from "./logic/index.mjs";

const api = express();

const jsonBodyParser = express.json();

api.post("/users", jsonBodyParser, (req, res) => {
  try {
    const { name, birthdate, email, username, password } = req.body;

    logic.registerUser(name, birthdate, email, username, password, (error) => {
      if (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message });

        return;
      }

      res.status(201).send();
    })
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message })
  }
})

api.post("/users/auth", jsonBodyParser, (req, res) => {
    try {
      const { username, password } = req.body
  
      logic.loginUser( username, password , (error) => {
        if (error) {
          res
            .status(400)
            .json({ error: error.constructor.name, message: error.message })
  
          return
        }
  
        res.status(202).send()
      })
    } catch (error) {
      res
        .status(400)
        .json({ error: error.constructor.name, message: error.message })
    }
  })

  api.get("/users/:userId", (req, res) => {
    try {
        
      logic.retrieveUser(req.params.userId, (error, user) => {
        if (error) {
          res
            .status(500)
            .json({ error: error.constructor.name, message: error.message })
  
          return
        }
        if(user) {

            res.status(500).send(`<!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>API</title>
                </head>
                
                <body>
                    <h1>sale</h1>

                    <p>${user.name}</p>
                    <p>${user.birthdate}</p>
                    <p>${user.email}</p>
                    <p>${user.username}</p>
                </body>

                </html>`)


                
            }else {
        res.status(404).json(null)
    }
})
    } catch (error){
    }
})


api.post("/users", jsonBodyParser, (req, res) => {
    try {
      const { userId } = req.body
  
      logic.logoutUser( userId , (error) => {
        if (error) {
          res
            .status(400)
            .json({ error: error.constructor.name, message: error.message })
  
          return
        }
  
        res.status(202).send()
      })
    } catch (error) {
      res
        .status(400)
        .json({ error: error.constructor.name, message: error.message })
    }
  })

  

/*
  api.get("/posts/:postId", (req, res) => {
    try {
        
      logic.retrievePosts(req.params.userId, (error, post) => {
        if (error) {
          res
            .status(500)
            .json({ error: error.constructor.author, message: error.message })
  
          return
        }
        if(post) {

            res.status(500).send(`<!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>API</title>
                </head>
                
                <body>
                    <h1>sale</h1>

                    <p>${post.author}</p>
                    <p>${post.image}</p>
                    <p>${post.text}</p>
                    <p>${post.date}</p>
                    <p>${post.id}</p>

                </body>

                </html>`)


                
            }else {
        res.status(404).json(null)
    }
})
    } catch (error){
    }
    
})
*/      

//CHIVATO
const port = 8080;

api.listen(port, () => console.log("Listening on http://localhost:8080"))
