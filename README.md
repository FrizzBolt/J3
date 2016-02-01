#Darkroom


Darkroom was a game created from scratch over the course of two days as part of our Beautiful Meaningful Things assignment at Dev Bootcamp.

Darkroom is played by one or more people. The first person to open the file on the server will be in a maze, but will have limited visibility.
Any other people who log onto the server will be able to see the map of the maze. There are some things that are visible on the map that are invisible ot the person in the maze. There are also things in the maze that are invisible on the map.

Without looking at each others' screens, the map-holder(s) must communicate with the maze-runner and guide them through the maze.

In order to run Darkroom, will need to have NodeJS installed and will need to run the following commands in your terminal:

```
npm install --save express@4.10.2
#=> Installs Express web framework

npm install --save socket.io
#=> Installs Socket.io

node index.js
#=> Hosts Express page and displays the port it's being hosted on. 
#=>(Ex: If it's displays "listening on port *:3000" you can access the page from http://localhost:3000)
```
