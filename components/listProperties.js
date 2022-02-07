import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
} from "mdbreact";
import { priceFormatted } from "../helpers/helpers";
import Link from "next/link";

const ListProperties = ({ properties }) => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Available Properties
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        {properties &&
          properties.map((property, index) => (
            <>
              <MDBRow key={`property-${index}`}>
                <MDBCol lg="5" xl="4">
                  <MDBView
                    hover
                    className="rounded z-depth-1-half mb-lg-0 mb-4"
                  >
                    <img
                      className="img-fluid"
                      src={property.pictures[0]}
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>{property.title}</strong>-
                    <strong>{priceFormatted(property.price)}</strong>
                  </h3>
                  <p className="dark-grey-text">
                    {property.description.slice(0, 200)}
                  </p>
                  <p>
                    by{" "}
                    <a href="#!" className="font-weight-bold globalColor">
                      Franck ADOUKO - Developper React/React-Native/NextJs/Node
                    </a>
                    , 19/04/2018
                  </p>
                  <p className="globalColor">
                    <MDBIcon icon="city" className="mr-1" />
                    {property.city}
                  </p>
                  <Link
                    href="/property/[property]"
                    as={`/property/${property.slug}`}
                    passHref
                  >
                    <MDBBtn color="primary" size="md">
                      Read More
                    </MDBBtn>
                  </Link>
                </MDBCol>
              </MDBRow>
              <hr className="my-5" />
            </>
          ))}
      </MDBCardBody>
    </MDBCard>
  );
};

export default ListProperties;
