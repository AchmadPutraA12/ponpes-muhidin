import Checkbox from "@/Components/Checkbox";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { PageProps, SchoolYear } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { NotebookIcon, Users2Icon } from "lucide-react";
import { useState } from "react";

interface CreateProps {
    schoolYear: SchoolYear;
    id_auth: number;
}
const Create = ({ schoolYear, id_auth }: CreateProps) => {
    const { data, setData, errors, processing, reset, post, clearErrors } =
        useForm({
            gender: "",
            birth_date: "",
            address: "",
            name: "",
            father: "",
            father_occupation: "",
            father_phone: "",
            mother: "",
            mother_occupation: "",
            mother_phone: "",
            wali: "",
            wali_occupation: "",
            wali_phone: "",
            address_wali: "",
            address_mother: "",
            address_father: "",
            choice: "orang tua",
        });

    const { auth } = usePage<PageProps>().props;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(
            route("user.data-about-student.store", {
                school_year_id: schoolYear.id,
            }),
            {
                forceFormData: true,
                onSuccess: () => {
                    reset("gender", "birth_date", "address");
                },
            }
        );
    }

    const [checked, setChecked] = useState(false);
    return (
        <form onSubmit={handleSubmit}>
            {processing && (
                <Spinner className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2" />
            )}
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-4 ">
                    {" "}
                    <div className="flex flex-col gap-3">
                        <Label>Nama Siswa</Label>
                        <Input type="text" disabled value={auth.user.name} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="birth_date">
                            Tanggal Lahir
                        </Label>
                        <Input
                            type="date"
                            placeholder="Jl Merak No. 2, Surabaya"
                            id="birth_date"
                            name="birth_date"
                            value={data.birth_date}
                            onChange={(e) => {
                                setData("birth_date", e.target.value);
                                clearErrors("birth_date");
                            }}
                        />
                        <InputError message={errors.birth_date} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="gender">
                            Jenis Kelamin
                        </Label>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="Laki-laki"
                                    checked={data.gender === "Laki-laki"}
                                    onChange={(e) => {
                                        setData("gender", e.target.value);
                                        clearErrors("gender");
                                    }}
                                    className="mr-2"
                                />
                                <label htmlFor="male">Laki-laki</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Perempuan"
                                    checked={data.gender === "Perempuan"}
                                    onChange={(e) => {
                                        setData("gender", e.target.value);
                                        clearErrors("gender");
                                    }}
                                    className="mr-2"
                                />
                                <label htmlFor="female">Perempuan</label>
                            </div>
                        </div>
                        <InputError message={errors.gender} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="address">
                            Alamat
                        </Label>
                        <Input
                            type="text"
                            placeholder="Jl Merak No. 2, Surabaya"
                            id="address"
                            name="address"
                            value={data.address}
                            onChange={(e) => {
                                setData("address", e.target.value);
                                clearErrors("address");
                            }}
                        />
                        <InputError message={errors.address} />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex p-4 bg-primary/30  text-zinc-600 items-center gap-2">
                        <Users2Icon className="size-8" />
                        <span className="text-xl font-semibold">
                            Orang Tua/Wali
                        </span>
                    </div>

                    <div className=" flex flex-col gap-4 mt-5">
                        <div className="flex flex-col gap-3">
                            <Label variant={"wajib"}>
                                Pilih Orang Tua/Wali
                            </Label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="orang tua"
                                        name="choice"
                                        value="orang tua"
                                        checked={data.choice === "orang tua"}
                                        onChange={(e) => {
                                            setData("choice", e.target.value);
                                            clearErrors("choice");
                                        }}
                                        className="mr-2"
                                    />
                                    <label htmlFor="orang tua">Orang Tua</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="wali"
                                        name="choice"
                                        value="wali"
                                        checked={data.choice === "wali"}
                                        onChange={(e) => {
                                            setData("choice", e.target.value);
                                            clearErrors("choice");
                                        }}
                                        className="mr-2"
                                    />
                                    <label htmlFor="wali">Wali</label>
                                </div>
                            </div>
                            <InputError message={errors.choice} />
                        </div>
                        {data.choice === "orang tua" ? (
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    {" "}
                                    <span className="w-full justify-center items-center flex bg-primary/30 text-black font-semibold py-3">
                                        Ayah
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="father"
                                        >
                                            Nama ayah
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="ahmad sobaqi"
                                            id="father"
                                            name="father"
                                            value={data.father}
                                            onChange={(e) => {
                                                setData(
                                                    "father",
                                                    e.target.value
                                                );
                                                clearErrors("father");
                                            }}
                                        />
                                        <InputError message={errors.father} />
                                    </div>{" "}
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="father_occupation"
                                        >
                                            Pekerjaan ayah
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="PNS"
                                            id="father_occupation"
                                            name="father_occupation"
                                            value={data.father_occupation}
                                            onChange={(e) => {
                                                setData(
                                                    "father_occupation",
                                                    e.target.value
                                                );
                                                clearErrors(
                                                    "father_occupation"
                                                );
                                            }}
                                        />
                                        <InputError
                                            message={errors.father_occupation}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="address_father"
                                        >
                                            Alamat ayah
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Jl Merak No. 2, Surabaya"
                                            id="address_father"
                                            name="address_father"
                                            value={data.address_father}
                                            onChange={(e) => {
                                                setData(
                                                    "address_father",
                                                    e.target.value
                                                );
                                                clearErrors("address_father");
                                            }}
                                        />
                                        <InputError
                                            message={errors.address_father}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="father_phone"
                                        >
                                            Nomor HP ayah/WhatsApp
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="081234567890"
                                            id="father_phone"
                                            name="father_phone"
                                            value={data.father_phone}
                                            onChange={(e) => {
                                                setData(
                                                    "father_phone",
                                                    e.target.value
                                                );
                                                clearErrors("father_phone");
                                            }}
                                        />
                                        <InputError
                                            message={errors.father_phone}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {" "}
                                    <span className="w-full justify-center items-center flex bg-primary/30 text-black font-semibold py-3">
                                        Ibu
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="mother"
                                        >
                                            Nama ibu
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Siti Nurhalimah"
                                            id="mother"
                                            name="mother"
                                            value={data.mother}
                                            onChange={(e) => {
                                                setData(
                                                    "mother",
                                                    e.target.value
                                                );
                                                clearErrors("mother");
                                            }}
                                        />
                                        <InputError message={errors.mother} />
                                    </div>{" "}
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="mother_occupation"
                                        >
                                            Pekerjaan ibu
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="PNS"
                                            id="mother_occupation"
                                            name="mother_occupation"
                                            value={data.mother_occupation}
                                            onChange={(e) => {
                                                setData(
                                                    "mother_occupation",
                                                    e.target.value
                                                );
                                                clearErrors(
                                                    "mother_occupation"
                                                );
                                            }}
                                        />
                                        <InputError
                                            message={errors.mother_occupation}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="address_mother"
                                        >
                                            Alamat ibu
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Jl Merak No. 2, Surabaya"
                                            id="address_mother"
                                            name="address_mother"
                                            value={data.address_mother}
                                            onChange={(e) => {
                                                setData(
                                                    "address_mother",
                                                    e.target.value
                                                );
                                                clearErrors("address_mother");
                                            }}
                                        />
                                        <InputError
                                            message={errors.address_mother}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="mother_phone"
                                        >
                                            Nomor HP ibu/WhatsApp
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="081234567890"
                                            id="mother_phone"
                                            name="mother_phone"
                                            value={data.mother_phone}
                                            onChange={(e) => {
                                                setData(
                                                    "mother_phone",
                                                    e.target.value
                                                );
                                                clearErrors("mother_phone");
                                            }}
                                        />
                                        <InputError
                                            message={errors.mother_phone}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {" "}
                                <span className="w-full justify-center items-center flex bg-primary/30 text-black font-semibold py-3">
                                    Wali
                                </span>
                                <div className="flex flex-col gap-3">
                                    <Label variant={"wajib"} htmlFor="wali">
                                        Nama wali
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Siti Nurhalimah"
                                        id="wali"
                                        name="wali"
                                        value={data.wali}
                                        onChange={(e) => {
                                            setData("wali", e.target.value);
                                            clearErrors("wali");
                                        }}
                                    />
                                    <InputError message={errors.wali} />
                                </div>{" "}
                                <div className="flex flex-col gap-3">
                                    <Label
                                        variant={"wajib"}
                                        htmlFor="wali_occupation"
                                    >
                                        Pekerjaan wali
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="PNS"
                                        id="wali_occupation"
                                        name="wali_occupation"
                                        value={data.wali_occupation}
                                        onChange={(e) => {
                                            setData(
                                                "wali_occupation",
                                                e.target.value
                                            );
                                            clearErrors("wali_occupation");
                                        }}
                                    />
                                    <InputError
                                        message={errors.wali_occupation}
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label
                                        variant={"wajib"}
                                        htmlFor="address_wali"
                                    >
                                        Alamat wali
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Jl Merak No. 2, Surabaya"
                                        id="address_wali"
                                        name="address_wali"
                                        value={data.address_wali}
                                        onChange={(e) => {
                                            setData(
                                                "address_wali",
                                                e.target.value
                                            );
                                            clearErrors("address_wali");
                                        }}
                                    />
                                    <InputError message={errors.address_wali} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label
                                        variant={"wajib"}
                                        htmlFor="wali_phone"
                                    >
                                        Nomor HP wali/WhatsApp
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="081234567890"
                                        id="wali_phone"
                                        name="wali_phone"
                                        value={data.wali_phone}
                                        onChange={(e) => {
                                            setData(
                                                "wali_phone",
                                                e.target.value
                                            );
                                            clearErrors("wali_phone");
                                        }}
                                    />
                                    <InputError message={errors.wali_phone} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>{" "}
                <div className="  mt-4">
                    <div className="flex p-4 bg-primary/30  text-zinc-600 items-center gap-2">
                        <NotebookIcon className="size-8" />
                        <span className="text-xl font-semibold">
                            Asal Sekolah
                        </span>
                    </div>
                    <div className=" mt-5">
                        <div className="flex flex-col gap-3">
                            <Label variant={"wajib"} htmlFor="name">
                                Nama asal sekolah
                            </Label>
                            <Input
                                type="text"
                                placeholder="Jl Merak No. 2, Surabaya"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => {
                                    setData("name", e.target.value);
                                    clearErrors("name");
                                }}
                            />
                            <InputError message={errors.name} />
                        </div>
                    </div>{" "}
                    <div className="flex   gap-3 mt-6">
                        <Checkbox
                            checked={checked}
                            onChange={(e) => {
                                setChecked(e.target.checked);
                            }}
                            id="terms"
                            className=" mt-1"
                        />
                        <label
                            htmlFor="terms"
                            className="text-sm text-zinc-500"
                        >
                            Saya menyetujui syarat dan ketentuan yang berlaku.
                            Saya memahami bahwa semua data siswa, orang tua/wali
                            dan asal sekolah yang telah saya lengkapi adalah
                            benar dan valid. Data yang lengkap dan valid akan
                            mempercepat proses pendaftaran.
                        </label>
                    </div>
                </div>{" "}
                <div className="flex justify-end w-full gap-3">
                    <Button
                        type="reset"
                        disabled={processing}
                        size={"lg"}
                        variant={"outline"}
                        className="mt-5"
                    >
                        Reset
                    </Button>
                    <Button
                        type="submit"
                        disabled={processing || !checked}
                        size={"lg"}
                        className="text-white mt-5"
                    >
                        Simpan
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Create;
