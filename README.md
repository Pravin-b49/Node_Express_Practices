File Manager Practice Project (File_CRUD_Express)

This is a small practice project built using Node.js, Express, and EJS.
The main purpose of this project is to understand:
Routing in Express
Working with the file system
Rendering dynamic views using EJS
Performing basic CRUD-like operations on files
This project allows users to create, read, update (rename), and delete text files directly from the browser.

Features
Create Files — Add a new file with a title and content
Read Files — View the full content of any file
Edit File Names — Rename existing files
Delete Files — Remove unwanted files (using POST for safety)
Styled Using Tailwind CSS
No Database Needed — All tasks are stored as actual files in the /file folder

Installation & Usage:
----------------------
1. Clone the repository
   git clone <your-repo-url>
   cd express-file-manager

2. Install dependencies
   npm install

3. Start the server
   node app.js

4. Visit in browser:
   http://localhost:3000

Future Improvements:
--------------------
Add database support (MongoDB)
Add file upload
Add search bar to filter files
Add authentication
Add "create folder" feature
Add dark/light theme
