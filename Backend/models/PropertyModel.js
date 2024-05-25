const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NearbySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  distance: {
    type: String,
    required: true
  }
});

const PropertySchema = new Schema({
  property_id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true }
  },
  property_type: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  square_feet: {
    type: Number,
    required: true
  },
  price_per_month: {
    type: Number,
    required: true
  },
  photos: [
    {
      url: { type: String, required: true },
      description: { type: String }
    }
  ],
  landlord: {
    name: { type: String, required: true },
    contact_number: { type: String, required: true },
    email: { type: String, required: true }
  },
  nearby: {
    colleges: [NearbySchema],
    hospitals: [NearbySchema],
    shopping_centers: [NearbySchema],
    parks: [NearbySchema]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Property', PropertySchema);