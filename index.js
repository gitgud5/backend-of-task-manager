const express = require("express");
const app = express();
const mongoose = require("mongoose");
const URI =
    "mongodb+srv://bro_dude:coolpass@clusteroftasks.8sbjevb.mongodb.net/TASKINGDB?retryWrites=true&w=majority";
const PORT = 4000;
const router1 = require('./Routes/homeRoutes');



// SERVER STARTS HERE AND DB ALSO CONNECTS HERE

mongoose.set("strictQuery", true)

try {
    mongoose.connect(URI, () => {
        console.log("HMMM DB connected...");
    })

} catch (error) {
    console.log("THIS IS THE ERROR")

}

// HERE I AM GOING TO MAKE SCHEMAS

const schema = mongoose.Schema;

const taskModelSchema = new schema({
    title: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    description: {
        type: String,
        require: true
    },
    directory: {
        type: String,
        require: true,
        default: 'Main'
    },
    imp: {
        type: Boolean,
        required: true,
        default: false
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

const taskModel = mongoose.model('tasks', taskModelSchema);







// This is where the homeage is
app.get("/", (req, res) => {
    console.log("This is the MAIN page");
    res.send("WTF IS GOING ON IN THE BACKEND???");
});


// These are the routes
app.use("/home", router1);
app.use("/cars", router1);


app.get("/add", (req, res) => {
    const task = new taskModel({
        title: "This is my titalll",
        description: "THIS IS THE DESCRIPTION",
        imp: true,
    });
    task.save().then(
        (response) => {
            res.send(response)
        }
    ).catch(err => {
        console.log(err)
    })


})

app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT ${PORT}`);
});







