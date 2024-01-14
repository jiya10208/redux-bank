const customerInitialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "account/updateName":
      return {
        ...state,
        fullname: action.payload.fullname,
      };
    default:
      return state;
  }
}

export function createCustomer(fullname, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updatedName(fullName) {
  return {
    type: "account/updateName",
    payload: { fullName },
  };
}
