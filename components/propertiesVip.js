import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView,
} from "mdbreact";
import { priceFormatted } from "../helpers/helpers";

const PropertiesVip = ({ properties }) => {
  return (
    <>
      <h2 className="h2-responsive font-weight text-center my-4 globalColor">
        Sponsored Properties
      </h2>
      <MDBRow>
        {properties &&
          properties.map((property, index) => (
            <MDBCol md="4" lg="4" key={`property-${index}`}>
              <MDBView zoom>
                <img
                  src={property.pictures[0]}
                  alt={property.title}
                  className="globalImg"
                />
              </MDBView>
              <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText>
                  <strong> {priceFormatted(property.price)}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          ))}
      </MDBRow>
    </>
  );
};

export default PropertiesVip;
