import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 500 });
// console.log(store.getState());

// store.dispatch(deposit(300));
// console.log(store.getState());
// store.dispatch(withdraw(100));
// console.log(store.getState());
// store.dispatch(requestLoan(100, "buy a car"));
// console.log(store.getState());
// store.dispatch(createCustomer("jiya", "1242"));
// console.log(store.getState());
