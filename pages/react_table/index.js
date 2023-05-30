import DataGrid from "@/components/DataGridTable";
import { clientServiceHumana } from "@/api/apolloClient";
import { ApolloProvider } from "@apollo/client";

const index = ({ setView }) => {
  return (
    <div>
      <ApolloProvider client={clientServiceHumana}>
        <DataGrid setView={setView} />
      </ApolloProvider>
    </div>
  );
};

export default index;
