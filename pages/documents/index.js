import { useEffect } from "react";
import { useRouter } from "next/router";

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
  { field: "title", headerName: "Title", width: 130 },
  {
    field: "user",
    headerName: "Name",
    type: "string",
    width: 90,
    valueGetter: (params) => `${params.row.user.name}`,
  },
  { field: "body", headerName: "Body", width: 300 },
  {
    field: "comments",
    headerName: "Comments",
    sortable: false,
    width: 450,
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
      <div className={table_wrapper}>
        <h1 className={heading}>Documents</h1>
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
