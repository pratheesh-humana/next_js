import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { DataGrid } from "@mui/x-data-grid";
import { gql } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { clientGraphqlzero } from "@/api/apolloClient";
import {
  table_container,
  table_wrapper,
  heading,
} from "../../styles/DocumentList.module.css";
import pino from "../../logger";

export const getStaticProps = async () => {
  try {
    const { data } = await clientGraphqlzero.query({
      query: gql`
        query ($options: PageQueryOptions) {
          posts(options: $options) {
            data {
              id
              title
              body
              user {
                name
              }
              comments {
                data {
                  body
                }
              }
            }
            meta {
              totalCount
            }
          }
        }
      `,
    });

    return {
      props: {
        data: data.posts.data,
      },
    };
  } catch (error) {
    pino.info(`Error: ${error}`);
  }
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Patient Name", width: 130 },
  {
    field: "user",
    headerName: "Doctor's Name",
    type: "string",
    width: 165,
    valueGetter: (params) => `${params.row.user.name}`,
  },
  { field: "body", headerName: "Prescription", width: 250 },
  {
    field: "comments",
    headerName: "Comments",
    sortable: false,
    width: 430,
    valueGetter: (params) => `${params.row.comments.data[0].body}`,
  },
];

export default function DataTable({ data, setView }) {
  const router = useRouter();

  const notifyError = () =>
    toast.error("You need to login to fetch patient's details!", {
      position: toast.POSITION.TOP_CENTER,
    });

  useEffect(() => {
    if (localStorage.getItem("user_login") !== null) {
      setView(true);
    } else {
      router.push("/");
      setView(false);
      setTimeout(() => {
        notifyError();
      }, 500);
    }
  }, []);

  return (
    <div className={table_container}>
      <Head>
        <title>{`Patient's List`}</title>
      </Head>
      <div className={table_wrapper}>
        <header>
          <h1 className={heading}>{`Patient's List`}</h1>
        </header>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          count={15}
          rowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
