import { ColumnDef } from "@tanstack/react-table";
import { SchoolYear } from "@/types";
import { Button } from "@/Components/ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import DeleteData from "@/Components/DeleteData";
import { formatDate } from "@/Helper/FormatDate";
import Edit from "../SchoolYear/Edit";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import React, { useEffect } from "react";
import { router } from "@inertiajs/react";

export const schoolYearColumns: ColumnDef<SchoolYear>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "first_year",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tahun Awal
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "last_year",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tahun Akhir
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "quota",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Kuota penerimaan siswa
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return props.row.getValue("quota") + " siswa";
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
        accessorKey: "is_active",
        header: ({ column }) => {
            return (
                <Button
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
            const position = props.row.getValue("is_active") ? "aktif" : "tidak aktif";

            return (
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button>
                                {position === "aktif" ? (
                                    <div className="flex items-center gap-2 text-green-500 font-bold px-3 bg-primary/20 py-2 rounded-lg">
                                        <span>Aktif</span>
                                        <ChevronDown
                                            className="mt-1"
                                            size={16}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-red-500 font-bold px-3 bg-destructive/20 py-2 rounded-lg">
                                        <span>Tidak Aktif</span>
                                        <ChevronDown
                                            className="mt-1"
                                            size={16}
                                        />
                                    </div>
                                )}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                                value={position}
                                onValueChange={(value) => {
                                    const status = value === "aktif" ? 1 : 0;
                                    router.patch(
                                        `/admin/tahun-ajaran/update-status/${props.row.original.id}`,
                                        { status },
                                        {
                                            preserveScroll: true,
                                        }
                                    );
                                }}
                                className="text-xs"
                            >
                                <DropdownMenuRadioItem value="tidak aktif">
                                    Tidak Aktif
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="aktif">
                                    Aktif
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
        
    {
        id: "actions",
        enableHiding: false,
        header: "Actions",
        cell: ({ row }) => {
            const schoolYear = row.original;
            return (
                <div className="flex items-center gap-2">
                    <Edit schoolYear={schoolYear} />
                    <DeleteData
                        paramId={`/admin/tahun-ajaran/${schoolYear.id}`}
                    />
                </div>
            );
        },
    },
];
