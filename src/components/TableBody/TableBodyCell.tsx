import { CSSProperties } from "react";
import { Cell } from "@tanstack/react-table";

interface TableBodyCellProps<T> {
  cell: Cell<T, unknown>;
  style?: CSSProperties;
  className?: string;
}

const TableBodyCell = <T,>({
  cell,
  style,
  className,
}: TableBodyCellProps<T>) => {
  // typeof fucntion 일 경우, columns 생성 시 custom 한 cell value 적용
  const cellValue =
    typeof cell.column.columnDef.cell === "function"
      ? cell.column.columnDef.cell(cell.getContext())
      : cell.getValue();

  return (
    <td style={style} className={className}>
      {cellValue}
    </td>
  );
};

export default TableBodyCell;
