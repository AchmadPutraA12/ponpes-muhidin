import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { StudentRegister } from "@/types";
import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

interface EditProps {
    studentRegister: StudentRegister;
}
const EditKK = ({ studentRegister }: EditProps) => {
    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        kk: studentRegister.kk,
    });
    const [previewImage, setPreviewImage] = useState(null);
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setData({ ...data, kk: file });
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
    const submitkk = (e: any) => {
        e.preventDefault();
        router.post(
            route("user.update.kk", studentRegister.id),
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
                <strong>KK:</strong>{" "}
                <img
                    className="size-40 object-contain"
                    src={
                        previewImage
                            ? previewImage
                            : `/storage/${studentRegister.kk}`
                    }
                    alt=""
                />
                <div className="flex flex-col mt-4 items-center gap-4">
                    <a
                        href={`/storage/${studentRegister.kk}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Lihat Dokumen
                    </a>
                    {studentRegister.kk === null && (
                        <form onSubmit={submitkk}>
                            <Input
                                type="file"
                                name="kk"
                                id="kartu_keluarga"
                                className="hidden"
                                onChange={(e) => handleFileChange(e)}
                            />
                            <div className="flex items-center gap-2">
                                <Label
                                    htmlFor="kartu_keluarga"
                                    className="border cursor-pointer px-4 rounded-md py-3 border-black"
                                >
                                    Input Kartu Keluarga
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

export default EditKK;
