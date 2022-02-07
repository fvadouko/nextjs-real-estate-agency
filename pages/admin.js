import React from "react";
import { MDBContainer, MDBDataTableV5, MDBIcon, MDBView } from "mdbreact";
import { AdminRoute } from "../auth/adminRoutes";
import Layout from "../components/layout";
import useSWR from "swr";
import api from "../auth/axios";
import Moment from "react-moment";
import { priceFormatted } from "../helpers/helpers";
import useAuth from "../auth/context";

const fetcher = (url) => api.get(url).then((res) => res.data.data);

const PropertyList = () => {
  const { user } = useAuth();
  const { data: properties } = useSWR("/api/properties?limit=30", fetcher);

  const styles = {
    forcedInline: {
      display: "inline",
      width: "10px",
      height: "100px",
    },
    iconTrue: {
      color: "#2BBBAD",
    },
    iconFalse: {
      color: "red",
    },
  };

  const datatable = {
    columns: [
      {
        label: "Title",
        field: "title",
        sort: "asc",
      },
      {
        label: "Catégory",
        field: "category",
        sort: "asc",
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
      },
      {
        label: "Image",
        field: "pictures",
        sort: "asc",
      },
      {
        label: "Sold",
        field: "sold",
        sort: "asc",
      },
      {
        label: "Vip",
        field: "vip",
        sort: "asc",
      },
      {
        label: "Created At",
        field: "createdAt",
        sort: "asc",
      },
      {
        label: "Actions",
        field: "action",
      },
    ],
    rows:
      properties &&
      properties.map((property) => {
        return {
          title: property?.title,
          description: <div>{property?.description.slice(0, 200)}</div>,
          price: priceFormatted(property?.price),
          category: property?.category.name,
          pictures: property && (
            <MDBView hover zoom waves>
              <img
                src={property?.pictures[0]}
                alt="first slide"
                width={120}
                height={80}
              />
            </MDBView>
          ),
          sold:
            (property?.sold === false && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
              </div>
            )) ||
            (property?.sold === true && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
              </div>
            )),
          vip:
            (property?.vip === false && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
              </div>
            )) ||
            (property?.vip === true && (
              <div className="text-center">
                <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
              </div>
            )),
          createdAt: (
            <Moment format="MM/DD/YYYY - HH:mm:ss">
              {property?.createdAt}
            </Moment>
          ),
          action: (
            <div>
              <div className="text-center">
                <MDBIcon far icon="eye" />
              </div>
            </div>
          ),
        };
      }),
  };

  return (
    <>
      {user && user.role === "admin" && (
        <Layout>
          <MDBContainer fluid>
            <MDBDataTableV5
              hover
              entriesOptions={[5, 10, 15, 20, 30]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              pagingTop
              entriesLabel="Property per page"
              infoLabel={["Displat", "from", "to", "properties"]}
              searchTop
              searchBottom={false}
            />
          </MDBContainer>
        </Layout>
      )}
    </>
  );
};

export default AdminRoute(PropertyList);
