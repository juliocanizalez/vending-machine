# Vending Machine - ReactJS Project

## Instructions to run this app:


You must have [NodeJS](https://nodejs.org/en/) installed in your pc.

### Setting up this project:

- Run ```npm install``` to install all the dependencies required for this project.
- Create a ```.env``` file in the root of this project
    - In the ```.env``` file put the following code:
    ```PORT=8080```
    - with this configuration when you run ```npm start``` it will start the local server in another port (we need the port 3000 to run **json-server**)
- Install **json-server** with ```sudo npm install -g json-server``` (we need this to run a Fake API)

### Running this project:

- To view this project we need to run the following commands:
    - Open a new command line window in the root folder of this project and run ```npm run serve``` to start the fake API
    - Open another command line window and run ```npm start``` to start this application 