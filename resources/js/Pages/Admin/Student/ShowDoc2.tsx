import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { StudentRegister } from "@/types";
import { Link, router } from "@inertiajs/react";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

interface ShowProps {
    studentRegister: StudentRegister;
}

const ShowDoc2 = ({ studentRegister }: ShowProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild>
                    <Button onClick={() => setShowModal(true)} size={"sm"}>
                        Dokumen
                    </Button>
                </DialogTrigger>
                <DialogContent className="z-[120] sm:max-w-[1000px] h-auto rounded-lg overflow-auto bg-white shadow-lg p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold  mb-4">
                            Informasi Siswa
                        </DialogTitle>
                        <div className="space-y-6">
                            <section>
                                <h3 className="font-medium text-lg p-2 px-4 bg-primary text-white mb-4">
                                    Dokumen
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <p>
                                        <strong>KK:</strong>{" "}
                                        <img
                                            className="size-40 object-contain"
                                            src={`/storage/${studentRegister.kk}`}
                                            alt=""
                                        />
                                        <div className="flex items-center gap-4">
                                            <a
                                                href={`/storage/${studentRegister.kk}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                Lihat Dokumen
                                            </a>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    router.delete(
                                                        `/admin/file/${studentRegister.id}/kk`,
                                                        {
                                                            preserveScroll:
                                                                true,
                                                            data: {
                                                                kk: studentRegister.kk,
                                                            },
                                                        }
                                                    );
                                                }}
                                            >
                                                <Trash2Icon className="size-5 text-red-500 " />
                                            </button>
                                        </div>
                                    </p>
                                    <p>
                                        <strong>Akte:</strong>{" "}
                                        <img
                                            src={`/storage/${studentRegister.akte}`}
                                            alt=""
                                            className="size-40 object-contain"
                                        />
                                        <div className="flex items-center gap-4">
                                            {" "}
                                            <a
                                                href={`/storage/${studentRegister.akte}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                Lihat Dokumen
                                            </a>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    router.delete(
                                                        `/admin/file/${studentRegister.id}/akte`,
                                                        {
                                                            preserveScroll:
                                                                true,
                                                            data: {
                                                                akte: studentRegister.akte,
                                                            },
                                                        }
                                                    );
                                                }}
                                            >
                                                <Trash2Icon className="size-5 text-red-500 " />
                                            </button>
                                        </div>
                                    </p>
                                    <p>
                                        <strong>Ijazah TK:</strong>{" "}
                                        <img
                                            src={`/storage/${studentRegister.ijazah_tk}`}
                                            alt=""
                                            className="size-40 object-contain"
                                        />
                                        <div className="flex items-center gap-4">
                                            {" "}
                                            <a
                                                href={`/storage/${studentRegister.ijazah_tk}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                Lihat Dokumen
                                            </a>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    router.delete(
                                                        `/admin/file/${studentRegister.id}/ijazah`,
                                                        {
                                                            preserveScroll:
                                                                true,
                                                            data: {
                                                                ijazah_tk:
                                                                    studentRegister.ijazah_tk,
                                                            },
                                                        }
                                                    );
                                                }}
                                            >
                                                <Trash2Icon className="size-5 text-red-500 " />
                                            </button>
                                        </div>
                                    </p>
                                    <p>
                                        <strong>KTP:</strong>{" "}
                                        <img
                                            src={`/storage/${studentRegister.ktp}`}
                                            alt=""
                                            className="size-40 object-contain"
                                        />
                                        <div className="flex items-center gap-4">
                                            {" "}
                                            <a
                                                href={`/storage/${studentRegister.ktp}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                Lihat Dokumen
                                            </a>{" "}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    router.delete(
                                                        `/admin/file/${studentRegister.id}/ktp`,
                                                        {
                                                            preserveScroll:
                                                                true,
                                                            data: {
                                                                ktp: studentRegister.ktp,
                                                            },
                                                        }
                                                    );
                                                }}
                                            >
                                                <Trash2Icon className="size-5 text-red-500 " />
                                            </button>
                                        </div>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ShowDoc2;
