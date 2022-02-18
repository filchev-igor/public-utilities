import React, { useState } from 'react';
import {
  ADDRESS_UTILITIES,
} from '../../constants/settings';
import Navbar from '../../components/Navbar';
import FloatingLabel from '../../components/FloatingLabel';

const Settings = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
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
              <FloatingLabel onChange={setName} placeholder="Name" value={name} />
            </div>

            <div className="form-floating mb-3">
              <FloatingLabel onChange={setSurname} placeholder="Surname" value={surname} />
            </div>

            <div>
              <button className={`btn btn-outline-${hasDayMode ? 'secondary' : 'light'}`} type="button">Update name and surname</button>
            </div>

            <div className="form-floating my-3">
              <FloatingLabel onChange={setEmail} placeholder="E-mail" value={email} type="email" />
            </div>

            <div className="form-floating mb-3">
              <FloatingLabel onChange={setCurrentPassword} placeholder="Current password (required for the change of e-mail only)" value={currentPassword} type="password" isCreatingAccount />
            </div>

            <div className="form-floating mb-3">
              <FloatingLabel onChange={setPassword} placeholder="Password" value={password} type="password" isCreatingAccount />
            </div>

            <div className="form-floating mb-3">
              <FloatingLabel onChange={setPasswordRepeat} placeholder="Repeat password" value={passwordRepeat} type="password" isCreatingAccount />
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
            </table>

            <div className="form-floating mb-3">
              addresses

              {switches}

              <button type="button" className="btn btn-success">Add new address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
