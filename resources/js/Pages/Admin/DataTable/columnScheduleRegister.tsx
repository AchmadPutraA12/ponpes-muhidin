import { ColumnDef } from "@tanstack/react-table";
import { ScheduleRegister, SchoolYear } from "@/types";
import { Button } from "@/Components/ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import DeleteData from "@/Components/DeleteData";
import { formatDate } from "@/Helper/FormatDate";
import Edit from "../ScheduleRegister/Edit";

export const scheduleRegisterColumns: ColumnDef<ScheduleRegister>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "first_date",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tanggal Awal
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "last_date",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tanggal Akhir
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        header: "Tahun Ajaran",
        cell(props) {
            return (
                props.row.original.school_year.first_year +
                "/" +
                props.row.original.school_year.last_year
            );
        },
    },
    {
        accessorKey: "school_year.is_active",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return props.row.original.school_year.is_active === 1 ? (
                <span className="text-green-500 font-bold px-3 bg-primary/20 py-2 rounded-lg">
                    Buka
                </span>
            ) : (
                <span className="text-red-500 font-bold px-3 bg-destructive/20 py-2 rounded-lg">
                    Tutup
                </span>
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
            const scheduleRegister = row.original;
            return (
                <div className="flex items-center gap-2">
                    <Edit scheduleRegister={scheduleRegister} />
                    <DeleteData
                        paramId={`/admin/jadwal-pendaftaran/${scheduleRegister.id}`}
                    />
                </div>
            );
        },
    },
];
