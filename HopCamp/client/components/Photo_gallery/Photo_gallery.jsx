import React, { useState, useEffect } from 'react';
import './Photo_gallery.css';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PhotoGallery() {
 const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [photoGallery, setPhotoGallery] = useState([]);
  console.log(photoGallery)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/photogallery/");
        if (response.ok) {
          const data = await response.json();
          setPhotoGallery(data);
          console.log(data)
        } else {
          throw new Error('Request Failed');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto('');
  };

  if (photoGallery.length === 0) {
    return <div>Loading...</div>;
  } ///without this the page will not load properly///



  return (
    <div className="container" style={{ maxWidth: '70vw' }}>
      <div className="display">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div overflow="hidden">
              <div className="photo-gallery-left" style={{ overflow: 'hidden', marginLeft: '-25px' }}>
                <div className="large photo">
                  <button className="photo-gallery-button" onClick={() => openModal(photoGallery[0])}>
                    <img
                      alt=""
                      sizes="45vw"
                      src={photoGallery[0].url} 
                      decoding="async"
                      data-nimg="fill"
                      className="photo-gallery-img"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="photo-gallery-square" style={{ maxWidth: '50vw', overflow: 'hidden', marginLeft: '-18px' }}>
              <div className="row">
                <div className="col-sm-6 mb-2 d-flex justify-content-center justify-content-md-between">
                  <div className="photo-gallery-item" style={{ display: 'flex', justifyContent: 'center', marginRight: '-25px' }}>
                    <button className="photo-gallery-button" onClick={() => openModal(photoGallery[2])}>
                      <img
                        alt=""
                        sizes="45vw"
                        src={photoGallery[1].url} 
                        decoding="async"
                        data-nimg="fill"
                        className="photo-gallery-img"
                      />
                    </button>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center justify-content-md-between">
                  <div className="photo-gallery-item" style={{ display: 'flex', justifyContent: 'center', marginRight: '-18px' }}>
                    <button className="photo-gallery-button" onClick={() => openModal(photoGallery[4])}>
                      <img
                        alt=""
                        sizes="45vw"
                        src={photoGallery[2].url} 
                        decoding="async"
                        data-nimg="fill"
                        className="photo-gallery-img"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 justify-content-center justify-content-md-between">
                  <div className="photo-gallery-item" style={{ display: 'flex', justifyContent: 'center', marginRight: '19px' }}>
                    <button className="photo-gallery-button" onClick={() => openModal(photoGallery[6])}>
                      <img
                        alt=""
                        sizes="45vw"
                        src={photoGallery[3].url} 
                        decoding="async"
                        data-nimg="fill"
                        className="photo-gallery-img"
                      />
                    </button>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center justify-content-md-between">
                  <div className="photo-gallery-item" style={{ display: 'flex', justifyContent: 'center', marginRight: '28px' }}>
                    <button className="photo-gallery-button" onClick={() => openModal(photoGallery[8])}>
                      <img
                        alt=""
                        sizes="45vw"
                        src={photoGallery[4].url} 
                        decoding="async"
                        data-nimg="fill"
                        className="photo-gallery-img"
                      />
                    </button>
                    <button className="morePhotos" onClick={() => openModal(photoGallery)}>View 10 Photos</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

         {/*modal*/}
          <Modal show={showModal} onHide={closeModal} className="modal-fullscreen">
            <Modal.Body className="modal-body-photo-gallery">
              <div className="photo-gallery-grid">
                {photoGallery.map((photoGallery, index) => (
                  <img
                    key={index}
                    src={photoGallery.url}
                    alt=""
                    className="modal-photo"
                  />
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal} className="modal-close-button">
                &lt; {/* The arrow symbol */}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;