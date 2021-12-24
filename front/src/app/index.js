import Bills from "./components/Bills";

class App {
    #root = document.getElementById('root');

    render() {
        const root = this.#root;

        /*
        Example code. Can be erased
         */
        const billsPage = Bills();
        const button = (`<button type='button'>Click me!</button>`);

        let i = 0;

        const interval = setInterval(() => {
            if (i)
                root.innerHTML = billsPage;
            else
                root.innerHTML = button;

            i++;

            if (i > 1)
                i = 0;

        }, 1_000);

        setTimeout(() => {
            clearInterval(interval);
        }, 10_000);
    }
}

const app = new App();
app.render();