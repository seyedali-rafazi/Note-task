import React, { ReactNode } from "react";

// Table Component
interface TableProps {
  children: ReactNode;
}

interface TableComponent extends React.FC<TableProps> {
  Header: React.FC<TableHeaderProps>;
  Body: React.FC<TableBodyProps>;
  Row: React.FC<TableRowProps>;
  HeaderCell: React.FC<TableCellProps>;
  Cell: React.FC<TableCellProps>;
}

const Table: TableComponent = ({ children }) => {
  return (
    <div className="bg-secondary-0 overflow-auto">
      <table className="w-full">{children}</table>
    </div>
  );
};

// TableHeader Component
interface TableHeaderProps {
  children: ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

// TableBody Component
interface TableBodyProps {
  children: ReactNode;
}

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

// TableRow Component
interface TableRowProps {
  children: ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

// TableCell Component
interface TableCellProps {
  children: ReactNode;
  className?: string;
}

const TableHeaderCell: React.FC<TableCellProps> = ({ children }) => {
  return <th className="p-2">{children}</th>;
};

const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
  return <td className={`p-2 ${className}`}>{children}</td>;
};

// Assign sub-components to the main Table component
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableCell;

export default Table;
