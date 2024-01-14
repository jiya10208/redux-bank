const host = "api.frankfurter.app";

const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
export default function accountReducer(state = accountInitialState, action) {
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

export function deposit(amount, currency) {
  if (currency === "INR") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    //api call
    //return action
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=INR`
    );
    const data = await res.json();
    const ans = data.rates.INR;

    dispatch({ type: "account/deposit", payload: ans });
  };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { purpose, amount } };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
