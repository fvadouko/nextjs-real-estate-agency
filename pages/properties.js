import { MDBContainer } from "mdbreact";
import Head from "next/head";
import Image from "next/image";
import api from "../auth/axios";
import Caroussel from "../components/caroussel";
import Features from "../components/features";
import Layout from "../components/layout";
import ListProperties from "../components/listProperties";
import PropertiesSection from "../components/propertiesSection";
import PropertiesVip from "../components/propertiesVip";
import styles from "../styles/Home.module.css";

export default function Properties({ properties }) {
  return (
    <Layout>
      <MDBContainer>
        <ListProperties properties={properties} />
      </MDBContainer>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const { data } = await api.get("/api/properties");
  const properties = data.data;
  return {
    props: {
      properties,
    },
  };
};
