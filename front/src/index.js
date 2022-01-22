import 'materialize-css/dist/css/materialize.min.css';

import AmountOfConsumed from "./app/pages/AmountOfConsumed";

class App {
    #root = document.getElementById('root');

    render() {
        const root = this.#root;

        root.innerHTML =  AmountOfConsumed();
    }
}

const app = new App();
app.render();
