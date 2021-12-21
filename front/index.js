class App {
    #root = document.getElementById('root');

    render() {
        this.#root.innerHTML = (`
            <button type='button'>Click me!</button>
        `);
    }
}

const app = new App();
app.render();