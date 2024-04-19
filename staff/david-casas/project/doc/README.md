#2Let App

## Intro

Manage tools exchange between individuals with no profit in between. A kind of social network where the preboious registered user could find those kinds of needed tools they already do not have or don´t make the decision to purchase it

![](https://media.giphy.com/media/FaIDQOgN69FXq/giphy.gif?cid=790b7611nsd69k2sqro1cedzhli9u2jljz3094cyrmjihbju&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

- find exchanging tools
- list the tools list people offers (in place)
- near to you searching (in map)
- open 
- checkout cart (create order)
- check order status
- list orders
- rate place

v0.1
- share place

### UI Design

[Figma](https://www.figma.com/file/cw8K38zpv36iQkjQA5fVXC/App?type=design&node-id=0-1&mode=design&t=RHFOp1rBhBeRDwEs-0)

## Technical Description

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies

- TypeScript
- React
- Express
- Node
- Tailwind
- Mongo
- ...

### Data Model

User
- id (required)
- name (string, required)
- birthdate (date, required)
- email (string, required)
- username (string, required)
- password (string, required)
- avatar (string, optional)

Place
- id (required)
- title (string, required)
- address (string, required)
- coords ([number, number])

Product
- id (required)
- place (Place.id, required)
- title (string, required)
- image (string, required)
- description (string, required)
- price (number, required)

Order
- id (required)
- user (User.id, required)
- place (Place.id, required)
- payed (boolean, required, default false)
- products ([Product.id])
- date (date, required)

Review
- id (required)
- place (Place.id, required)
- user (User.id, required)
- rate (number, required, enum: 1|2|3|4|5)
- comment (string, optional)
- date (date, required)