const express = require("express");

const router=express.Router()



  
  router.get("/", async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
  });
  
  router
    .route("/:id")
    .get(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: "user not found" });
  
      return res.json(user);
    })
    .patch(async (req, res) => {
      await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
      //Edit user with id
      return res.json({ status: "Scuccess by patching" });
    })
    .delete(async (req, res) => {
      //delete user with id
      await User.findByIdAndDelete(req.param.id);
      return res.json({ status: "Succes by Deleting" });
    });
  
    router.post("/", async (req, res) => {
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
    console.log(result);
    return res.status(201).json({ msg: "success" });
  });

export default router;