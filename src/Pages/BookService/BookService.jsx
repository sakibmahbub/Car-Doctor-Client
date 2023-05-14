import { useLoaderData } from "react-router-dom";

const BookService = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;

  const handleBooking = (event) => {
    event.preventDefault();
  };
  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold">Book Service: {title}</h2>
      <div className="card-body">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="text"
                placeholder="amount"
                defaultValue={"$ " + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Confirm Booking"
              className="btn btn-block bg-[#FF3811]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
