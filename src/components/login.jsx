/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Iniciar Sesion</h3>

        <div className="form-group">
          <label>Correo Electronico:</label>
          <input type="email" className="form-control" placeholder="Ingrese su correo" />
        </div>

        <div className="form-group">
          <label>Clave:</label>
          <input type="password" className="form-control" placeholder="Ingrese su clave" />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
        <p className="forgot-password text-right">
          <a href="sign-up">Solicitar Acceso</a>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
