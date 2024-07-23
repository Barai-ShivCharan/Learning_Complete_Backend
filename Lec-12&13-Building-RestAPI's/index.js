const express = require("express");
const users = require("./MOCK_DATA (1).json");

const app = express();
const PORT = 8000;

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
  //Create New User
  res.json({ status: "Pending" });
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

//Above code which have same route define in multiple http method , we can customize in this way given below code
/**
 * app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //Edit user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //delete user with id
    return res.json({ status: "Pending" });
  });

 */
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
