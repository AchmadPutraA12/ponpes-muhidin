import EditData from "@/Components/EditData";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Extracurricular } from "@/types";
import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

interface EditProps {
    extra: Extracurricular;
}

const Edit = ({ extra }: EditProps) => {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        image: extra.image,
        name: extra.name,
        description: extra.description,
    });
    useEffect(() => {
        setData({
            ...data,
            image: extra.image,
            name: extra.name,
            description: extra.description,
        });
    }, [extra]);

    const submit = (e: any) => {
        e.preventDefault();
        router.post(
            route("admin.extracurricular.update", extra.id),
            {
                ...data,
                _method: "put",
                forceFormData: true,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setShowModal(false);
                },
            }
        );
    };

    const [previewImage, setPreviewImage] = useState(null);
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setData({ ...data, image: file });
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

    return (
        <EditData
            dialogTitle="Edit Ekstrakurikuler"
            showModal={showModal}
            setShowModal={setShowModal}
        >
            <form onSubmit={submit}>
                <div className="flex flex-col gap-4 ">
                    <div className="mb-4 flex flex-col gap-2">
                        <div className="flex items-center justify-center  w-full  mt-2">
                            <div className="relative">
                                <img
                                    className=" object-contain size-80  rounded-xl"
                                    src={
                                        previewImage
                                            ? previewImage
                                            : window.location.origin +
                                              "/storage/" +
                                              data.image
                                    }
                                />
                            </div>
                        </div>

                        <div className=" items-center gap-2 ">
                            <Input
                                id="foto"
                                type="file"
                                className="w-full px-4 py-2"
                                name="foto"
                                onChange={(e) => handleFileChange(e)}
                            />
                        </div>

                        <span className="text-red-600">{errors.image}</span>
                    </div>{" "}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <Label variant={"wajib"} htmlFor="name">
                                Nama
                            </Label>
                            <Input
                                type="text"
                                placeholder="John Doe"
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
                        <div className="flex flex-col gap-3">
                            <Label variant={"wajib"} htmlFor="email">
                                Deskripsi
                            </Label>
                            <Input
                                type="text"
                                placeholder="eksul ini adalah ..."
                                id="email"
                                name="email"
                                value={data.description}
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                    clearErrors("description");
                                }}
                            />
                            <InputError message={errors.description} />
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-full flex gap-4  justify-end">
                    {" "}
                    <Button
                        className="w-1/2"
                        disabled={processing}
                        type="submit"
                    >
                        Save
                    </Button>
                </div>
            </form>
        </EditData>
    );
};

export default Edit;
