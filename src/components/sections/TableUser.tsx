"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUsers } from "@/type";
import React from "react";
import Chip from "../ui/Chip";
import ButtonDeleteUser from "./ButtonDeleteUser";
import ButtonEditUser from "./ButtonEditUser";

const tableHeaders = ["Name", "Email", "Gender", "Status", "Action"];

export default function TableUser({ data }: { data: IUsers[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((item) => (
            <TableHead key={item}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.length === 0 && (
          <TableRow>
            <TableCell
              colSpan={tableHeaders.length}
              className="h-24 text-center"
            >
              No data
            </TableCell>
          </TableRow>
        )}

        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell>
              {item.status === "active" ? (
                <Chip variants="success">Active</Chip>
              ) : (
                <Chip variants="danger">Inactive</Chip>
              )}
            </TableCell>

            <TableCell>
              <div className="flex gap-4">
                <ButtonEditUser user={item} />

                <ButtonDeleteUser id={item.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
