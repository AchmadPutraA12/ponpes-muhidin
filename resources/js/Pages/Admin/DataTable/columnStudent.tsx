import { ColumnDef } from "@tanstack/react-table";
import { SchoolYear, Student, StudentRegister } from "@/types";
import { Button } from "@/Components/ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import DeleteData from "@/Components/DeleteData";
import { formatDate } from "@/Helper/FormatDate";

import ShowDoc from "../Student/ShowDoc";
import ShowDoc2 from "../Student/ShowDoc2";
import Edit from "../Student/EditStatus";
import isStudentDataCompleted from "@/Helper/isStudentDataCompleted";
import isStudentDataRegist from "@/Helper/isStudentDataRegist";

export const studentColumns: ColumnDef<StudentRegister>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "student.user.name",
        enableColumnFilter: true,
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama Calon Siswa
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return <span>{props.row.original.student.user.name}</span>;
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
                    Tanggal Daftar
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return formatDate(row.original.created_at);
        },
    },
    {
        accessorKey: "status",
        header(props) {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        props.column.toggleSorting(
                            props.column.getIsSorted() === "asc"
                        )
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return (
                <span>
                    {props.row.original.status == null ? (
                        <span className="bg-red-100 px-4 py-1 text-red-700">
                            Belum Upload Dokumen
                        </span>
                    ) : (
                        <span className="bg-orange-100 px-4 py-1 text-orange-700">
                            {props.row.original.status}
                        </span>
                    )}
                </span>
            );
        },
    },

    {
        id: "actions",
        enableHiding: false,
        header: "Actions",
        cell: ({ row }) => {
            const studentRegister = row.original;
            return (
                <div className="flex items-center gap-2">
                    <ShowDoc studentRegister={studentRegister} />

                    <ShowDoc2 studentRegister={studentRegister} />
                    <Edit studentRegister={studentRegister} />
                </div>
            );
        },
    },
];
