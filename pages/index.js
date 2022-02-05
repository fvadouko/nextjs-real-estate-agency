import { MDBContainer } from "mdbreact";
import Head from "next/head";
import Image from "next/image";
import api from "../auth/axios";
import Layout from "../components/layout";
import PropertiesVip from "../components/propertiesVip";
import styles from "../styles/Home.module.css";

export default function Home({ propertiesVip }) {
  return (
    <Layout>
      <MDBContainer>
        <PropertiesVip properties={propertiesVip} />
      </MDBContainer>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data: propertiesVip } = await api.get("/api/properties/vip");

  return {
    props: {
      propertiesVip,
    },
  };
};
