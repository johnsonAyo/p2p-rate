"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, Tether, Naira } from "@/components/icons";
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
import { columns, users } from "./data";

export default function Home() {
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
      case "selling":
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
      case "buying":
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
      case "volume":
        return (
          <div className="relative flex items-center gap-2 text-md">
            {cellValue}
          </div>
        );
      default:
      // return cellValue;
    }
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Real-Time P2P&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>USDT to Naira&nbsp;</h1>
        <h1 className={title()}>Exchange Rate &nbsp;</h1>
        <br />
      </div>
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
    </section>
  );
}
