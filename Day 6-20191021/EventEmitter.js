//events are actions performed by the user or the application. They are done in 2 ways: An object or a class should have a feature to raise an event and tell what it will do when the event is raised. 
//2nd part is: The User of the object will raise this event on a certain logical condition. 
//events are created and raised using a core module of nodejs called events. U could create an object of the class EventEmitter and create as many no of events U want. The user of this object will emit(raise) the event on a certain condition. 
//load, click, mousemove, mouseenter, mouseleave are some of the events of the DOM Elements. Similarly UR Class can also have events and clients can raise the events on which UR Class does some job. 
var events = require("events");
var emitter = new events.EventEmitter();

//creating the event is done using addListen
emitter.addListener("load", ()=>console.log("loaded the app"));
emitter.addListener("click", ()=>console.log("clicked the app"));
emitter.on("action", ()=>console.log("action is called"));//new in Nodejs 6.x onwardx

//emitter.removeListener("click");//remove the event from the object. It is required when U no longer need that event in the execution of the program. 
//Raising the event. 
emitter.emit("click");//it might not exist in the object. 
emitter.emit("action");
emitter.emit("load");