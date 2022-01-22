import 'materialize-css/dist/css/materialize.min.css';

import Bills from "./app/components/Bills";
import AmountOfConsumed from "./app/components/AmountOfConsumed";

class App {
    #root = document.getElementById('root');

    render() {
        const root = this.#root;

        const button = (`<button type='button'>Click me!</button>`);

        let i = 0;

        const interval = setInterval(() => {
            if (i)
                root.innerHTML = Bills();
            else
                root.innerHTML = button;

            i++;

            if (i > 1)
                i = 0;

        }, 1_000);

        setTimeout(() => {
            clearInterval(interval);

             root.innerHTML =  AmountOfConsumed();
        }, 2_000);
    }
}

const app = new App();
app.render();
