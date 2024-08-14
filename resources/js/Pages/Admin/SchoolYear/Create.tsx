import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

const Create: React.FC = () => {
    const { data, setData, errors, processing, reset, post, clearErrors } =
        useForm({
            first_year: "",
            last_year: "",
            quota: "",
        });

    // Update last_year dynamically based on first_year
    useEffect(() => {
        if (data.first_year) {
            setData("last_year", (parseInt(data.first_year) + 1).toString());
        }
    }, [data.first_year]);
    function handleReset() {
        reset("first_year", "last_year", "quota");
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("admin.school-year.store"), {
            forceFormData: true,
            onSuccess: () => {
                reset("first_year", "last_year", "quota");
            },
            preserveScroll: true,
            preserveState: true,
        });
    }

    return (
        <form
            className="bg-white border relative mt-4 space-y-4 rounded-xl p-4"
            onSubmit={handleSubmit}
        >
            {processing && (
                <Spinner className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2" />
            )}
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="first_year">
                            Tahun Awal
                        </Label>
                        <Input
                            type="text"
                            maxLength={4}
                            placeholder="2021"
                            id="first_year"
                            name="first_year"
                            value={data.first_year}
                            onChange={(e) => {
                                setData("first_year", e.target.value);
                                clearErrors("first_year");
                            }}
                        />
                        <InputError message={errors.first_year} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="last_year">
                            Tahun Akhir
                        </Label>
                        <Input
                            disabled
                            maxLength={4}
                            type="text"
                            placeholder="2021"
                            id="last_year"
                            name="last_year"
                            value={data.last_year}
                            onChange={(e) => {
                                setData("last_year", e.target.value);
                                clearErrors("last_year");
                            }}
                        />
                        <InputError message={errors.last_year} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="quota">
                            Kuota Calon Siswa
                        </Label>
                        <Input
                            maxLength={4}
                            type="number"
                            placeholder="100"
                            id="quota"
                            name="quota"
                            value={data.quota}
                            onChange={(e) => {
                                setData("quota", e.target.value);
                                clearErrors("quota");
                            }}
                        />
                        <InputError message={errors.quota} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-full gap-3">
                <Button
                    type="reset"
                    disabled={processing}
                    size={"lg"}
                    variant={"outline"}
                    className="mt-5"
                    onClick={handleReset}
                >
                    Reset
                </Button>
                <Button
                    type="submit"
                    disabled={processing}
                    size={"lg"}
                    className="text-white mt-5"
                >
                    Simpan
                </Button>
            </div>
        </form>
    );
};

export default Create;
