import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function MyModal({ heading, closeModal }) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleClose = (e) => {
    if (e.target.id === "container") {
      closeModal();
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addAddressToUser = (currentUser, formData) => {
    const updatedAddress = currentUser.address || []; // Ensure currentUser.address is an array
    const updatedCurrentUser = {
      ...currentUser,
      address: [...updatedAddress, formData],
    };

    setCurrentUser(updatedCurrentUser);
    localStorage.setItem("loginDetails", JSON.stringify(updatedCurrentUser));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAddressToUser(currentUser, formData);
    setFormData({
      name: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
      phoneNumber: "",
    });
    closeModal();
  };

  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10"
    >
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-5 rounded-lg">
        <p className="text-lg font-semibold text-center">{heading} address</p>
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                required
                placeholder="Name"
                className="input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <input
                id="area"
                name="area"
                type="text"
                required
                placeholder="Area"
                className="input"
                value={formData.area}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                type="text"
                required
                placeholder="City"
                className="input"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <input
                id="state"
                name="state"
                type="text"
                required
                placeholder="State"
                className="input"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <input
                id="pincode"
                name="pincode"
                type="text"
                required
                placeholder="Pincode"
                className="input"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                required
                placeholder="Phone Number"
                className="input"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-3 flex-col">
            <button type="submit" className="loginBtn">
              {heading}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
