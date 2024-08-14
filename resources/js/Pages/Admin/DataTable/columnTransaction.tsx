import { ColumnDef } from "@tanstack/react-table";
import { SchoolYear, Student, StudentRegister, Transaction } from "@/types";
import { Button } from "@/Components/ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { FormatRupiah } from "@arismun/format-rupiah";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import React from "react";
import { router, useForm } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "invoice",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Invoice
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama Siswa
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Jumlah
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return <FormatRupiah value={props.row.original.amount} />;
        },
    },
    {
        accessorKey: "date",
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
                    Tanggal Dibuat
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    size={"md"}
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
            const [position, setPosition] = React.useState<any>(
                props.row.getValue("status")
            );

            return (
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size={"sm"}
                                className={` flex items-center w-28 gap-2 hover:text-white ${
                                    props.row.getValue("status") === "pending"
                                        ? "bg-orange-300 text-orange-900 hover:bg-orange-400 "
                                        : "bg-green-300 text-green-900 hover:bg-green-400"
                                }`}
                                variant="outline"
                            >
                                {props.row.getValue("status")}
                                <ChevronDown className="mt-1" size={16} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                                value={position}
                                onValueChange={setPosition}
                            >
                                <DropdownMenuRadioItem
                                    value="pending"
                                    onClick={() =>
                                        router.patch(
                                            `/admin/transaksi/${props.row.original.id}`,
                                            {
                                                status: "pending",
                                            },
                                            {
                                                preserveScroll: true,
                                            }
                                        )
                                    }
                                >
                                    Pending
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="selesai"
                                    onClick={() =>
                                        router.patch(
                                            `/admin/transaksi/${props.row.original.id}`,
                                            {
                                                status: "selesai",
                                            },
                                            {
                                                preserveScroll: true,
                                            }
                                        )
                                    }
                                >
                                    Selesai
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
            const studentRegister = row.original;
            const { data, setData, errors, processing, reset, clearErrors } =
                useForm({
                    nis: studentRegister.nis,
                });

            // ;

            const submit = (e: React.SyntheticEvent) => {
                e.preventDefault();
                router.post(
                    route(
                        "admin.transaction.update-nis",
                        studentRegister.student_id
                    ),
                    {
                        ...data,
                        _method: "put",
                    },
                    {
                        preserveScroll: true,
                    }
                );
            };
            return studentRegister.status === "selesai" ? (
                <form onSubmit={submit}>
                    <div className="relative">
                        <Label
                            className="absolute -top-2 bg-white px-2
                             left-3"
                            htmlFor="nis"
                        >
                            NIS
                        </Label>
                        <div className="flex items-center gap-3">
                            {" "}
                            <Input
                                value={data.nis}
                                onChange={(e) => setData("nis", e.target.value)}
                                type="text"
                                name="nis"
                                id="nis"
                                required
                            />
                            <Button type="submit" variant={"default"}>
                                Simpan
                            </Button>
                        </div>
                    </div>
                </form>
            ) : (
                <span className="text-zinc-500">Belum bisa mengedit</span>
            );
        },
    },
];
