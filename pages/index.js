import { MDBContainer } from "mdbreact";

import api from "../auth/axios";
import Caroussel from "../components/caroussel";
import Features from "../components/features";
import Layout from "../components/layout";
import PropertiesSection from "../components/propertiesSection";
import PropertiesVip from "../components/propertiesVip";

export default function Home({ propertiesVip, propertiesSection }) {
  return (
    <Layout>
      <MDBContainer>
        <Caroussel />
        <PropertiesVip properties={propertiesVip} />
        <PropertiesSection properties={propertiesSection} />
        <Features />
      </MDBContainer>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data: propertiesVip } = await api.get("/api/properties/vip");
  const { data } = await api.get("/api/properties/?limit=6");
  const propertiesSection = data.data;
  return {
    props: {
      propertiesVip,
      propertiesSection,
    },
  };
};
