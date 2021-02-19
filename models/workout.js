const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema({ 
    day: { 
        type: Date,
        default: Date.now,
    },
    exercise: {
        type: Array,
        default: [],
    },
})

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;