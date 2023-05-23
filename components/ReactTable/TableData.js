import { gql, useQuery } from "@apollo/client";

import BasicTable from "./BasicTable";

const QUERY = gql`
  query ExampleQuery($physicianNpi: String!) {
    patients(physicianNpi: $physicianNpi) {
      patients {
        FirstName
        LastName
        Dob
        PatientID
        refStatus
        actionRequired
        physician {
          firstName
          lastName
        }
        physicianNpi
      }
    }
  }
`;

const TableData = () => {
  const { data, error, loading } = useQuery(QUERY, {
    variables: { physicianNpi: "12343212" },
  });

  if (loading) return <p>Loading ...</p>;

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <div>
      <BasicTable data={data?.patients?.patients} />
    </div>
  );
};

export default TableData;
