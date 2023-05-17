import React, {useState} from 'react';
import './Photo_gallery.css'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const pic1_URL = "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 1120w"
const pic11_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg"
const pic2_URL = "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 1120w"
const pic22_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg"
const pic3_URL = "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 1120w"
const pic33_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg"
const pic4_URL = "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 1120w"
const pic44_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg"
const pic5_URL = "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 1120w"
const pic55_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg"
const pic66_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_80/v1476482090/campground-photos/pyjxig2abgalkhh6kpdm.jpg"
const pic77_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_80/v1472247288/campground-photos/xtuutkiep3ekc3t1n9wn.jpg"
const pic88_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_80/v1445485060/campground-photos/p1gizt29wlal2thvnlt2.jpg"
const pic99_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_80/v1476483277/campground-photos/fuhi5sbqwy2otsylq9qd.jpg"
const pic1010_URL= "https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_80/v1470530386/campground-photos/osu51frsvlodi52yjp41.jpg"





function Photo_gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const photoGallery = [pic11_URL, pic22_URL, pic33_URL, pic44_URL, pic55_URL, pic66_URL, pic77_URL, pic88_URL, pic99_URL, pic1010_URL]

  const openModal = (photoURL) => {
    setSelectedPhoto(photoURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto('');
  };

  return (
    <div className="container" style={{ maxWidth: '70vw'}}>
      <div className="display" >
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div overflow="hidden">
          <div className="photo-gallery-left" style={{overflow:'hidden', marginLeft: '-28px'}}>
            <div className="large photo">
              <button className="photo-gallery-button" onClick={() => openModal(photoGallery)}>
                <img
                  alt=""
                  sizes="45vw"
                  srcSet={pic1_URL}
                  decoding="async"
                  data-nimg="fill"
                  className="photo-gallery-img"
                  // style={{ maxWidth: '100%', maxHeight: '100%' }}
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
                  <button className="photo-gallery-button" onClick={() => openModal(photoGallery)}>
                    <img alt="" 
                    sizes="45vw"
                    srcSet={pic2_URL}
                    decoding="async"
                    data-nimg="fill"
                    className="photo-gallery-img"
                    // style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </button>
                </div>
              </div>
              <div className="col-md-6 justify-content-center justify-content-md-between">
               <div className="photo-gallery-item" style={{ display: 'flex', justifyContent: 'center', marginRight: '-18px' }}>
                  <button className="photo-gallery-button" onClick={() => openModal(photoGallery)}>
                   <img
                   alt=""
                   sizes="45vw"
                    srcSet={pic3_URL}
                    decoding="async"
                    data-nimg="fill"
                    className="photo-gallery-img"
                    // style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                 </button>
                </div>
              </div>
          </div>
              <div className="row">
                <div className="col-md-6 justify-content-center justify-content-md-between">
                  <div className="photo-gallery-item" style={{ display: 'flex', justifyContent: 'center', marginRight:'19px' }}>
                    <button className="photo-gallery-button" onClick={() => openModal(photoGallery)}>
                      <img
                      alt=""
                      sizes="45vw"
                      srcSet={pic4_URL}
                      decoding="async"
                      data-nimg="fill"
                      className="photo-gallery-img"
                      />
                    </button>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center justify-content-md-between">
                  <div className="photo-gallery-item" style={{ display: 'flex', justifyContent: 'center', marginRight: '28px' }}>
                    <button className="photo-gallery-button" onClick={() => openModal(photoGallery)}>
                      <img
                      alt=""
                      sizes="45vw"
                      srcSet={pic5_URL}
                      src={pic55_URL}
                      decoding="async"
                      data-nimg="fill"
                      className="photo-gallery-img"
                      // style={{ maxWidth: '50vw', maxHeight: '100%' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

       {/*modal*/}
       <Modal show={showModal} onHide={closeModal} className="modal-dialog modal-fullscreen">
         <Modal.Body className="modal-body-photo-gallery">
           <div className="photo-gallery-grid">
             {photoGallery.map((photoURL, index) => (
               <img
                 key={index}
                 src={photoURL}
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

export default Photo_gallery;