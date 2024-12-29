const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');

// 1. Get all animals with new fields (food expense, medical bill, and available date)
router.get('/', async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals); // This will return all fields, including the new ones
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. Add a new animal with food expense, medical bill, and available date
router.post('/', async (req, res) => {
    try {
        const newAnimal = new Animal(req.body);
        await newAnimal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. Get animals with food expenses (only return name and food expense)
router.get('/food-expenses', async (req, res) => {
    try {
        const animals = await Animal.find({}, 'name foodExpense'); // Select only 'name' and 'foodExpense'
        res.json(animals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Get animals with medical bills (only return name and medical bill)
router.get('/medical-bills', async (req, res) => {
    try {
        const animals = await Animal.find({}, 'name medicalBill'); // Select only 'name' and 'medicalBill'
        res.json(animals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 5. Get animals' delivery availability (only return name and deliveryDate)
router.get('/delivery-availability', async (req, res) => {
    try {
        const animals = await Animal.find({}, 'name deliveryDate'); // Select only 'name' and 'deliveryDate'
        res.json(animals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// 6. Update an animal by ID (this should include new fields too)
router.put('/:id', async (req, res) => {
    try {
        const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAnimal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 7. Delete an animal by ID
router.delete('/:id', async (req, res) => {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Animal deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;


