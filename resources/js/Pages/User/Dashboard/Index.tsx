import { PageProps, SchoolYear, Student, StudentRegister } from "@/types";
import GuestLayout from "@/Layouts/GuestLayout";
import { CheckCircle2, Download, TimerIcon, UserCircle } from "lucide-react";
import Create from "./Partials/Create";
import isStudentDataCompleted from "@/Helper/isStudentDataCompleted";
import { Button } from "@/Components/ui/button";
import CreateRegis from "./Partials/CreateRegis";
import isStudentDataRegist from "@/Helper/isStudentDataRegist";
import { FormatRupiah } from "@arismun/format-rupiah";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import EditKK from "./Partials/EditKK";
import EditAkte from "./Partials/EditAkte";
import EditKTP from "./Partials/EditKTP";
import EditIjazah from "./Partials/EditIjazah";
import { usePage } from "@inertiajs/react";
interface Props {
    schoolYear: SchoolYear;
    auth: PageProps["auth"];
    student: Student;
    studentRegister: StudentRegister;
    detailPayment: number;
}

export default function Welcome({
    schoolYear,
    auth,
    student,
    detailPayment,
    studentRegister,
}: Props) {
    const isCompleted = isStudentDataCompleted({ student });
    const studentRegist = isStudentDataRegist({ studentRegister });

    return (
        <div>
            <div className="py-24  md:py-44 mb-20 px-6 md:px-44 lg:pt-36  w-full">
                <div className="flex items-center justify-end">
                    <div className="flex items-end flex-col gap-2">
                        <h1 className="text-lg md:text-2xl font-bold">
                            TAHUN PELAJARAN {schoolYear.first_year}/
                            {schoolYear.last_year}
                        </h1>
                        <h2 className="mt-2 text-sm md:text-base font-semibold bg-primary text-white p-2 rounded-md">
                            {schoolYear.quota} Kuota Tersedia
                        </h2>
                    </div>
                </div>
                <div className=" flex flex-col md:grid md:grid-cols-8 gap-4">
                    <div className="col-span-2">
                        <div className=" border border-gray-300 rounded-lg mt-8  h-auto p-6  ml-2 flex-col gap-5 flex">
                            <div
                                className={`grid grid-cols-6 gap-2 ${
                                    isCompleted ? "text-primary" : " text-black"
                                }`}
                            >
                                {isCompleted ? (
                                    <CheckCircle2 className=" size-6 col-span-1" />
                                ) : (
                                    <TimerIcon className="size-6 col-span-1" />
                                )}
                                <p className="col-span-5">
                                    Lengkapi data siswa, orang tua dan asal
                                    sekolah
                                </p>
                            </div>
                            <div
                                className={`grid grid-cols-6 gap-2 ${
                                    isCompleted && studentRegist
                                        ? "text-primary"
                                        : " text-black"
                                }`}
                            >
                                {isCompleted && studentRegist ? (
                                    <CheckCircle2 className="size-6 col-span-1" />
                                ) : (
                                    <TimerIcon className="size-6 col-span-1" />
                                )}
                                <p className="col-span-5">
                                    Lengkapi Dokumen Siswa
                                </p>
                            </div>{" "}
                            {/* <div
                                className={`grid grid-cols-6 gap-2 ${
                                    studentRegister.status === "verifikasi"
                                        ? "text-primary"
                                        : " text-black"
                                }`}
                            >
                                {isCompleted && studentRegist ? (
                                    <CheckCircle2 className="size-6 col-span-1" />
                                ) : (
                                    <TimerIcon className="size-6 col-span-1" />
                                )}
                                <p className="col-span-5">Download Dokumen</p>
                            </div> */}
                        </div>
                    </div>

                    {!isCompleted ? (
                        <div className="grid mt-8 col-span-6 ">
                            <div className="flex p-4  bg-orange-100  w-full flex-col">
                                <span className="font-bold text-xl">
                                    Lengkapi Data
                                </span>
                                <span className="text-sm mt-2 text-zinc-500">
                                    Untuk mendaftar sebagai calon siswa di MI
                                    Muhyiddin, harap lengkapi data diri Anda
                                    dengan informasi yang valid. Pastikan Anda
                                    mengisi data siswa, data orang tua, dan data
                                    asal sekolah calon siswa secara lengkap dan
                                    benar.
                                </span>
                            </div>

                            <div className="flex  p-4 bg-primary/30 text-zinc-600 items-center gap-2">
                                <UserCircle className="size-8" />
                                <span className="text-xl font-semibold">
                                    Siswa
                                </span>
                            </div>

                            <div className="mt-5">
                                <Create
                                    schoolYear={schoolYear}
                                    id_auth={auth.user.student.id}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="grid col-span-6 ">
                            {studentRegister.status === "proses" ? (
                                <div className="flex mt-10 p-6 rounded-xl bg-orange-200 w-full flex-col">
                                    <span className="font-semibold">
                                        Perhatian !
                                    </span>
                                    <span className="text-sm mt-1 text-zinc-500">
                                        Dokumen anda sedang diverifikasi oleh
                                        admin, terkait data anda ! mohon di
                                        tunggu <strong>2 x 24 jam</strong>. Kami
                                        akan memberi informasi bahwa dokumen
                                        selesai di verifikasi. tetap pantau
                                        terus web MI MUHYIDDIN !
                                    </span>
                                </div>
                            ) : studentRegister.status === "verifikasi" ? (
                                <div className="flex p-4 mt-10  bg-primary/20 w-full flex-col">
                                    <span className="font-semibold uppercase">
                                        Selamat Dokumen anda berhasil di
                                        verifikasi
                                    </span>
                                    <span className="text-sm mt-1 text-zinc-500">
                                        Selanjutnya, anda download dokumen yang
                                        berhasil di verifikasi untuk melanjutkan
                                        pembayaran (step ke-3). pembayaran bisa
                                        anda lakukan di MI MUHYIDDIN dengan
                                        nominal{" "}
                                        <strong>
                                            <FormatRupiah
                                                value={detailPayment}
                                            />
                                        </strong>
                                    </span>
                                </div>
                            ) : studentRegister.status ===
                              "gagal verifikasi" ? (
                                <div className="flex p-4 mt-10  bg-red-200 w-full flex-col">
                                    <span className="font-semibold uppercase">
                                        Dokumen anda gagal di verifikasi
                                    </span>
                                    <span className="text-sm mt-1 text-zinc-500">
                                        Dokumen anda gagal di verifikasi,
                                        silahkan upload yang benar !
                                    </span>
                                </div>
                            ) : null}
                            <div className=" p-4 mt-10   flex-col md:flex-row items-center px-6 bg-white border border-primary/50 rounded-xl justify-between flex text-zinc-600 gap-2">
                                <div className="flex flex-col">
                                    <span className="text-lg md:text-xl font-semibold">
                                        1. Data Siswa, Orang Tua, dan Asal
                                        Sekolah
                                    </span>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button className="mt-4 md:mt-2 w-full md:w-auto">
                                            Lihat Data
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="z-[120] w-[90%] h-[80vh] sm:max-w-[1000px] md:h-auto rounded-lg overflow-auto bg-white shadow-lg p-6">
                                        <AlertDialogHeader>
                                            <div className="space-y-6">
                                                <section>
                                                    <h3 className="font-medium text-lg p-2 px-4 bg-primary text-white mb-4">
                                                        Siswa
                                                    </h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {" "}
                                                        <p>
                                                            <strong>
                                                                Nama Siswa :
                                                            </strong>{" "}
                                                            {student.user.name}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Email :
                                                            </strong>{" "}
                                                            {student.user.email}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Jenis Kelamin :
                                                            </strong>{" "}
                                                            {student.gender}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Tanggal Lahir :
                                                            </strong>{" "}
                                                            {student.birth_date}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Alamar :
                                                            </strong>{" "}
                                                            {student.address}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                NIS :
                                                            </strong>{" "}
                                                            {student.nis ===
                                                            null ? (
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
                                                        Informasi{" "}
                                                        {student.parent.choice}
                                                    </h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {student.parent
                                                            .choice ===
                                                        "orang tua" ? (
                                                            <>
                                                                <div
                                                                    className="flex flex-col gap-2
                                        "
                                                                >
                                                                    <p>
                                                                        <strong>
                                                                            Nama
                                                                            Ayah
                                                                            :
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .father
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <strong>
                                                                            Pekerjaan
                                                                            Ayah
                                                                            :
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .father_occupation
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <strong>
                                                                            No
                                                                            Telp
                                                                            Ayah:
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .father_phone
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <strong>
                                                                            Alamat
                                                                            Ayah
                                                                            :
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .mother
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="flex flex-col gap-2">
                                                                    {" "}
                                                                    <p>
                                                                        <strong>
                                                                            Nama
                                                                            Ibu
                                                                            :
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .mother
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <strong>
                                                                            Pekerjaan
                                                                            Ibu
                                                                            :
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .mother_occupation
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <strong>
                                                                            No
                                                                            Telp
                                                                            Ibu
                                                                            :
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .mother_phone
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <strong>
                                                                            Alamat
                                                                            Ibu
                                                                            :
                                                                        </strong>{" "}
                                                                        {
                                                                            student
                                                                                .parent
                                                                                .address_father
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <p>
                                                                    <strong>
                                                                        Nama
                                                                        Wali :
                                                                    </strong>{" "}
                                                                    {
                                                                        student
                                                                            .parent
                                                                            .wali
                                                                    }
                                                                </p>
                                                                <p>
                                                                    <strong>
                                                                        Pekerjaan
                                                                        Wali :
                                                                    </strong>{" "}
                                                                    {
                                                                        student
                                                                            .parent
                                                                            .wali_occupation
                                                                    }
                                                                </p>
                                                                <p>
                                                                    <strong>
                                                                        No Telp
                                                                        Wali:
                                                                    </strong>{" "}
                                                                    {
                                                                        student
                                                                            .parent
                                                                            .wali_phone
                                                                    }
                                                                </p>
                                                                <p>
                                                                    <strong>
                                                                        Alamat
                                                                        Wali :
                                                                    </strong>{" "}
                                                                    {
                                                                        student
                                                                            .parent
                                                                            .address_wali
                                                                    }
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
                                                        <strong>
                                                            Nama Sekolah :
                                                        </strong>{" "}
                                                        {
                                                            student.prev_school
                                                                .name
                                                        }
                                                    </p>
                                                </section>
                                            </div>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Tutup
                                            </AlertDialogCancel>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>{" "}
                            {!studentRegist && (
                                <div className="flex p-4 bg-orange-200 mt-4  w-full flex-col">
                                    <span className="font-semibold">
                                        Lengkapi Dokumen
                                    </span>
                                    <span className="text-sm text-zinc-500">
                                        Mohon lengkapi Dokumen untuk mendaftar
                                        di MI Muhyiddin anda sebagai calon
                                        siswa. Pastikan data yang dimasukkan
                                        adalah data yang valid.
                                    </span>
                                </div>
                            )}
                            {studentRegist ? (
                                <div className="flex flex-col">
                                    <div className=" p-4  mt-2 flex-col md:flex-row  md:items-center px-6 bg-white border border-primary/50 rounded-xl md:justify-between flex text-zinc-600 gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-lg md:text-xl font-semibold">
                                                2. Dokumen Siswa
                                            </span>
                                            {studentRegister.note && (
                                                <span className="text-sm mt-2 text-red-500 font-semibold">
                                                    *{studentRegister.note}
                                                </span>
                                            )}
                                        </div>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button className="mt-4 md:mt-2 w-full md:w-auto">
                                                    Lihat Data
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="z-[120] w-[90%] h-[80vh] sm:max-w-[1000px] md:h-auto rounded-lg overflow-auto bg-white shadow-lg p-6">
                                                <AlertDialogHeader>
                                                    <div className="space-y-6 flex flex-col justify-center items-center md:block">
                                                        <section>
                                                            <h3 className="font-medium text-lg p-2 px-4 bg-primary text-white mb-4">
                                                                Dokumen
                                                            </h3>
                                                            <div className="grid grid-cols-1 md:gap-5 sm:grid-cols-2 gap-2">
                                                                <EditKK
                                                                    studentRegister={
                                                                        studentRegister
                                                                    }
                                                                />
                                                                <EditAkte
                                                                    studentRegister={
                                                                        studentRegister
                                                                    }
                                                                />
                                                                <EditIjazah
                                                                    studentRegister={
                                                                        studentRegister
                                                                    }
                                                                />
                                                                <EditKTP
                                                                    studentRegister={
                                                                        studentRegister
                                                                    }
                                                                />
                                                            </div>
                                                        </section>
                                                    </div>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>
                                                        Tutup
                                                    </AlertDialogCancel>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                    {studentRegister.status !==
                                        "verifikasi" && (
                                        <div className="flex flex-col opacity-50">
                                            <div className=" p-4  mt-2 flex-col md:flex-row  md:items-center px-6 bg-white border border-primary/50 rounded-xl md:justify-between flex text-zinc-600 gap-2">
                                                <div className="flex flex-col">
                                                    <span className="text-lg md:text-xl font-semibold">
                                                        3. Download Dokumen
                                                        untuk bukti bahwa anda
                                                        telah melengkapi data,
                                                        dokumen ini syarat untuk
                                                        mendaftar dan melakukan
                                                        pembayaran di MI
                                                        MUHYIDDIN
                                                    </span>
                                                </div>
                                                <Button
                                                    disabled={true}
                                                    className="mt-4 md:mt-2 w-full md:w-auto"
                                                >
                                                    <Download />
                                                    <span className="ml-2">
                                                        Donwload
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <CreateRegis
                                    studentRegister={studentRegister}
                                    id_auth={auth.user.student.id}
                                />
                            )}
                            {studentRegister.status === "verifikasi" && (
                                <div className="flex flex-col">
                                    <div className=" p-4  mt-2 flex-col md:flex-row  md:items-center px-6 bg-white border border-primary/50 rounded-xl md:justify-between flex text-zinc-600 gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-lg md:text-lg md:w-[90%] font-semibold">
                                                3. Download Dokumen untuk bukti
                                                bahwa anda telah melengkapi
                                                data, dokumen ini syarat untuk
                                                mendaftar dan melakukan
                                                pembayaran di MI MUHYIDDIN
                                            </span>
                                        </div>
                                        <Button
                                            asChild
                                            className="mt-4 md:mt-2 w-full md:w-auto"
                                        >
                                            <a
                                                target="_blank"
                                                href="/download/pdf"
                                            >
                                                <Download />
                                                <span className="ml-2">
                                                    Donwload
                                                </span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Welcome.layout = (page: any) => <GuestLayout head="Home" children={page} />;
