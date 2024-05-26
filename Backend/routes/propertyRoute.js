const express = require('express');
const router = express.Router();
const Property = require('../models/PropertyModel');
const  authMiddleWare = require("../middleware/authmiddleware");

// Get all Properties
router.get('/properties', async (req, res) => {
  try {
      const properties = await Property.find();
      return res.status(200).json({ properties });
  } catch (err) {
      return res.status(404).json({ error: err });
  }
});

// add property
router.post('/properties', authMiddleWare, async (req, res) => {
  try {
    const userId = req.user.id;
    const propertyData = { ...req.body, user: userId };
    const property = new Property(propertyData);
    const response = await property.save();
    return res.status(201).json({ message: response });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// delete property
router.delete('/properties/:id', authMiddleWare, async (req, res) => {
  const { id } = req.params; 
  try {
    const deletedProperty = await Property.findByIdAndDelete(id); 
    if (!deletedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }
    return res.status(200).json({ message: 'Property deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// get property based on filters
router.get('/properties/filters', async (req, res) => {
  const { city, propertyType, minBedrooms, state } = req.query;
  let filters = {};

  if (city) {
    filters['address.city'] = city;
  }
  if (propertyType) {
    filters['property_type'] = propertyType;
  }
  if (minBedrooms) {
    filters['bedrooms'] = { $gte: parseInt(minBedrooms) };
  }
  if (state) {
    filters['address.state'] = state;
  }

  try {
    const properties = await Property.find(filters);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get property by id
router.get('/properties/:id', authMiddleWare, async (req, res) => {
  const { id } = req.params; 
  try {
    const property = await Property.findById(id); 
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    return res.status(200).json({ property });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});


// update property by id
router.put('/properties/:property_id', authMiddleWare, async (req, res) => {
  const { property_id } = req.params;
  const updateData = req.body;
  try {
    const options = { new: true, runValidators: true };
    const updatedProperty = await Property.findByIdAndUpdate(property_id, updateData, options);
    if (!updatedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }
    return res.status(200).json({ property: updatedProperty });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// get property exclude by id
/* router.get('/properties/exclude/:id', authMiddleWare, async (req, res) => {
  try {
      const { property_id } = req.params;
      const query = { user: { $ne: property_id } };
      const properties = await Property.find(query);
      return res.status(200).json({ properties });
  } catch (err) {
      return res.status(404).json({ error: err });
  }
}); */

// get property by user id
router.get('/properties/user/:id', authMiddleWare, async (req, res) => {
  try {
      const { id } = req.params;
      const properties = await Property.find({ user: id });
      return res.status(200).json({ properties });
  } catch (err) {
      return res.status(500).json({ error: 'Fetching properties failed, please try again later.' });
  }
});

module.exports = router;