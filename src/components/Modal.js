import "./Modal.scss";
import FormInput from "./FormInput";

const Modal = ({ shown, onClose, heading, children}) => {
  return shown ? (
    <div
      className="modal"
      id="modal"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="heading-2">{heading}</h2>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
