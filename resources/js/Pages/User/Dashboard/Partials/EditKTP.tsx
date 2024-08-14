import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { StudentRegister } from "@/types";
import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

interface EditProps {
    studentRegister: StudentRegister;
}
const EditKTP = ({ studentRegister }: EditProps) => {
    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        ktp: studentRegister.ktp,
    });
    const [previewImage, setPreviewImage] = useState(null);
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setData({ ...data, ktp: file });
        const reader: any = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };
    const submit = (e: any) => {
        e.preventDefault();
        router.post(
            route("user.update.ktp", studentRegister.id),
            {
                ...data,
                _method: "put",
                forceFormData: true,
            },
            {
                preserveScroll: true,
            }
        );
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <strong>KTP :</strong>{" "}
                <img
                    className="size-40 object-contain"
                    src={
                        previewImage
                            ? previewImage
                            : `/storage/${studentRegister.ktp}`
                    }
                    alt=""
                />
                <div className="flex flex-col mt-4 items-center gap-4">
                    <a
                        href={`/storage/${studentRegister.ktp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Lihat Dokumen
                    </a>
                    {studentRegister.ktp === null && (
                        <form onSubmit={submit}>
                            <Input
                                type="file"
                                name="ktp"
                                id="ktp"
                                className="hidden"
                                onChange={(e) => handleFileChange(e)}
                            />
                            <div className="flex items-center gap-2">
                                <Label
                                    htmlFor="ktp"
                                    className="border cursor-pointer px-4 rounded-md py-3 border-black"
                                >
                                    Input KTP
                                </Label>
                                {previewImage && (
                                    <Button disabled={processing} type="submit">
                                        Save
                                    </Button>
                                )}
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default EditKTP;
