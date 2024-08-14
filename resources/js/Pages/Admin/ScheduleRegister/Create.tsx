import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import SelectOptionCustom from "@/Components/SelectOptionCustom";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { SchoolYear } from "@/types";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

interface CreateProps {
    schoolYears: SchoolYear[];
}
const Create = ({ schoolYears }: CreateProps) => {
    const { data, setData, errors, processing, reset, post, clearErrors } =
        useForm({
            first_date: "",
            last_date: "",
            school_year_id: "",
        });
    console.log(schoolYears);
    function handleReset() {
        reset("first_date", "last_date", "school_year_id");
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("admin.schedule-register.store"), {
            forceFormData: true,
            onSuccess: () => {
                reset("first_date", "last_date", "school_year_id");
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
                        <Label variant={"wajib"} htmlFor="first_date">
                            Tanggal Awal
                        </Label>
                        <Input
                            type="date"
                            id="first_date"
                            name="first_date"
                            value={data.first_date}
                            onChange={(e) => {
                                setData("first_date", e.target.value);
                                clearErrors("first_date");
                            }}
                        />
                        <InputError message={errors.first_date} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="last_date">
                            Tanggal Akhir
                        </Label>
                        <Input
                            type="date"
                            id="last_date"
                            name="last_date"
                            value={data.last_date}
                            onChange={(e) => {
                                setData("last_date", e.target.value);
                                clearErrors("last_date");
                            }}
                        />
                        <InputError message={errors.last_date} />
                    </div>
                    <SelectOptionCustom
                        optionName="Pilih Tahun Ajaran"
                        htmlFor="school_year_id"
                        labelName="Tahun Ajaran"
                        optionMap={schoolYears.map((item, index) => {
                            return (
                                <option value={item.id} key={index}>
                                    {item.first_year}/{item.last_year}
                                </option>
                            );
                        })}
                        errors={errors.school_year_id}
                        selectOptionProps={{
                            name: "school_year_id",
                            value: data.school_year_id,
                            onChange: (e: any) => {
                                setData({
                                    ...data,
                                    school_year_id: e.target.value,
                                });
                            },
                        }}
                    />{" "}
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
