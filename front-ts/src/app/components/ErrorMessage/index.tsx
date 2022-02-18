const ErrorMessage = (error: { [s: string]: object }) => Object.values(error)
  .filter((value) => typeof value === 'string')
  .map((value) => (`
      <div class="alert alert-danger" role="alert">
        ${value}
      </div>
    `))
  .join('');

export default ErrorMessage;
