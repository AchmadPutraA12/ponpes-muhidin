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
import { ScheduleRegister, SchoolYear } from "@/types";
import { router, useForm } from "@inertiajs/react";
import { PenBoxIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import moment from "moment";
interface EditProps {
    scheduleRegister: ScheduleRegister;
}

const Edit = ({ scheduleRegister }: EditProps) => {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        first_date: scheduleRegister.first_date,
        last_date: scheduleRegister.last_date,
    });

    useEffect(() => {
        setData({
            first_date: scheduleRegister.first_date,
            last_date: scheduleRegister.last_date,
        });
    }, [scheduleRegister]);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.post(
            route("admin.schedule-register.update", scheduleRegister.id),
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
                                            htmlFor="first_date"
                                        >
                                            Tanggal Awal
                                        </Label>
                                        <Input
                                            type="date"
                                            id="first_date"
                                            name="first_date"
                                            value={data.first_date}
                                            onChange={(e) => {
                                                setData(
                                                    "first_date",
                                                    e.target.value
                                                );
                                                clearErrors("first_date");
                                            }}
                                        />
                                        <InputError
                                            message={errors.first_date}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="last_date"
                                        >
                                            Tanggal Akhir
                                        </Label>
                                        <Input
                                            type="date"
                                            id="last_date"
                                            name="last_date"
                                            value={data.last_date}
                                            onChange={(e) => {
                                                setData(
                                                    "last_date",
                                                    e.target.value
                                                );
                                                clearErrors("last_date");
                                            }}
                                        />
                                        <InputError
                                            message={errors.last_date}
                                        />
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
