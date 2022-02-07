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

const PropertyCaroussel = ({ property }) => {
  return (
    <MDBCarousel
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={true}
      className="z-depth-1 carousselMain"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          {property && property.pictures[0] ? (
            <>
              <MDBView>
                <img
                  className="d-block w-100 carousselImg"
                  src={property.pictures[0]}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Light house</h3>
                <p>For Franck ADOUKO</p>
              </MDBCarouselCaption>
            </>
          ) : null}
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          {property && property.pictures[1] ? (
            <>
              <MDBView>
                <img
                  className="d-block w-100 carousselImg"
                  src={property.pictures[1]}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Light house</h3>
                <p>For Franck ADOUKO</p>
              </MDBCarouselCaption>
            </>
          ) : null}
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default PropertyCaroussel;
