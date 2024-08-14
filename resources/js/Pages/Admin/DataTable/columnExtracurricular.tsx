import { ColumnDef } from "@tanstack/react-table";
import { Extracurricular } from "@/types";
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
import Edit from "../Extracurricular/Edit";

// import DeleteData from "@/Components/DeleteData";

export const extracurricularColumns: ColumnDef<Extracurricular>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "image",
        header: "Gambar",
        cell(props) {
            return (
                <img
                    src={`/storage/` + props.row.getValue("image")}
                    alt="image"
                    className="h-20 w-20 object-cover"
                />
            );
        },
    },
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "description",
        header: "Deskripsi",
        cell(props) {
            return (
                <div className="max-w-[500px]">
                    {props.row.getValue("description")}
                </div>
            );
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
            const extracurricular = row.original;

            return (
                <div className="flex items-center gap-2">
                    <Edit extra={extracurricular} />
                    <DeleteData
                        paramId={`/admin/ekstrakulikuler/${extracurricular.id}`}
                    />
                </div>
            );
        },
    },
];
