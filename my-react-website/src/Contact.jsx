import React, { useState } from 'react';

const Contact = () =>{

  const initialState = {
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  };
  const [state, setstate] = useState(initialState);

  const InputEvent = (event) => {
    const{name, value} = event.target;
    setstate( (preVal) => {
      return{
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${state.fullname}. My mobile number is ${state.phone}. Here is what I want to say ${state.msg}`
    );
  };

  return(
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={ formSubmit }>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="fullname"
                  value={state.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your full name" 
                  required 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone No</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="phone"
                  value={state.phone}
                  onChange={InputEvent}
                  placeholder="Phone Number" 
                  required 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="email"
                  value={state.email}
                  onChange={InputEvent}
                  placeholder="name@example.com" 
                  required 
                />
              </div>


              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  name="msg"
                  value={state.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary " type="submit">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
