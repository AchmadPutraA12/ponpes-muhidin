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
import { ScheduleRegister, SchoolYear, StudentRegister } from "@/types";
import { router, useForm } from "@inertiajs/react";
import { PenBoxIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import moment from "moment";
import SelectOptionCustom from "@/Components/SelectOptionCustom";
interface EditProps {
    studentRegister: StudentRegister;
}

const Edit = ({ studentRegister }: EditProps) => {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        status: studentRegister.status,
        note: studentRegister.note,
    });

    useEffect(() => {
        setData({
            status: studentRegister.status,
            note: studentRegister.note,
        });
    }, [studentRegister]);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.post(
            route("admin.student.update", studentRegister.id),
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

    const status = ["proses", "verifikasi", "gagal verifikasi"];
    return (
        <>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild>
                    <Button
                        variant={"secondary"}
                        onClick={() => setShowModal(true)}
                        size={"sm"}
                    >
                        <span>Perbarui Status</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className=" z-[120] sm:max-w-[500px] h-auto rounded-lg overflow-auto bg-background">
                    <DialogHeader>
                        <DialogTitle className=" py-3 text-xl">
                            Update Status
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
                                {" "}
                                <SelectOptionCustom
                                    optionName="Pilih Tahun Ajaran"
                                    htmlFor="status"
                                    labelName="Tahun Ajaran"
                                    optionMap={status.map((item, index) => {
                                        return (
                                            <option
                                                value={item.valueOf()}
                                                key={index}
                                            >
                                                {item.valueOf()}
                                            </option>
                                        );
                                    })}
                                    errors={errors.status}
                                    selectOptionProps={{
                                        name: "status",
                                        value: data.status,
                                        onChange: (e: any) => {
                                            setData({
                                                ...data,
                                                status: e.target.value,
                                            });
                                        },
                                    }}
                                />{" "}
                                <div className="flex flex-col gap-3">
                                    <Label variant={"optional"} htmlFor="note">
                                        Catatan
                                    </Label>
                                    <Input
                                        type="text"
                                        id="note"
                                        name="note"
                                        value={data.note}
                                        onChange={(e) => {
                                            setData("note", e.target.value);
                                            clearErrors("note");
                                        }}
                                    />
                                    <InputError message={errors.note} />
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
