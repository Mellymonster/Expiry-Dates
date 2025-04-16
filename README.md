# YOUR PROJECT TITLE: GROCERY EXPIRY TRACKER
#### Video Demo URL:
#### Description: This is a tracker that helps to track the expiry dates of grocery items.

PROJECT OVERVIEW
This project is titled grocery expiry tracker, and it is a full stack web application that uses javascript which helps user to manage and track the expiry dates of the grocery items they have purchased.

The reason that I came up with this project is because I realise that my family often forgets the expiry dates of perishables goods. With my  knowledge from CS50 as well as extra self-studying, my goal was to build a simple tracker to help to track the expiry dates of the different grocery items and to flag out items that have already been expired.

HOW THE PROJECT IS IMPLEMENTED
- Backend: Express.js framework was used as it is a good starter framework
- Frontend: Uses plain HTML, CSS and Javascript
- Database: MVC model is used here. The database uses SQLite and Sequelize is used as the ORM to interact with it using Javascript instead of rawSQL.
- This app is made of 2 parts, server app, and frontend web app. The server app does 2 things: serve the frontend pages, and provides APIs for the frontend to make requests to. Meanwhile, the Frontend web interface will make relevant API requests to the server, as the user interacts with the app.
- This app is built with CRUD in mind and the most common HTTP methods , namely GET, POST and PUT were used. GET helps to get all or single item, or delete item. POST creates a new item while PUT updates an existing item.
- The front end is built with 3 screens, namely home, all itemms, create item and update item. Popups were added as good UI UX consideration
- In addition, the backend code follows the principle of separation of concerns. app.ts handles application setiup and middleware configuration, while app.routing.ts defines route mappings and delegates logic to controller functions.
he separation of concerns was also used between app.ts and app.routing.ts to separate the app.bootstrapping process, from the routing process.

FEATURES OF THE APP
- Homepage
- View page of all the grocery items in a table, with their names and expiry dates
- Create new items to add it to the existing list
- Edit the name or expiry dates from the existing list
- Delete items directly from the table
- Expired items are highlighted in red
- Popup features to alert the user whether they have sucessfully created, edited, updated or deleted the item

HOW THE PROJECT WORKS
-FRONTEND-
1. When a user first opens the URL, they will land on the homepage (home.html), they can then click into see my groceries which will show the viewpage of all the groceries. 
2. If they click on add new grocery, what this does is that itemCreate.html will be triggered, and the user will be prompted to fill in 2 fields, the item's name and expiry data. Upon clicking submit, the program will read the user input and build a javascript object and convert it into JSON using JSON .stringify(). The data is sent to the server using the fetch()API with a POST request to /api/items. Following that, the program awaits for server response, reads the JSON message and displays it as a pop up box.
3. Each row also include edit and delete buttons. Clicking on edit will redirect the user to itemEdit.html and send a PUT request to update the item. Clicking on delete will send a GET request instead to /api/items/delete/:id to delete the item from the existing list.

-BACK END-
1. In the item.controller.ts file, there are 5 main functions. getItems retrives all the grocery items from the databse and returns them as JSON while getItem retrives only a single grocery item. createItem validates the user input and then insert a new row into the database. updateItem locates an existing item via its id and then updates it with new dta, and saves the changes. deleteItem locates and removes an item from the database. All the controller functions validates the user input and returns an error if there is missing or invalid data.

2. In item.model.ts, it basically defines the structure of each row in the groceries table, such that each row consists of an id, a name and an expiry date.

LEARNINGS
This was a fun project to create, that allowed me to harness the skills from CS50 such as learning to integrate the programming language of javascript into web programming, learning how to start my own database and create a web application from scratch.
