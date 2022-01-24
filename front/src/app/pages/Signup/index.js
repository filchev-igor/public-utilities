import { v4 as uuidv4 } from 'uuid';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FloatingLabel from '../../components/FloatingLabel';
import ErrorMessage from '../../components/ErrorMessage';

class Signup {
  #email = '';
  #password = '';
  #passwordRepeat = '';
  #emailId = uuidv4();
  #passwordId = uuidv4();
  #passwordRepeatId = uuidv4();
  #signupButtonId = uuidv4();
  #root = document.getElementById('root');
  #error = { };

  constructor () {
    this.#root.innerHTML = this.#render();
    this.#componentMount();
  }

  #componentMount = () => {
      const emailInput = document.getElementById(this.#emailId);
      const passwordInput = document.getElementById(this.#passwordId);
      const passwordRepeatInput = document.getElementById(this.#passwordRepeatId);

      const loginButton = document.getElementById(this.#signupButtonId);

      const auth = getAuth();

      emailInput.addEventListener('input', (e) => {
        e.preventDefault();

        this.#email = e.target.value;
      });

      passwordInput.addEventListener('input', (e) => {
        e.preventDefault();

        this.#password = e.target.value;
      });

      passwordRepeatInput.addEventListener('input', (e) => {
        e.preventDefault();

        this.#passwordRepeat = e.target.value;
      });

      loginButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (!this.#email.length || !this.#password.length)
          return;

        if (!this.#passwordRepeat.length && this.#password !== this.#passwordRepeat)
          return;

        createUserWithEmailAndPassword(auth, this.#email, this.#password)
        .then(() => {
          history.pushState({ path: '' }, '', `/`);
          location.replace(`/`);
        })
        .catch((error) => {
          this.#error = error;

          this.#root.innerHTML = this.#render();
        });
      });
  }

  #render = () => {
    return (`
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto text-center">
            ${FloatingLabel(['email', 'Email', this.#email, this.#emailId])}
            
            ${FloatingLabel(['password', 'Password', this.#password, this.#passwordId])}
            
            ${FloatingLabel(['password', 'Repeat password', this.#passwordRepeat, this.#passwordRepeatId])}
            
            <button type="button" id=${this.#signupButtonId} class="btn btn-outline-primary">Sign up</button>
            
            <a href="/login" class="link-info">I have account</a>
            
            ${this.#error?.code ? ErrorMessage(this.#error) : ''}
          </div>
        </div>
      </div>
    `);
  }
}

export default Signup;
