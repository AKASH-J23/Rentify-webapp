import React, { useState } from "react";

const CreatePropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: {
      street: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
    property_type: "",
    bedrooms: "",
    bathrooms: "",
    square_feet: "",
    price_per_month: "",
    photos: [{ url: "", description: "" }],
    landlord: {
      name: "",
      contact_number: "",
      email: "",
    },
    nearby: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};

const handleNearbyChange = (e, index, field) => {
  const { value } = e.target;
  setFormData((prevData) => {
      const updatedNearby = [...prevData.nearby];
      updatedNearby[index][field] = value;
      return { ...prevData, nearby: updatedNearby };
  });
};

const addNearby = () => {
  setFormData((prevData) => ({
      ...prevData,
      nearby: [...prevData.nearby, { place: '', distance: '' }]
  }));
};

const removeNearby = (index) => {
  setFormData((prevData) => {
      const updatedNearby = [...prevData.nearby];
      updatedNearby.splice(index, 1);
      return { ...prevData, nearby: updatedNearby };
  });
};


  const handlePhotoChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.photos];
      updatedPhotos[index].url = value;
      return { ...prevData, photos: updatedPhotos };
    });
  };

  const addPhoto = () => {
    setFormData((prevData) => ({
      ...prevData,
      photos: [...prevData.photos, { url: "", description: "" }],
    }));
  };

  const removePhoto = (index) => {
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.photos];
      updatedPhotos.splice(index, 1);
      return { ...prevData, photos: updatedPhotos };
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl mb-4 font-bold">Create Property</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="street" className="block mb-2 font-semibold">
            Street
          </label>
          <input
            type="text"
            id="street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-2 font-semibold">
            City
          </label>
          <input
            type="text"
            id="city"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-2 font-semibold">
            State
          </label>
          <input
            type="text"
            id="state"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postal_code" className="block mb-2 font-semibold">
            Postal Code
          </label>
          <input
            type="text"
            id="postal_code"
            name="address.postal_code"
            value={formData.address.postal_code}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-2 font-semibold">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="property_type" className="block mb-2 font-semibold">
            Property Type
          </label>
          <select
            id="property_type"
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            {/* Add other property types as options */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="bedrooms" className="block mb-2 font-semibold">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bathrooms" className="block mb-2 font-semibold">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="square_feet" className="block mb-2 font-semibold">
            Square Feet
          </label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            value={formData.square_feet}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price_per_month" className="block mb-2 font-semibold">
            Price per Month
          </label>
          <input
            type="number"
            id="price_per_month"
            name="price_per_month"
            value={formData.price_per_month}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photos" className="block mb-2 font-semibold">
            Photos
          </label>
          <div className="mb-4">
            <label htmlFor="photos" className="block mb-2 font-semibold">
              Photos
            </label>
            {formData.photos.map((photo, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={photo.url}
                  onChange={(e) => handlePhotoChange(e, index)}
                  placeholder="Photo URL"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addPhoto}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Add Photo
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="landlord_name" className="block mb-2 font-semibold">
            Landlord Name
          </label>
          <input
            type="text"
            id="landlord_name"
            name="landlord.name"
            value={formData.landlord.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact_number" className="block mb-2 font-semibold">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact_number"
            name="landlord.contact_number"
            value={formData.landlord.contact_number}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="landlord.email"
            value={formData.landlord.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nearby_places" className="block mb-2 font-semibold">
            Nearby Places
          </label>
          <div className="mb-4">
            <label htmlFor="nearby_places" className="block mb-2 font-semibold">
              Nearby Places
            </label>
            {Object.entries(formData.nearby).map(([place, distance], index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={place}
                  onChange={(e) => handleNearbyChange(e, index, "place")}
                  placeholder="Place"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-2"
                />
                <input
                  type="text"
                  value={distance}
                  onChange={(e) => handleNearbyChange(e, index, "distance")}
                  placeholder="Distance"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  type="button"
                  onClick={() => removeNearby(index)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addNearby}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Add Nearby Place
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Create Property
        </button>
      </form>
    </div>
  );
};

export default CreatePropertyForm;
