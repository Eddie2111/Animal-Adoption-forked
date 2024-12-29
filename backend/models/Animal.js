const mongoose = require('mongoose');

// Schema for an animal
const AnimalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    healthStatus: { type: String, default: 'Healthy' },
    description: { type: String },
    addedDate: { type: Date, default: Date.now },
    foodExpense: { type: Number, default: 0 }, // Food expense field
    medicalBill: { type: Number, default: 100 }, // Default medical bill is 100
    deliveryDate: { type: Date } // Delivery date field
});

module.exports = mongoose.model('Animal', AnimalSchema);


