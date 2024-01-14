import { combineReducers, createStore } from "redux";

const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const customerInitialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: action.payload + state.balance,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + state.loan,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullName,
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
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 500 });
console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { purpose, amount } };
}
function payLoan() {
  return { type: "account/payLoan" };
}

function createCustomer(fullname, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationalId, createdAt: new Date().toISOString() },
  };
}

function updatedName(fullName) {
  return {
    type: "account/updateName",
    payload: { fullName },
  };
}

// store.dispatch(deposit(300));
// console.log(store.getState());
// store.dispatch(withdraw(100));
// console.log(store.getState());
// store.dispatch(requestLoan(100, "buy a car"));
// console.log(store.getState());
store.dispatch(createCustomer("jiya", "1242"));
console.log(store.getState());
