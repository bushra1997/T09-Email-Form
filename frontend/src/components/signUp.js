import React, { useState, useRef } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./signUp.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const history = useHistory();

  const signUpButton = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/signup`, {
        name,
        age,
        mobile,
        email,
        paymentType,
      })
      .then((result) => {
        history.push("/login");
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div>
        <h1>Sign up</h1>
        <br></br>
        <input
          type="text"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          required
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="number"
          required
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button ref={target} onClick={() => setShow(!show)}>
          Payment Type
        </button>
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div {...props}>
            <div className="radio-button">
              <input
                type="radio"
                value="cash on delivery"
                name="user_role"
                onChange={(e) => {
                  setPaymentType(e.target.value);
                }}
              />
              <label for="html">cash on delivery</label>
              <input
                type="radio"
                value="using credit card"
                name="user_role"
                onChange={(e) => {
                  setPaymentType(e.target.value);
                }}
              />
              <label for="html">using credit card</label>
            </div>
          </div>
        )}
        <div>
          <button className="signup" onClick={signUpButton}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
