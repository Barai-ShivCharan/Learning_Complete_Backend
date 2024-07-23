const express = require("express");
const users = require("./MOCK_DATA (1).json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//Middleware  -plugins
app.use(express.urlencoded({ extended: false }));

//Routes

// This route{ /users} for server side rendering which is in html form
app.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      
      </ul>
      
      `;
  res.send(html);
});

//REST API   -> This route is {"/api/users"} define for client side rendering
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Dyanamic routing with :Id  -->Throw this id we can search with {/api/users/2 like in browser}

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

//We can  not declared POST  http method becz browsers bydefault have GET Method
app.post("/api/users", (req, res) => {
  //data comes from postman as frontend
  const body = req.body;
  // console.log(body);//to print what data comes in console log
  //Now to add coming data {as data from frontend (in this postman) we are trying to add form data to the file as database in {./mock_Data.json}}
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

// Here we use patch for Edit the user with ID also
app.patch("/api/users/:id", (req, res) => {
  //Edit the user with id
  res.json({ status: "Pending" });
});

// Here  we use  dekete for delete the user with id
app.delete("/api/users/:id", (req, res) => {
  //Delete the user with id
  res.json({ status: "Pending" });
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
