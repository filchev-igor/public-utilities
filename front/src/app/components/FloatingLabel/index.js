const FloatingLabel = ([type = 'text', placeholder, value, id]) => (`
    <div class="form-floating mb-3">
        <input type=${type} class="form-control" id=${id} placeholder=${placeholder} value=${value}>
        <label for=${id}>${placeholder}</label>
    </div>
`);

export default FloatingLabel;
