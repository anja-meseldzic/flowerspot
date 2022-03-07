import "./Header.scss";
import Logo from "../assets/Vector.svg";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import FormInput from "./FormInput";
import { logoutUser, registerUser, login } from "../store/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.token);

  const [shown, setIsShown] = useState(false);
  const [shown2, setIsShown2] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [password1, setPassword1] = useState("");
  const [email1, setEmail1] = useState("");

  const showModal = () => {
    setIsShown(true);
  };

  function showModal2() {
    setIsShown2(true);
  }

  const register = (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
      first_name: name,
      last_name: surname,
      date_of_birth: date,
    };

    dispatch(registerUser(user));
    setIsShown(false);
  };

  const loginUser = (event) => {
    const cred = {
      email: email1,
      password: password1,
    };
    console.log(cred);

    dispatch(login(cred));
    setIsShown2(false);
  };

  const logOut = (event) => {
    dispatch(logoutUser());
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" className="header__logo-img"></img>
        <p className="header__logo-text">FlowrSpot</p>
      </div>
      <button className="header__btn">Flowers</button>
      <button className="header__btn">Latest sightings</button>
      <button className="header__btn">Favourites</button>
      {localStorage.getItem("token") === null ? (
        <Fragment>
          <button
            className="header__btn header__btn--login"
            onClick={showModal2}
          >
            Login
          </button>
          <button className="header__btn header__btn--new" onClick={showModal}>
            New Account
          </button>
        </Fragment>
      ) : (
        <div>
          <button className="header__btn header__btn--new" onClick={logOut}>Log out</button>
        </div>
      )}
      <Modal
        onClose={() => setIsShown(false)}
        shown={shown}
        heading="Create an Account"
      >
        <form className="form" onSubmit={register}>
          <div className="first-row">
            <FormInput
              label="First name"
              id="name"
              type="text"
              className="first-row-item"
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              label="Last name"
              id="surname"
              type="text"
              className="first-row-item"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <FormInput
            label="Date of birth"
            type="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <FormInput
            label="Email address"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="div">
            <button className="div--btn">Create Account</button>
          </div>
        </form>
      </Modal>

      <Modal
        shown={shown2}
        onClose={() => setIsShown2(false)}
        heading="Welcome Back!"
      >
        <form className="form" onSubmit={loginUser}>
          <FormInput
            label="Email address"
            type="email"
            id="email"
            onChange={(e) => setEmail1(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword1(e.target.value)}
          />
          <div className="div">
            <button className="div--btn">Login to your Account</button>
          </div>
        </form>
      </Modal>
    </header>
  );
}

export default Header;
