import useTable from "./hook/useTable";

import { TableProvider } from "./provider/TableProvider";
import TableHeader from "./components/TableHeader/index";
import TableBody from "./components/TableBody/index";
import TableFooter from "./components/TableFooter";
import AddSubRow from "./components/SubRowComponents/AddSubRow";
// import { headerOptionType } from "./dummyData";
import { ColumnDef, Row } from "@tanstack/react-table";

export interface Example {
  No: number;
  firstName: string;
  add: string;
}

const dummyData: Array<Example> = [
  { No: 1, firstName: "kim", add: "-" },
  { No: 2, firstName: "kim", add: "-" },
  { No: 3, firstName: "kim", add: "-" },
  { No: 4, firstName: "kim", add: "-" },
  { No: 5, firstName: "kim", add: "-" },
  { No: 6, firstName: "kim", add: "-" },
  { No: 7, firstName: "kim", add: "-" },
  { No: 8, firstName: "kim", add: "-" },
  { No: 9, firstName: "kim", add: "-" },
  { No: 10, firstName: "kim", add: "-" },
  { No: 11, firstName: "kim", add: "-" },
  { No: 12, firstName: "kim", add: "-" },
  { No: 13, firstName: "kim", add: "-" },
  { No: 14, firstName: "kim", add: "-" },
  { No: 15, firstName: "kim", add: "-" },
  { No: 16, firstName: "kim", add: "-" },
  { No: 17, firstName: "kim", add: "-" },
  { No: 18, firstName: "kim", add: "-" },
  { No: 19, firstName: "kim", add: "-" },
  { No: 20, firstName: "kim", add: "-" },
  { No: 21, firstName: "kim", add: "-" },
];

const columns: ColumnDef<Example>[] = [
  {
    accessorKey: "No",
    header: "No",
    size: 100,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    size: 200,
  },
  {
    accessorKey: "add",
    header: "add",
    size: 50,
  },
];

function App() {
  const { table, totalPageNum, pagination, setPagination } = useTable<Example>({
    data: dummyData,
    columns,
    isPagination: true,
  });

  const handleClickRow = (row: Row<unknown>) => {
    row.toggleExpanded();
  };

  return (
    <>
      <TableProvider
        SubRowComponent={AddSubRow}
        rowClickEvent={handleClickRow}
        useParentRowUi={true}
      >
        <TableHeader table={table} />
        <TableBody table={table} />
      </TableProvider>

      <TableFooter
        totalPageNum={totalPageNum}
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  );
}

export default App;
