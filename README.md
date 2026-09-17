# Week 9 - NoSQL with Node and Angular

This folder implements Workshop 9: MongoDB CRUD, Express REST routes, and an Angular client.

## Task 1 / prerequisites
1. Install MongoDB and ensure `mongod` is running.
2. Initialise Git if required: `git init`.

## Task 2 - App
```bash
cd App
npm install
node app.js
```
`app.js` connects to `mydb`, uses the `products` collection, clears it before seeding, then demonstrates create/read/update/delete.

## Task 3 - server
```bash
cd server
npm install
npm start
```
API: GET/POST `/api/products`, PUT/DELETE `/api/products/:id`, POST `/api/products/reset`.
The `:id` used by PUT/DELETE is MongoDB `_id` (ObjectId), not the workshop's numeric `id` field.

## Task 4 - Angular
The `client/src/app` folder contains the required Products, Add Product, and Update Product code plus the HTTP service/routes. Generate a normal Angular project scaffold if needed, copy/retain these files, then run `ng serve`.

## Tutor questions to prepare for
- MongoDB stores BSON documents in collections; it is not a relational table database.
- `id` is our application-level numerical identifier; `_id` is automatically supplied by MongoDB and is normally an ObjectId.
- `async/await` is used because database and HTTP operations complete asynchronously.
- `find({})` returns a cursor; `toArray()` materialises its results.
- `$set` updates selected fields rather than replacing the entire document.
- HTTP GET reads, POST creates, PUT updates, and DELETE removes resources.
- Status 201 means created, 400 bad input, 404 not found, 409 conflict/duplicate, and 500 server error.
- CORS is required during development because Angular and Express normally run on different origins/ports.
- Angular's HttpClient returns Observables; `subscribe()` handles the eventual response.
