#2Let App

## Intro

Manage tools exchange between individuals with no profit in between. A kind of social network where the previous registered user could find those kinds of needed tools they already do not have or don´t make the decision to purchase it

![](https://media.giphy.com/media/FaIDQOgN69FXq/giphy.gif?cid=790b7611nsd69k2sqro1cedzhli9u2jljz3094cyrmjihbju&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

- find and list tools(nearby with map)
- view tool details( to check features and contact details)
- contact tool owner(by prefered method)
- choose contact method to show( for owners) https://api.whatsapp.com/send?phone=34677371770
- choose borrower in tool(for owners)
- remove borrower from tool( for owners)
- mark tool as not available
- view user profile (with tools)
- rate user


v0.1
- tools deals advertisements

### UI Design

[Figma](https://www.figma.com/file/VzbMk7JT8mrKe1roYrWp0c/Untitled-(Copy)?type=design&node-id=2117%3A107&mode=design&t=inLXS0vgX0bYmHOq-1)

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
- Mongoose
- Mongoose Geo



### Data Model

User
- id (required)
- name (string, required)
- Surname (string, required)
- email (string, required)
- password (string, required)
- telephone(string, optional)

Category
- id(required)
- name(string, required)

Tool
- id (required)
- owner(User.id, required)
- image (string, required)
- category (Category.id, required)
- description (string, required)
- address (string, required) mongoose geo
- location ([number], required)
- available(boolean, required)

Lending
- id(required)
- tool(Tool.id, required)
- lender(User.id, required)
- borrower(User.id, required)
- date(Date, required)
- status(string, required, enum: lended|returned)

Review
- id(required, required)
- author(User.id, required)
- owner(User.id, required)
- lending(Lending.id, required)
- rate(number, required, enum:1|2|3|4|5)
- comment(string, optional)
- date (Date, required)



