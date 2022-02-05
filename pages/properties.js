import { MDBContainer } from "mdbreact";

import api from "../auth/axios";
import Layout from "../components/layout";
import ListProperties from "../components/listProperties";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

export default function Properties({ properties, currentPage, totalPages }) {
  const router = useRouter();
  const paginateHandler = (page) => {
    const currentPath = router.pathname;
    let currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router
      .push({
        pathname: currentPath,
        query: currentQuery,
      })
      .then(() => window.scrollTo(0, 0));
  };
  return (
    <Layout>
      <MDBContainer>
        <ListProperties properties={properties} />
      </MDBContainer>
      <div className="paginateCenter">
        <ReactPaginate
          onPageChange={paginateHandler}
          initialPage={currentPage - 1}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          activeClassName="activated"
          breakLabel="..."
          pageClassName="paginate"
          containerClassName="custom-paginate"
        />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const { data } = await api.get(`/api/properties?page=${page}`);
  const properties = data.data;
  const currentPage = data.currentPage;
  const totalPages = data.totalPages;
  return {
    props: {
      properties,
      currentPage,
      totalPages,
    },
  };
};
