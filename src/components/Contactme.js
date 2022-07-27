import '../styles/App.scss';
function Contactme() {
  return (
    <>
      <div className="container">
        <form
          className="form"
          // action="https://formspree.io/f/mleznvoz"
          method="post"
        >
          <label className="label" for="name">
            Full Name <span className="asterisk">*</span>
          </label>
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre..."
            required=""
          />
          <fieldset className="desktop-version">
            <div>
              <label className="label" for="email">
                Email <span className="asterisk">*</span>
              </label>
              <input
                className="input"
                id="email"
                name="email"
                type="text"
                placeholder="nombreapellidos@mail.com"
                required=""
              />
            </div>
            <div>
              <label className="label" for="phone">
                Number Phone
              </label>
              <input
                className="input"
                id="phone"
                name="phone"
                type="text"
                placeholder="Ej. 123456789"
              />
            </div>
          </fieldset>
          <label className="label" for="sms">
            Menssage <span className="asterisk">*</span>
          </label>
          <textarea
            className="input"
            id="sms"
            name="sms"
            rows="6"
            type="text"
            placeholder="Hello,"
            required=""
          ></textarea>

          <div className="submit-container">
            <input className="submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
export default Contactme;
