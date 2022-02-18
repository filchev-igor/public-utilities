import React, { useState } from 'react';
import {
  ADDRESS_UTILITIES,
} from '../../constants/settings';
import Navbar from '../../components/Navbar';

function Settings() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const hasDayMode = true;

  const switches = Object.keys(ADDRESS_UTILITIES).map((id) => {
    const value = id
      .slice(3)
      .split(/(?=[A-Z])/)
      .map((string) => string.toLowerCase())
      .join(' ');

    const utility = value[0].toUpperCase() + value.slice(1);

    return (
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id={id} />
        <label className="form-check-label" htmlFor={id}>{utility}</label>
      </div>
    );
  }).join('');

  return (
    <>
      <Navbar />

      <div className={`container-fluid ${!hasDayMode ? 'bg-night-mode' : ''}`}>
        <div className="row">
          <div className="col mt-4">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" value={name} id="firstName" placeholder="Name" />
              <label htmlFor="firstName">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" value={surname} id="surname" placeholder="Surname" autoComplete="off" />
              <label htmlFor="surname">Surname</label>
            </div>

            <div>
              <button className={`btn btn-outline-${hasDayMode ? 'secondary' : 'light'}`} type="button">Update name and surname</button>
            </div>

            <div className="form-floating my-3">
              <input type="email" className="form-control" id="email" value={email} placeholder="E-mail" autoComplete="off" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="currentPassword" value="" placeholder="Current password (required only for password and email change)" autoComplete="new-password" />
              <label htmlFor="currentPassword">Current password (required only for password and email change)</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" value="" placeholder="Password" autoComplete="new-password" />
              <label htmlFor="password">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="passwordRepeat" value="" placeholder="Repeat password" autoComplete="new-password" />
              <label htmlFor="passwordRepeat">Repeat password</label>
            </div>

            <div className="d-flex justify-content-between">
              <button className={`btn btn-outline-${hasDayMode ? 'secondary' : 'light'}`} type="button">Update email</button>

              <button className={`btn btn-outline-${hasDayMode ? 'secondary' : 'light'}`} type="button">Update password</button>
            </div>

            <table className="table table-hover border-dark my-3">
              <thead>
                <tr>
                  <th>Address in Vilnius</th>
                  <th>Utilities</th>
                </tr>
              </thead>

              <tbody />
            </table>

            {switches}

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="newAddressStreet" placeholder="New address (street)" autoComplete="off" />
              <label htmlFor="newAddress">New address (street)</label>
            </div>

            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="newAddressNumber" placeholder="New address (number)" autoComplete="off" />
              <label htmlFor="newAddress">New address (number)</label>
            </div>

            <button type="button" className="btn btn-success" onClick={handleAddNewAddress}>Add new address</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
