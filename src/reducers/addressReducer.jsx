export const addressReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_ADDRESS":
      return { ...state, addrss: action.payload };
    default:
      return state;
  }
};

export const initialAddressFormData = {
  _id: "",
  name: "",
  area: "",
  city: "",
  state: "",
  pincode: "",
  phoneNumber: "",
};

export const initialAddressState = {
  address: [],
  addressFormData: initialAddressFormData,
  showAddressModal: false,
  selectedAddressId: null,
};
