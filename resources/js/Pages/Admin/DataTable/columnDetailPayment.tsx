import { ColumnDef } from "@tanstack/react-table";
import { DetailPayment, Extracurricular } from "@/types";
import { Button } from "@/Components/ui/button";
import {
    ArrowUpDown,
    CheckIcon,
    CircleX,
    ClockIcon,
    EyeIcon,
    EyeOffIcon,
    InfoIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import DeleteData from "@/Components/DeleteData";
import { formatDate } from "@/Helper/FormatDate";
import { FormatRupiah } from "@arismun/format-rupiah";
import Edit from "../DetailPayment/Edit";

// import DeleteData from "@/Components/DeleteData";

export const detailPaymentColumns: ColumnDef<DetailPayment>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "description",
        header: "Deskripsi",
    },
    {
        accessorKey: "price",
        header: "Harga",
        cell(props) {
            return <FormatRupiah value={props.row.getValue("price")} />;
        },
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Dibuat
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return formatDate(row.original.created_at);
        },
    },
    {
        id: "actions",
        enableHiding: false,
        header: "Actions",
        cell: ({ row }) => {
            const detailPayment = row.original;

            return (
                <div className="flex items-center gap-2">
                    <Edit detailPayment={detailPayment} />
                    {/* <Edit user={user} /> */}
                    <DeleteData
                        paramId={`/admin/detail-pembayaran/${detailPayment.id}`}
                    />
                </div>
            );
        },
    },
];
