import "./store";
import CreateCustomer from "./features/customers/CreateCustomer";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import AccountOperations from "./features/accounts/AccountOperations";
import Customer from "./features/customers/Customer";
import store from "./store";
import { useSelector } from "react-redux";

store.dispatch({ type: "account/deposit", payload: 343 });
store.dispatch({ type: "account/deposit", payload: 343 });
store.dispatch({ type: "account/deposit", payload: 343 });
store.dispatch({ type: "account/deposit", payload: 343 });
store.dispatch({ type: "account/deposit", payload: 343 });
console.log(store.getState());

function App() {
  const fullname = useSelector((store) => store.customer.fullname);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullname ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
