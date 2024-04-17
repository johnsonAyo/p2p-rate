"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { GithubIcon, Tether, Naira } from "@/components/icons";

const TableCoponent = ({ columns, users }: { columns: any; users: any }) => {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            // description={user.email}
            name={cellValue}
          >
            {/* {user.email} */}
          </User>
        );
      case "sell":
        return (
          <Chip
            className="capitalize"
            color={"warning"}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "sellVolume":
        return (
          <div className="relative flex items-center gap-2 text-md">
            {cellValue}
          </div>
        );
      case "buy":
        return (
          <Chip
            className="capitalize"
            color={"success"}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "buyVolume":
        return (
          <div className="relative flex items-center gap-2 text-md">
            {cellValue}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableCoponent;