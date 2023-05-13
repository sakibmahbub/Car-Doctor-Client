import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img className="w-3/4 rounded-lg" src={person} alt="person" />
          <img
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white"
            src={parts}
            alt="parts"
          />
        </div>
        <div className="lg:w-1/2 space-y-7">
          <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] hover:bg-[#000000] border-none mr-6">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
