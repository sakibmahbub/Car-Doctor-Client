import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title } = service;
  return (
    <div>
      <h2>Checkout for: {title}</h2>
    </div>
  );
};

export default Checkout;
