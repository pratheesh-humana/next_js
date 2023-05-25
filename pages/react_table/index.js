import DataGrid from "@/components/DataGridTable";
import { clientServiceHumana } from "@/api/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";

const index = ({ setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  return (
    <div>
      <ApolloProvider client={clientServiceHumana}>
        <DataGrid />
      </ApolloProvider>
    </div>
  );
};

export default index;
