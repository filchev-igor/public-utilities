const FloatingLabel = ([type = 'text', placeholder, value, id, isCreatingAccount = false]) => (`
    <div class="form-floating mb-3">
        <input ${isCreatingAccount ? 'autocomplete="new-password"' : ''} type=${type} class="form-control" id=${id} placeholder=${placeholder} value=${value}>
        <label for=${id}>${placeholder}</label>
    </div>
`);

export default FloatingLabel;
