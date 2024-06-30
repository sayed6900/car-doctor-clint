import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mt-5 pt-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 rounded-lg absolute right-3 border-8 border-white top-1/2 shadow-2xl"
        />
        </div>
        <div className='lg:w-1/2 p-2 mr-4'>
            <h2 className="text-2xl text-orange-600 font-bold">About Us</h2>
          <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          A leading car servicing center in Dhaka. Established in 2015, we have over 09 years of experience serving customers with all their automobile needs.  
          </p>
          <p>
          Our comprehensive service portfolio covers periodic maintenance like car wash services, oil change services, tune-up services, brake inspection services; engine and transmission services; and accident repair services - denting, painting, bodywork, windshield replacements, detailing, and more.
          </p>
          <button className="btn bg-orange-500 mt-4 text-white btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
