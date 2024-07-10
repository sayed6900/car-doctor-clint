import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const services = useLoaderData();
  const { title,_id,  price,img } = services;

    const handleCheckOut = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            CustomerName: name,
            email,
            img,
            price:price,
            date:date,
            service:title,
            service_id:_id,
        }
        console.log(booking)
        fetch('http://localhost:5000/checkout',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('Booking done Successfully')
            }
        })
    }
  return (
    <div>
      
      <div className="hero bg-base-200 min-h-screen">
      
        <div className="hero-content ">
        
          <div className="card bg-base-100 w-full  ">
          <h2 className="text-center font-bold text-3xl mt-8">Checkout Services :<span className="text-blue-700"> {title}</span> </h2>
            <form onSubmit={handleCheckOut} className="card-body">
             {/* Order Div */}
             <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="service name"
                  className="input input-bordered"
                  required
                />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={'$'+ price}
                  className="input input-bordered"
                  required
                />
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date please"
                  className="input input-bordered"
                  required
                />
              </div>
             </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Confirm Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
