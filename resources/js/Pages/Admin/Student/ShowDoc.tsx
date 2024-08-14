import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { StudentRegister } from "@/types";
import { useState } from "react";

interface ShowProps {
    studentRegister: StudentRegister;
}

const ShowDoc = ({ studentRegister }: ShowProps) => {
    const [showModal, setShowModal] = useState(false);

    const { student } = studentRegister;
    const { user, parent, prev_school } = student;

    return (
        <>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild>
                    <Button onClick={() => setShowModal(true)} size={"sm"}>
                        Siswa
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
                                    Siswa
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {" "}
                                    <p>
                                        <strong>Nama Siswa :</strong>{" "}
                                        {user.name}
                                    </p>
                                    <p>
                                        <strong>Email :</strong> {user.email}
                                    </p>
                                    <p>
                                        <strong>Jenis Kelamin :</strong>{" "}
                                        {student.gender}
                                    </p>
                                    <p>
                                        <strong>Tanggal Lahir :</strong>{" "}
                                        {student.birth_date}
                                    </p>
                                    <p>
                                        <strong>Alamar :</strong>{" "}
                                        {student.address}
                                    </p>
                                    <p>
                                        <strong>NIS :</strong>{" "}
                                        {student.nis === null ? (
                                            <span className="text-white font-semibold bg-red-500 px-2 py-1 text-sm">
                                                Belum dibuat
                                            </span>
                                        ) : (
                                            student.nis
                                        )}
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="font-medium text-lg p-2 px-4 bg-primary text-white mb-4">
                                    Informasi {parent.choice}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {parent.choice === "orang tua" ? (
                                        <>
                                            <div
                                                className="flex flex-col gap-2
                                        "
                                            >
                                                <p>
                                                    <strong>Nama Ayah :</strong>{" "}
                                                    {parent.father}
                                                </p>
                                                <p>
                                                    <strong>
                                                        Pekerjaan Ayah :
                                                    </strong>{" "}
                                                    {parent.father_occupation}
                                                </p>
                                                <p>
                                                    <strong>
                                                        No Telp Ayah:
                                                    </strong>{" "}
                                                    {parent.father_phone}
                                                </p>
                                                <p>
                                                    <strong>
                                                        Alamat Ayah :
                                                    </strong>{" "}
                                                    {parent.mother}
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                {" "}
                                                <p>
                                                    <strong>Nama Ibu :</strong>{" "}
                                                    {parent.mother}
                                                </p>
                                                <p>
                                                    <strong>
                                                        Pekerjaan Ibu :
                                                    </strong>{" "}
                                                    {parent.mother_occupation}
                                                </p>
                                                <p>
                                                    <strong>
                                                        No Telp Ibu :
                                                    </strong>{" "}
                                                    {parent.mother_phone}
                                                </p>
                                                <p>
                                                    <strong>
                                                        Alamat Ibu :
                                                    </strong>{" "}
                                                    {parent.address_father}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p>
                                                <strong>Nama Wali :</strong>{" "}
                                                {parent.wali}
                                            </p>
                                            <p>
                                                <strong>
                                                    Pekerjaan Wali :
                                                </strong>{" "}
                                                {parent.wali_occupation}
                                            </p>
                                            <p>
                                                <strong>No Telp Wali:</strong>{" "}
                                                {parent.wali_phone}
                                            </p>
                                            <p>
                                                <strong>Alamat Wali :</strong>{" "}
                                                {parent.address_wali}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </section>

                            <section>
                                <h3 className="font-medium text-lg p-2 px-4 bg-primary text-white mb-4">
                                    Asal Sekolah
                                </h3>
                                <p>
                                    <strong>Nama Sekolah :</strong>{" "}
                                    {prev_school.name}
                                </p>
                            </section>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ShowDoc;
