const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    carNb: {
        type: String,
        required: [true, "The car registration number is required"],
    },
    client: {
        type: String,
        required: [true, "The client name is required"],
        minLength: [6, "Name must be longer than 5"]
    },
    manufacturer: {
        type: String,
        required: [true, "The manufacturer company is required"],
        minLength: [3, "Manufacturer must be longer than 3"]
    },
    model: {
        type: String,
        required: [true, "The car model is required"],
        minLength: [3, "Model must be longer than 3"]
    },
    position: {
        type: String,
        required: [true, "The car position is required"],
        minLength: [6, "Position must be longer than 5"]
    },
    problem: {
        type: String,
        required: [true, "The car problem is required"],
        enum: ["Accident", "Mechanical issue", "Tire issue", "Battery issue", "Other"],
    },
    status: {
        type: String,
        required: [true, "The request status is required"],
        enum: ["Pending", "Solved"],
        default: "Pending"
    },
    description: {
        type: String,
    }
}, { timestamps: true });

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
