import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePropertyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    property_type: "",
    bedrooms: "",
    bathrooms: "",
    square_feet: "",
    price_per_month: "",
    photos: [{ url: "", description: "" }],
    landlordname: "",
    contact_number: "",
    email: "",
    nearby: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Ensure userData exists and contains required properties
    if (!userData || !userData.token || !userData.user) {
      console.error("User data not found in local storage.");
      return;
    }

    // Merge user data into the formData
    const formDataWithUser = {
      ...formData,
      user: userData.user._id, // Assuming user ID is stored in userData.user._id
    };
      const response = await axios.post(
        "http://localhost:3000/prop/properties",
        formDataWithUser,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/");
        console.log(response.data.message);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-col1-700 p-4 w-full mx-auto my-10 rounded-lg max-w-3xl">
      <form onSubmit={handleSubmit}
        className="bg-col1-300 shadow-md rounded px-8 pt-6 pb-6">
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
            required
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
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="street" className="block mb-2 font-semibold">
            Street
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-2 font-semibold">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-2 font-semibold">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postal_code" className="block mb-2 font-semibold">
            Postal Code
          </label>
          <input
            type="text"
            id="postal_code"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-2 font-semibold">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className="mb-4">
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
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
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
    name="landlordname"
    value={formData.landlordname}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    required
  />
</div>
<div className="mb-4">
  <label htmlFor="contact_number" className="block mb-2 font-semibold">
    Contact Number
  </label>
  <input
    type="tel"
    id="contact_number"
    name="contact_number"
    value={formData.contact_number}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    required
  />
</div>
<div className="mb-4">
  <label htmlFor="email" className="block mb-2 font-semibold">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    required
  />
</div>
<div className="mb-4">
          <label
            htmlFor="nearby"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nearby Places
          </label>
          <input
            type="text"
            id="nearby"
            name="nearby"
            value={formData.nearby}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter nearby places"
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Create Property
        </button>
      </form>
    </div>
  );
};

export default CreatePropertyForm;