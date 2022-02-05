import React from "react";

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

const Caroussel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1 carousselMain"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 carousselImg"
              src="https://res.cloudinary.com/beloved/image/upload/v1593635578/Agency/z23ok1wvc3sdkenitunx.jpg"
              alt="First slide"
            />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light house</h3>
            <p>For Franck ADOUKO</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 carousselImg"
              src="https://res.cloudinary.com/beloved/image/upload/v1594004282/Assets/asset_eocidz.jpg"
              alt="Second slide"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong house</h3>
            <p>For Franck ADOUKO</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 carousselImg"
              src="https://res.cloudinary.com/beloved/image/upload/v1594004148/Assets/Apt-Premium2-4-HD-15_m3ztht.jpg
              "
              alt="Third slide"
            />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight house</h3>
            <p>For Franck ADOUKO</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Caroussel;
