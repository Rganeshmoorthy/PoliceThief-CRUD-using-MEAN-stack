# PoliceThief-CRUD-using-MEAN-stack

MEAN is a set of Open Source components that together, provide an end-to-end framework for building dynamic web applications; starting from the top (code running in the browser) to the bottom (database). The stack is made up of:

    *MongoDB* : Document database – used by your back-end application to store its data as JSON (JavaScript Object Notation) documents
    
    *Express* (sometimes referred to as Express.js): Back-end web application framework running on top of Node.js
    
    *Angular* (formerly Angular.js): Front-end web app framework; runs your JavaScript code in the user's browser, allowing your application UI to be dynamic
    
     *Node.js* : JavaScript runtime environment – lets you implement your application back-end in JavaScript
     
    
   ##Pre-requisites
   
    *node.js* - https://nodejs.org/en/download/
   
    *mongodb* - https://www.mongodb.com/download-center/community
    
    
    **ServerSide installation**
    
    >npm init
    
    package.json file is responsible for managing libraries and versions of it.
    
    >npm i --save express body-parser cors mongoose bcryptjs
    
    Routing information will be given at index.routes.ts and app.js most important to kick start application
    
    **Mongodb installation**
    
    > cd c:\program files\mongodb\server\3.2\bin> mongod.exe --dbpath "d:\data\db"
    
    > cd c:\program files\mongodb\server\3.2\bin>mongo.exe
    
    mongodb will be run on localhost:27017
    
    Create database and collections via Robomongo software or command prompt.
    
    
    #To run Node js
    >node app.js wil be running on PORT 3000
    
##Angular ClientSide Design##

  To create new Angular Project
  >ng new AngularClient
  
  To create a component
  
  > ng g component Thief
  
  component has html file,css file,ts file.
  
  To create a Service
  >ng generate service Thief
 
 To create model class
 > ng generate class Thief --type=model
 
 Routing information will be provided in routes.ts
 
 environment.ts file is responsible for setting environment to bring communication between server(nodejs) and angular
 
Angular will be running on PORT 4200.

**To run Angular**
>ng serve --open 4200


 
 
  
    
    

