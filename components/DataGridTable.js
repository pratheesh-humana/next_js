import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

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
        physicianNpi
      }
    }
  }
`;

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("PatientID", {
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor((row) => row.LastName, {
    id: "LastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),

  columnHelper.accessor("Dob", {
    id: "Dob",
    header: () => "Dob",
    cell: (info) => info.renderValue(),
  }),

  columnHelper.accessor("refStatus", {
    id: "refStatus",
    header: () => <span>RefStatus</span>,
  }),

  columnHelper.accessor("actionRequired", {
    id: "actionRequired",
    header: "ActionRequired",
  }),

  columnHelper.accessor("physicianNpi", {
    id: "physicianNpi",
    header: "PhysicianNpi",
  }),
];

const DataGridTable = ({ setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  const { data, error, loading } = useQuery(QUERY, {
    variables: { physicianNpi: "12343212" },
  });

  const tableData = data?.patients?.patients;

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return <p>Loading ...</p>;
  }

  console.log("*", data);

  if (error) {
    console.log(error);

    return null;
  }

  return (
    <div>
      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {" "}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())} 
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DataGridTable;
