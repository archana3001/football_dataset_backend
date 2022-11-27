const models =require('./models');
const Sequelize = require('sequelize');

const op=Sequelize.Op;

// find all users
// in sql we do : 
// select * from Users;

// players is already present table and database
const findAll=async()=>{
     const players=await models.players.findAll();
    console.log(JSON.stringify(players));
} 

// Every Sequelize model has built-in finder methods to facilitate queries. 
//Above, we used .findAll() to return all instances of the User model.

// find all users where firstname is "John"
// in sql we do as: select * from Users where firstName="John";

// const findAllJohns=async()=>{
    // const johns=await models.players.findAll({
    //     where:{ firstName : 'John',
    //     }
    // })
    // console.log("All users with first name John :", JSON.stringify(johns));
// }
findAll();