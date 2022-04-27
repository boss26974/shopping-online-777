import React from "react";
import "../assets/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faKey,
  faPhone,
  faStore,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <div className="container">
      <div className="item-center">
        <div className="register-box">
          <form class="box has-background-info-light">
            <h1 class="title is-size-3 has-text-centered has-text-info-dark">
              <span style={{ color: "#FF5733" }}>
                <FontAwesomeIcon icon={faStore} size="xs" />
              </span>
              &nbsp;Register
            </h1>
            <div class="field">
              <label class="label has-text-info-dark">
                Firstname&nbsp;
                <FontAwesomeIcon icon={faUser} size="sm" />
              </label>
              <div class="control">
                <input class="input" type="text" placeholder="Will" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-info-dark">
                Lastname&nbsp;
                <FontAwesomeIcon icon={faUser} size="sm" />
              </label>
              <div class="control">
                <input class="input" type="text" placeholder="Smith" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-info-dark">
                Phone Number&nbsp;
                <FontAwesomeIcon icon={faPhone} size="sm" />
              </label>
              <div class="control">
                <input class="input" type="text" placeholder="0999999999" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-info-dark">
                Email&nbsp;
                <FontAwesomeIcon icon={faEnvelope} size="sm" />
              </label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-info-dark">
                Password&nbsp;
                <FontAwesomeIcon icon={faKey} size="sm" />
              </label>
              <div class="control">
                <input class="input" type="password" placeholder="********" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-info-dark">
                Confirm Password&nbsp;
                <FontAwesomeIcon icon={faKey} size="sm" />
              </label>
              <div class="control">
                <input class="input" type="password" placeholder="********" />
              </div>
            </div>
            <div class="field">
              <label class="checkbox">
                <input type="checkbox" />
                &nbsp;I agree to the
                <a href="/register"> terms and conditions</a>
              </label>
            </div>
            <span className="item-center">
              <button class="button is-info is-normal is-fullwidth is-responsive">
                Sign up&nbsp;
                <FontAwesomeIcon icon={faCartShopping} size="xs" />
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
