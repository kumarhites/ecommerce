import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import MyModal from "../Components/Modal";
import DeleteAddressModal from "../Components/DeleteAddressModal";

const Profile = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showDeleteAddressModal, setShowDeleteAddressModal] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState();
  const { currentUser, logoutHandler } = useContext(AuthContext);
  const { firstname, lastname, email, address } = currentUser;
  // const {
  //   addressState: { address },
  // } = useContext(AddressContext);
  const handleAddressModal = () => {
    setShowAddressModal(!showAddressModal);
  };

  const handleDeleteAddressModal = (_id) => {
    setAddressToDelete(_id);
    setShowDeleteAddressModal(!showDeleteAddressModal);
  };

  return (
    <>
      {!showAddressModal ? (
        ""
      ) : (
        <MyModal heading={"Add"} closeModal={handleAddressModal} />
      )}
      {!showDeleteAddressModal ? (
        ""
      ) : (
        <DeleteAddressModal
          closeModal={handleDeleteAddressModal}
          id={addressToDelete}
        />
      )}
      <div className="h-screen bg-gray-200 pt-20">
        {/* <!-- Card start --> */}
        <div>
          <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="border-b px-4 pb-6">
              <div className="text-center my-4">
                <img
                  className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  alt=""
                />
                <div className="py-2">
                  <h3 className="font-bold text-2xl mb-1">
                    {firstname} {lastname}
                  </h3>
                  <div className="inline-flex text-gray-700 items-center">
                    <MdOutlineAlternateEmail /> {email}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-2">
                <button
                  className="flex-1 rounded-full bg-blue-600 text-white antialiased font-bold hover:bg-blue-800 px-4 py-2"
                  onClick={handleAddressModal}
                >
                  Add a new address
                </button>
                <button
                  className="flex-1 rounded-full border-2 border-gray-400 font-semibold text-black px-4 py-2"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex gap-2 items-center text-gray-800r mb-4">
                <span>
                  <strong className="text-black ">Addresses</strong>
                </span>
              </div>
              <div className="flex">
                <div className="flex justify-end mr-2">
                  {address === undefined ? (
                    "No address found"
                  ) : (
                    <div className="flex gap-2 flex-col">
                      {address?.map(
                        ({
                          _id,
                          name,
                          area,
                          city,
                          state,
                          pincode,
                          phoneNumber,
                        }) => (
                          <div className="flex items-center gap-2 border-b pb-3 w-full justify-around" key={_id}>
                            <div className="flex flex-col flex-[2]">
                              <p className="text-lg font-semibold">{name}</p>
                              <p className="text-sm font-semibold">
                                {area}, {city}, {state}, {pincode}
                              </p>
                              <p className="text-sm font-semibold">
                                {phoneNumber}
                              </p>
                            </div>
                            <button
                              className="transition-transform duration-200 active:scale-75 cursor-pointer text-red-500 hover:text-red-600 text-[16px] md:text-[20px] p-3 hover:bg-black/[0.07] rounded-full"
                              onClick={() => handleDeleteAddressModal(_id)}
                            >
                              <AiOutlineDelete size={24} />
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
