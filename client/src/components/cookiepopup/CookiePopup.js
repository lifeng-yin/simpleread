import "./CookiePopup.scss";

const CookiePopup = () => {
  return (
    <div id="popup">
      <div>
        <h2>Cookies</h2>
        <p>
          SimpleRead uses cookies to keep track of your accounts and signins.{" "}
        </p>
        <button onClick = {() => {
            document.getElementById('popup').style.display = 'none'
        }}>Ok</button>
      </div>
    </div>
  );
};
export default CookiePopup;
