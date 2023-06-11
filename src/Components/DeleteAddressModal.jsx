import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../contexts/AuthContext";

const DeleteAddressModal = ({ closeModal, id }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const deleteAddress = (id) => {
    const updatedCurrentUser = {
      ...currentUser,
      address: currentUser.address.filter((addr) => id !== addr._id),
    };

    setCurrentUser(updatedCurrentUser);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10">
        <div className="bg-white p-2 rounded-lg w-96">
          <button
            className="text-black hover:rounded-full hover:bg-black/[0.07] absolute p-2"
            onClick={closeModal}
          >
            <MdClose />
          </button>
          <div className="flex items-center justify-center py-2">
            <p className="text-center p-5 bg-red-100 rounded-full">
              <AiOutlineDelete size={24} color="red" />
            </p>
          </div>
          <h1 className="text-lg font-semibold text-center py-2">
            Are you sure?{" "}
          </h1>
          <p className="text-center">
            Do you really want to delete this address? <br /> This process
            cannot be undone.
          </p>
          <div className="flex gap-4 items-center justify-around py-5">
            <button
              className="bg-slate-200 p-3 px-5 rounded-lg font-bold"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white p-3 px-5 rounded-lg font-bold"
              onClick={() => {
                deleteAddress(id);
                closeModal();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAddressModal;
