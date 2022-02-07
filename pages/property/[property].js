import React from "react";
import api from "../../auth/axios";
import Layout from "../../components/layout";
import PropertyCaroussel from "../../components/propertyCaroussel";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView,
  MDBContainer,
  MDBIcon,
} from "mdbreact";
import DetailsProperty from "../../components/detailsProperty";
import VipProperties from "../../components/vipProperties";
import RelatedProperty from "../../components/relatedProperty";

const Property = ({ detailsProperty, propertiesVip, propertiesRelated }) => {
  const styles = {
    fontSize: 15,
  };

  return (
    <Layout>
      <MDBContainer>
        <MDBCard>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="9" lg="9">
                <PropertyCaroussel property={detailsProperty} />
                <DetailsProperty property={detailsProperty} />
              </MDBCol>
              <MDBCol md="3" lg="3">
                <h4 className="mt-5">Contact-Us</h4>
                <div style={styles}>
                  <MDBIcon icon="calculator" className="mr-1" />
                  10 New York
                </div>
                <div style={styles}>
                  <MDBIcon icon="phone-alt" className="mr-1" />
                  +1 25-522-555
                </div>
                <div style={styles}>
                  <MDBIcon icon="mobile-alt" className="mr-1" />
                  +1 25-522-566
                </div>
                <div style={styles}>
                  <MDBIcon icon="envelope" className="mr-1" />
                  admin@gmail.com
                </div>

                <h3 className="mt-4 mb-3">Sponsored Property</h3>
                <VipProperties properties={propertiesVip} />
              </MDBCol>
            </MDBRow>
            <hr className="my-4" />
            {propertiesRelated && propertiesRelated.length !== 0 && (
              <MDBRow>
                <MDBCol>
                  <h5 className="mb-5">Related Properties</h5>
                  <RelatedProperty properties={propertiesRelated} />
                </MDBCol>
              </MDBRow>
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </Layout>
  );
};

export default Property;

export const getStaticPaths = async () => {
  const { data } = await api.get("/api/properties?limit=100");
  const properties = data.data;
  const paths = properties.map((property) => ({
    params: { property: property.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { property } = params;
  const { data: detailsProperty } = await api.get(`/api/property/${property}`);
  const { data: propertiesVip } = await api.get(`/api/properties/vip`);
  const { data: propertiesRelated } = await api.get(
    `/api/properties/related/${detailsProperty._id}`
  );

  return {
    props: {
      detailsProperty,
      propertiesVip,
      propertiesRelated,
    },
  };
};
