import { DetailPayment, PageProps, SchoolYear, total } from "@/types";
import GuestLayout from "@/Layouts/GuestLayout";
import BGhero from "../../../public/bg/hero.png";
import { Button } from "@/Components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import Poster from "../../../public/event/poster.png";
import { useEffect, useState } from "react";
import BGformRegis from "../../../public/bg/register-form.jpg";
import { FormatRupiah } from "@arismun/format-rupiah";

interface Props {
    detailPayment: DetailPayment[];
    schoolYear: SchoolYear;
    total :number;
}
export default function Welcome({ detailPayment, schoolYear, total }: Props) {
    console.log(total)
    return (
        <>
            <div className="h-screen z-10 w-full  ">
                <span className="absolute -top-7 -left-32 bg-green-100/70 rounded-r-full -z-10 rotate-45 w-1/2 h-3/4"></span>
                <div className="flex px-8 lg:px-40 xl:px-16  z-30 gap-24 items-center justify-center h-screen w-full">
                    <div className="flex flex-col lg:w-1/2">
                        <h1 className="flex flex-col text-3xl lg:text-5xl xl:text-6xl">
                            <span className=" font-bold">
                                Selamat Datang di{" "}
                            </span>
                            <span className="text-primary font-bold">
                                MI Muhyiddin Surabaya
                            </span>
                            <span className="text-zinc-700 font-semibold text-lg lg:text-3xl mt-3">
                                {" "}
                                Tahun Ajaran {schoolYear.first_year}/
                                {schoolYear.last_year}
                            </span>
                        </h1>{" "}
                        <h2 className="text-sm md:text-lg mt-2 font-medium text-zinc-500 lg:text-xl">
                            MI Muhyiddin bukan hanya tempat belajar, tetapi juga
                            tempat bermain dan berteman. Dengan guru-guru yang
                            ramah dan fasilitas yang lengkap, kami membantu
                            anak-anak tumbuh cerdas dan ceria. Jadikan MI
                            Muhyiddin pilihan utama untuk masa depan yang cerah!
                        </h2>
                        <div className="mt-6  flex items-center gap-4">
                            <Button
                                size={"lg"}
                                asChild
                                variant={"outline"}
                                className="font-semibold md:hidden "
                            >
                                <Link
                                    classID="flex items-center gap-2"
                                    href={route("tentang-kami.index")}
                                >
                                    Tentang Kami
                                </Link>
                            </Button>{" "}
                            <Button
                                size={"lg"}
                                asChild
                                className="font-semibold "
                            >
                                <Link
                                    classID="flex items-center gap-2"
                                    href={route("login")}
                                >
                                    Daftar Sekarang <ChevronRight size={16} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/2 hidden lg:block max-w-xl relative z-20">
                        <img
                            src={BGhero}
                            className="size-[450px] z-30 object-cover  "
                            alt=""
                        />
                        <span className="absolute top-6 w-64 -z-10 rotate-45 rounded-full  right-0 bg-green-200 h-16"></span>
                        <span className="absolute top-14 w-72 -z-10 rotate-45 rounded-full  right-10 bg-green-300 h-16"></span>
                        <span className="absolute bottom-0 w-64 -z-10 rotate-45 rounded-full  -left-28 bg-green-300 h-16"></span>
                        <span className="absolute bottom-6 w-72 -z-10 rotate-45 rounded-full  -left-20 bg-green-500 h-16"></span>
                    </div>
                </div>
            </div>{" "}
            <div className=" w-full bg-green-200/70">
                <div className="container w-ful py-10 md:p-20">
                    <h1 className="text-3xl lg:text-5xl font-bold text-center">
                        Visi & Misi
                    </h1>
                    <div className="flex mt-2 md:mt-8 items-center justify-center gap-20">
                        <div className="flex flex-col gap-6 max-w-5xl">
                            <img src="" alt="" />
                            <h2 className="text-base md:text-2xl font-bold">
                                Terwujudnya Lulusan MI Muhyiddin yang beriman
                                dan bertaqwa kepada Allah SWT, Berakhlakul
                                Karimah serta berkemampuan dalam Ilmu
                                Pengetahuan dan Tehnologi. serta berwawasan
                                Keislaman dan Kebangsaan.
                            </h2>
                            <ul className="flex ml-4 list-decimal flex-col gap-2 text-sm nd:text-lg">
                                <li>
                                    meningkatkan keimanan dan ketaqwaan kepada
                                    Allah SWT.
                                </li>

                                <li>membina siswa berakhaul karimah</li>
                                <li>
                                    mengoptimalkan kemampuan siswa dalam ilmu
                                    pengetahuan, tehnologi dengan iman dan taqwa
                                    kepada Tuhan Yang Maha Esa.
                                </li>
                                <li>
                                    mengembangkan mutu madrasah agar mampu
                                    bersaing dengan lembaga pendidikan lain
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className=" w-full py-10 md:p-20" id="jadwal">
                <div className="container w-full ">
                    <h1 className="text-3xl lg:text-5xl font-bold text-center">
                        Jadwal Pendaftaran
                    </h1>
                    <div className="flex mt-4 flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                        <img
                            className="w-full max-w-[450px]"
                            src={BGformRegis}
                            alt=""
                        />
                        <div className="flex flex-col">
                            <div className="max-w-xl">
                                <span className="text-xl md:text-3xl font-semibold">
                                    Ayo segera daftarkan dirimu di MI Muhyiddin
                                    dan raih masa depan gemilang!
                                </span>
                                <span className="text-base md:text-xl text-zinc-500 mt-4 block">
                                    Bergabunglah dengan kami untuk mendapatkan
                                    pendidikan terbaik dan berbagai fasilitas
                                    unggulan.
                                </span>
                            </div>
                            <div className="mt-6 justify-center text-center font-bold text-lg md:text-3xl py-4 rounded-xl px-4 bg-primary flex items-center gap-2">
                                <span className="text-white">
                                    {schoolYear.first_date_formatted} s/d{" "}
                                    {schoolYear.last_date_formatted}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full" id="biaya-pendaftaran">
                <div className="container w-full py-10 md:p-20">
                    <h1 className="text-3xl lg:text-5xl font-bold text-center">
                        Biaya Pendaftaran
                    </h1>
                    <div className="flex mt-14 items-center justify-center gap-20">
                        <div className="flex flex-col gap-2 bg-white p-1 rounded-md w-full max-w-xl ">
                            <div className=" flex flex-col gap-2">
                                {detailPayment.map((payment) => (
                                    <div
                                        key={payment.id}
                                        className="grid grid-cols-3"
                                    >
                                        <span className="text-sm md:text-xl col-span-2 text-primary font-semibold">
                                            {payment.description}
                                        </span>
                                        <div className="flex justify-end">
                                            <span className="text-xs md:text-lg font-semibold cols-span-1 text-primary">
                                                <FormatRupiah
                                                    value={payment.price}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <hr className="w-full border border-primary my-2" />
                                <div className="w-full flex items-center justify-between  ">
                                    {" "}
                                    <span className="text-xl  text-primary font-bold">
                                        TOTAL BIAYA{" "}
                                    </span>{" "}
                                    <span className="text-lg font-semibold  text-primary">
                                        <FormatRupiah value={total} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-auto py-10 px-4 lg:p-20 lg:pb-40 bg-white flex justify-center items-center">
                <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-8  w-full">
                    <div className="flex px-4 flex-col max-w-md">
                        <h2 className=" text-2xl lg:text-5xl font-semibold text-black">
                            Kontak Kami
                        </h2>
                        <span className="text-xl mt-4 lg:mt-10  font-medium text-zinc-500">
                            Jika Anda ingin memberikan kami masukan, jangan ragu
                            untuk menghubungi kami. Kami selalu senang mendengar
                            dari Anda!
                        </span>{" "}
                        <span className="text-xl lg:text-3xl mt-8 font-semibold text-black">
                            Informasi Alamat MI
                        </span>
                        <div className="flex flex-col mt-6 gap-2">
                            <span>
                                Jl. Gebang Kidul No.64-66, Gebang Putih, Kec.
                                Sukolilo
                            </span>
                            <hr />
                        </div>{" "}
                        <div className="flex flex-col mt-4 gap-2">
                            <span>Surabaya</span>
                            <hr />
                        </div>{" "}
                        <div className="flex flex-col mt-4 gap-2">
                            <span>Jawa Timur 60117</span>
                            <hr />
                        </div>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.630091252474!2d112.78570197499994!3d-7.282860992724436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1512c38a77%3A0x446c38d9c2764957!2sPondok%20Pesantren%20Muhyiddin%20(NU)!5e0!3m2!1sid!2sid!4v1722620414597!5m2!1sid!2sid"
                        className=" size-[300px] md:size-[400px] lg:size-[450px]"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>{" "}
        </>
    );
}

Welcome.layout = (page: any) => (
    <GuestLayout
        head="Home"
        description="Pondok pesantren muhyiddin merupakan salah satu pesantren yang ada di Kota Surabaya. Adapun belajar mengajar di pesantren ini menggunakan kurikulum yang berlaku di tambah dengan ilmu agama. Ada juga kegiatan-kegiatan ekstrakulikuler sekolah untuk santri seperti karate, basket, futsal, grup belajar dan lainnya."
        children={page}
    />
);
