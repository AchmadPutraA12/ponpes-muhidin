import Checkbox from "@/Components/Checkbox";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { PageProps, SchoolYear, StudentRegister } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { NotebookIcon, Users2Icon } from "lucide-react";
import { useCallback, useState } from "react";

interface CreateProps {
    studentRegister: StudentRegister;
    id_auth: number;
}

const CreateRegis = ({ studentRegister, id_auth }: CreateProps) => {
    const { data, setData, errors, processing, reset, post, clearErrors } =
        useForm({
            kk: "",
            akte: "",
            ijazah_tk: "",
            ktp: "",
        });

    const handleDrop = useCallback(
        (acceptedFiles: any) => {
            setData("kk", acceptedFiles[0]);
        },
        [setData]
    );

    const handleDrop2 = useCallback(
        (acceptedFiles: any) => {
            setData("akte", acceptedFiles[0]);
        },
        [setData]
    );

    const handleDrop3 = useCallback(
        (acceptedFiles: any) => {
            setData("ijazah_tk", acceptedFiles[0]);
        },
        [setData]
    );

    const handleDrop4 = useCallback(
        (acceptedFiles: any) => {
            setData("ktp", acceptedFiles[0]);
        },
        [setData]
    );

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(
            route("user.student-document.store", {
                id: studentRegister.id,
            }),
            {
                forceFormData: true,

                onSuccess: () => {
                    reset("kk", "akte", "ijazah_tk", "ktp");
                    handleDrop([]);
                    handleDrop2([]);
                    handleDrop3([]);
                    handleDrop4([]);
                },
            }
        );
    }

    const [checked, setChecked] = useState(false);

    const isChecked = () => {
        return (
            data.kk !== "" &&
            data.akte !== "" &&
            data.ijazah_tk !== "" &&
            data.ktp !== ""
        );
    };

    return (
        <form onSubmit={handleSubmit} className="mb-10">
            {processing && (
                <Spinner className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2" />
            )}
            <div className="flex flex-col gap-4 mt-6">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Label variant={"wajib"}>
                            Upload Kartu Keluarga (Gambar)
                        </Label>
                    </div>
                    <FileInput onDrop={handleDrop} accept={"image/*"} />
                    <InputError message={errors.kk} />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Label variant={"wajib"}>
                            Upload Akte Kelahiran (Gambar)
                        </Label>
                    </div>
                    <FileInput onDrop={handleDrop2} accept={"image/*"} />
                    <InputError message={errors.akte} />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Label variant={"wajib"}>
                            Upload Ijazah Sekolah TK (Gambar)
                        </Label>
                    </div>
                    <FileInput onDrop={handleDrop3} accept={"image/*"} />
                    <InputError message={errors.ijazah_tk} />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Label variant={"wajib"}>Upload KTP (Gambar)</Label>
                    </div>
                    <FileInput onDrop={handleDrop4} accept={"image/*"} />
                    <InputError message={errors.ktp} />
                </div>
                <div className="flex gap-3 mt-6">
                    <Checkbox
                        checked={checked && isChecked()}
                        onChange={(e) => {
                            setChecked(e.target.checked);
                        }}
                        className="mt-1"
                        id="terms-and-conditions"
                    />
                    <label
                        htmlFor="terms-and-conditions"
                        className="text-sm text-zinc-500"
                    >
                        Saya menyetujui syarat dan ketentuan yang berlaku. Saya
                        memahami bahwa semua data siswa, guru, dan asal sekolah
                        yang telah saya lengkapi adalah benar dan valid. Data
                        yang lengkap dan valid akan mempercepat proses
                        pendaftaran.
                    </label>
                </div>
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
                        disabled={processing || !checked || !isChecked()}
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

export default CreateRegis;
