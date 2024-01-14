import { useSelector } from "react-redux";

function Customer() {
  const fullname = useSelector((store) => store.customer.fullname);

  return <h2>👋 Welcome, {fullname}</h2>;
}

export default Customer;
