import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import api from "../../auth/axios";
import ListProperties from "../../components/listProperties";
import SearchFilter from "../../components/searchFilter";

const Search = () => {
  const router = useRouter();
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    async function getProperty() {
      const { data } = await api.post("/api/property/list/search", {
        filters: {
          title: router.query.title,
          category: router.query.category,
        },
      });
      setProperties(data);
    }
    getProperty();
  }, [router.query.title, router.query.category]);

  return (
    <Layout>
      <div className="container">
        <SearchFilter />
        {router.query.category || router.query.title ? (
          <div>
            <div className="mb-4 text-center globalColor font-weight-bolder">
              {properties?.size} Properties found.
            </div>
            <ListProperties properties={properties?.data} />
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Search;
