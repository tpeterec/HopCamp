import React, { useState } from "react";
import "./Host.css";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Host() {
<<<<<<< HEAD
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleOnClick = () => {
        const textarea = document.querySelector("textarea");
        console.log(textarea.value);
        setShowModal(false);
    };

    return (
        <div className="host-info-container">
            <div className="container-container">
                <div className="d-flex mb-3">
                    <div className="host-pic">
                    <img
                        alt="Avatar"
                        src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,h_80,w_80/v1475217800/profile/pdmfuoeafxiturx4dgrz.jpg"
                        className="img-circle"
                    />
                </div>
                <div className="host-info">
                    <div className="hosted-by">Hosted by John & Lesley B.</div>
                    <div className="since text-dark">Joined in October 2015</div>
                   
                </div>
                </div>
                 <button
                        className="btn btn-outline-dark"
                        onClick={handleButtonClick}
                        style={{borderRadius: '8px',
                            width: '140px',
                            height: '45px'
                        }}
                    >
                        Contact host
                    </button>
            </div>

            {/*modal*/}
            <div className="modal-container" style={{ overflow: "hidden" }}>
                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton></Modal.Header>
                    {/* <Button
                        variant="secondary"
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            hover: "dark grey",
                            width: '15px',
                            height: '15px'
                        }}
                        onClick={closeModal}
                        className="modal-close-button"
                    >
                        X
                    </Button> */}
                    <Modal.Body className="modal-body-contact">
                        <div className="ask">
                            Ask John & Lesley B. a question
                        </div>
                        <div className="message-body">
                            <div>Message the host</div>
                            <textarea rows="4" cols="50"></textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={handleOnClick}
                            className="modal-send-button"
                        >
                            Send message
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
=======
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    console.log("click");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOnClick = () => {
    const textarea = document.querySelector("textarea");
    console.log(textarea.value);
    setShowModal(false);
  };

  return (
    <div className="host-info-container">
      <div className="container-container">
        <div className="host-pic">
          <img
            alt="Avatar"
            src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,h_80,w_80/v1475217800/profile/pdmfuoeafxiturx4dgrz.jpg"
            className="img-circle"
          />
        </div>
        <div className="host-info">
          <div className="hosted-by">Hosted by John & Lesley B.</div>
          <div className="since">Joined in October 2015</div>
          <button className="contact-button" onClick={handleButtonClick}>
            Contact host
          </button>
        </div>
      </div>

      {/*modal*/}
      {/* <div className="modal-container" style={{ overflow: "hidden" }}> */}
        <Modal show={showModal} onHide={closeModal} backdrop="static" className="modal">
          <Button
            variant="secondary" onClick={closeModal} className="modal-close-button"
          >X
          </Button>
          <Modal.Body className="modal-body-contact">
            <div className="ask">Ask John & Lesley B. a question</div>
            <div className="message-body">
              <div>Message the host</div>
              <textarea rows="4" cols="50"></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary" onClick={handleOnClick} className="modal-send-button">
              Send message
            </Button>
          </Modal.Footer>
        </Modal>
      {/* </div> */}
    </div>
  );
>>>>>>> featurePhotoGallery
}

export default Host;
