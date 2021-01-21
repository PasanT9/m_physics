const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { check, validationResult} = require("express-validator/check");

const AccessList = require("../model/AccessList");
const Task = require("../model/Tasks");

const router = express.Router();

  router.get(
    "/list",
    [],
    async (req, res) => {
        

      console.log(req.body);
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]

      console.log(token);
      
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }

      try {
        const verifiedJwt = jwt.verify(token, 'randomString');

        const student_id = verifiedJwt.user.student_id;

        let user = await AccessList.findOne({
          student_id
        });

        if (!user){
          return res.status(400).json({
            message: "User Not Exist"
          });
        }

        let allocated_tasks = user.tasks;

        let task =  await Task.find({
          id: allocated_tasks
        });

        console.log(task);

        console.log(task);
        res.status(200).json({
          task

        });
      }
      catch(e)
      {
        res.status(401).json({
          message: "Unauthorized"
        });
      }
    }
  );



  module.exports = router;