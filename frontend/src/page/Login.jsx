import React from "react";
import "../assets/Loing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faKey,
  faStore,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="container">
      <div className="item-center">
        <div className="login-box">
          <form class="box has-background-info-light">
            <h1 class="title is-size-3 has-text-centered has-text-info-dark">
              <span style={{ color: "#FF5733" }}>
                <FontAwesomeIcon icon={faStore} size="xs" />
              </span>
              &nbsp;Login
            </h1>
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
              <label class="checkbox has-text-primary-dark">
                <input type="checkbox" />
                &nbsp;Remember me
              </label>
            </div>
            <span className="item-center">
              <button class="button is-info is-normal is-fullwidth is-responsive">
                Sign in&nbsp;
                <FontAwesomeIcon icon={faCartShopping} size="xs" />
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
