import "./Header.scss";
import Logo from "../assets/Vector.svg";
import { Fragment, useEffect, useState } from "react";
import Modal from "./Modal";
import FormInput from "./FormInput";
import { logoutUser, registerUser, login } from "../store/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import ProfilePhoto from "../assets/menu_profile_holder.png";
import ProfileModalPicture from "../assets/profile-holder.png";
import { getUserInfo } from "../store/actions/UserActions";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const [shown, setIsShown] = useState(false);
  const [loginFormShown, setLoginFormShown] = useState(false);
  const [profileShown, setIsProfileShown] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [passwordLoginForm, setPasswordLoginForm] = useState("");
  const [emailLoginForm, setEmailLoginForm] = useState("");

  const user = useSelector((state) => state.user.user);

  const showModal = () => {
    setIsShown(true);
  };

  function showModal2() {
    setLoginFormShown(true);
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
    navigate("/");
  };

  const loginUser = (event) => {
    event.preventDefault();
    const cred = {
      email: emailLoginForm,
      password: passwordLoginForm,
    };

    dispatch(login(cred));
    setLoginFormShown(false);
    navigate("/");
  };

  const logOut = () => {
    setIsProfileShown(false);
    dispatch(logoutUser());
    navigate("/");
  };

  const showProfileInfo = () => {
    dispatch(getUserInfo());
    setIsProfileShown(true);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" className="header__logo-img"></img>
        <p className="header__logo-text">FlowrSpot</p>
      </div>
      <button className="header__btn">Flowers</button>
      <button className="header__btn">Latest sightings</button>
      <button className="header__btn">Favourites</button>
      {!isLoggedIn ? (
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
        <button className="profile-info" onClick={showProfileInfo}>
          <p className="profile-info__text">
            {user?.first_name} {user?.last_name}
          </p>
          <img src={ProfilePhoto} alt="profilePhoto" />
        </button>
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
        shown={loginFormShown}
        onClose={() => setLoginFormShown(false)}
        heading="Welcome Back!"
      >
        <form className="form" onSubmit={loginUser}>
          <FormInput
            label="Email address"
            type="email"
            id="email"
            onChange={(e) => setEmailLoginForm(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPasswordLoginForm(e.target.value)}
          />
          <div className="div">
            <button className="div--btn">Login to your Account</button>
          </div>
        </form>
      </Modal>

      <Modal
        shown={profileShown}
        onClose={() => setIsProfileShown(false)}
        heading=""
      >
        <div className="profile-modal">
          <div className="profile-modal__user">
            <img
              className="profile-modal__img"
              src={ProfileModalPicture}
              alt="slika"
            ></img>
            <p className="profile-modal__user-text">Anja Meseldzic</p>
          </div>
          <div className="profile-modal__info">
            <label className="profile-modal__label">First name</label>
            <label className="profile-modal__text">{user?.first_name}</label>

            <label className="profile-modal__label">Last name</label>
            <label className="profile-modal__text">{user?.last_name}</label>

            <label className="profile-modal__label">Date of birth</label>
            <label className="profile-modal__text">02/02/1998</label>

            <label className="profile-modal__label">Email Address</label>
            <label className="profile-modal__text">pera@gmail.com</label>
          </div>
          <button className="profile-modal__btn" onClick={logOut}>
            Logout
          </button>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
