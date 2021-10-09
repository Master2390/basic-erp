/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Solicitar Acceso</h3>

        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" className="form-control" placeholder="Ingrese su nombre" />
        </div>

        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" className="form-control" placeholder="Ingrese su apellido" />
        </div>

        <div className="form-group">
          <label>Correo Electronico:</label>
          <input type="email" className="form-control" placeholder="Ingrese su correo" />
        </div>

        <div className="form-group">
          <label>Clave:</label>
          <input type="password" className="form-control" placeholder="Ingrese una clave" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Solicitar
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    );
  }
}
