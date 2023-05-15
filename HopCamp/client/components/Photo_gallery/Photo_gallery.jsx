import React from 'react';
import './Photo_gallery.css'
import 'bootstrap/dist/css/bootstrap.css';

function Photo_gallery() {
  return (
    <div className="d-flex p-4 gap-3">      
        {/* <img src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg" alt="big-photo1" /> */}
        <img
       alt=""
         sizes="45vw"
         srcSet="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 1120w"
         src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg"
         decoding="async"
         data-nimg="fill"
         className="photo-gallery-img"
       />
      <div>
      <div className="row b-3">
        <div className="col mb-2">
        <img
       alt=""
         sizes="25vw,"
         srcSet="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg 1120w"
         src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1467751641/campground-photos/shu8s1oyjqjrgsmcc6gm.jpg"
         decoding="async"
         data-nimg="fill"
         className="photo-gallery-img"
       />
        </div>
        <div className="col mt-2">
        <img
       alt=""
         sizes="25vw"
         srcSet="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg 1120w"
         src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg"
         decoding="async"
         data-nimg="fill"
         className="photo-gallery-img"
       />
        </div>
      </div>
    </div>
        <div className="row b-0, p-0">
        <div className="col mb-2">
        <img
       alt=""
         sizes="25vw"
         srcSet="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg 1120w"
         src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1447142502/campground-photos/waaje5sol4bzjaellxgp.jpg"
         decoding="async"
         data-nimg="fill"
         className="photo-gallery-img"
       />
        </div>
        <div className="col mt-2">
        <img
       alt=""
         sizes="25vw"
         srcSet="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg 1120w"
         src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1445485065/campground-photos/p4mfmzsuapsb8hqs7wg2.jpg"
         decoding="async"
         data-nimg="fill"
         className="photo-gallery-img"
       />
        </div>
        </div>
      </div>

  );
}

export default Photo_gallery;

// import React from 'react';
// import './Photo_gallery.css'
// import 'bootstrap/dist/css/bootstrap.css';

// function Photo_gallery() {
//   return (
//     <div className="photo-gallery">
//       <img
//         alt=""
//         sizes="45vw"
//         srcSet="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 256w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_384,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 384w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 550w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_740,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 740w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 950w, https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg 1120w"
//         src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg"
//         decoding="async"
//         data-nimg="fill"
//         className="photo-gallery-img"
//       />
//       <div className="photo-gallery-grid">
//         <img src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg" alt="photo1" className="photo-gallery-grid-item" />
//         <img src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg" alt="photo2" className="photo-gallery-grid-item" />
//         <img src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg" alt="photo3" className="photo-gallery-grid-item" />
//         <img src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_120,q_60/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg" alt="photo4" className="photo-gallery-grid-item" />
//       </div>
//     </div>
//   );
// }

// export default Photo_gallery;