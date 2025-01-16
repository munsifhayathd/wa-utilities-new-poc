import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

const Table = ({ className, ...props }: TableProps) => {
  return (
    <table 
      className={cn("w-full caption-bottom text-sm", className)} 
      {...props} 
    />
  );
};

interface TableProps extends HTMLAttributes<HTMLTableElement> {}

interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead 
      className={cn("[&_tr]:border-b", className)} 
      {...props} 
    />
  );
}

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

function TableBody({ className, ...props }: TableBodyProps) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-gray-50/50 data-[state=selected]:bg-gray-50",
        className
      )}
      {...props}
    />
  );
}

interface TableHeadProps extends HTMLAttributes<HTMLTableCellElement> {}

function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  );
}

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {}

function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      className={cn(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  );
}

const TableComponents = Table as typeof Table & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
};

TableComponents.Header = TableHeader;
TableComponents.Body = TableBody;
TableComponents.Row = TableRow;
TableComponents.Head = TableHead;
TableComponents.Cell = TableCell;

export { TableComponents as Table }; 