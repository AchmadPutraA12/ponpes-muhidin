import InputError from "@/Components/InputError";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { SchoolYear } from "@/types";
import { router, useForm } from "@inertiajs/react";
import { PenBoxIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface EditProps {
    schoolYear: SchoolYear;
}

const Edit = ({ schoolYear }: EditProps) => {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        first_year: schoolYear.first_year,
        last_year: schoolYear.last_year,
        quota: schoolYear.quota || "",
    });

    useEffect(() => {
        setData({
            first_year: schoolYear.first_year,
            last_year: schoolYear.last_year,
            quota: schoolYear.quota,
        });
    }, [schoolYear]);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.post(
            route("admin.school-year.update", schoolYear.id),
            {
                ...data,
                _method: "put",
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: () => alert("Failed to update data"),
            }
        );
    };

    useEffect(() => {
        if (data.first_year) {
            setData("last_year", (parseInt(data.first_year) + 1).toString());
        }
    }, [data.first_year]);
    function handleReset() {
        reset("first_year", "last_year", "quota");
    }
    return (
        <>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild>
                    <Button
                        variant={"outline"}
                        onClick={() => setShowModal(true)}
                        size={"sm"}
                        className="hover:bg-red-100 border-orange-500"
                    >
                        <PenBoxIcon className="h-4 w-4 text-orange-500" />
                    </Button>
                </DialogTrigger>
                <DialogContent className=" z-[120] sm:max-w-[1000px] h-auto rounded-lg overflow-auto bg-background">
                    <DialogHeader>
                        <DialogTitle className="py-3 text-xl">
                            Update data Detail Pembayaran
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                        <form
                            className="bg-white border relative mt-4 space-y-4 rounded-xl p-4"
                            onSubmit={submit}
                        >
                            {processing && (
                                <Spinner className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2" />
                            )}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="first_year"
                                        >
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
                                                setData(
                                                    "first_year",
                                                    e.target.value
                                                );
                                                clearErrors("first_year");
                                            }}
                                        />
                                        <InputError
                                            message={errors.first_year}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="last_year"
                                        >
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
                                                setData(
                                                    "last_year",
                                                    e.target.value
                                                );
                                                clearErrors("last_year");
                                            }}
                                        />
                                        <InputError
                                            message={errors.last_year}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="quota"
                                        >
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
                                                setData(
                                                    "quota",
                                                    e.target.value
                                                );
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
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Edit;
