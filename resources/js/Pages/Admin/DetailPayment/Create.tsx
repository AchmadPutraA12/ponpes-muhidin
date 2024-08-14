import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

const Create: React.FC = () => {
    const { data, setData, errors, processing, reset, post, clearErrors } =
        useForm({
            description: "",
            price: "",
        });

    const [displayPrice, setDisplayPrice] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("admin.detail-payment.store"), {
            forceFormData: true,
            onSuccess: () => {
                reset("description", "price");
                setDisplayPrice("");
            },
            preserveScroll: true,
            preserveState: true,
        });
    }

    function formatRupiah(value: string) {
        const numberString = value.replace(/[^,\d]/g, "").toString();
        const split = numberString.split(",");
        const sisa = split[0].length % 3;
        let rupiah = split[0].substr(0, sisa);
        const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        if (ribuan) {
            const separator = sisa ? "." : "";
            rupiah += separator + ribuan.join(".");
        }

        rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
        return rupiah;
    }

    function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
        const rawValue = e.target.value.replace(/\./g, "");
        setData("price", rawValue);
        setDisplayPrice(formatRupiah(rawValue));
        clearErrors("price");
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
                        <Label variant={"wajib"} htmlFor="description">
                            Deskripsi
                        </Label>
                        <Input
                            type="text"
                            placeholder="Deskripsi pembayaran ini ..."
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => {
                                setData("description", e.target.value);
                                clearErrors("description");
                            }}
                        />
                        <InputError message={errors.description} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label variant={"wajib"} htmlFor="price">
                            Harga
                        </Label>
                        <Input
                            type="text"
                            placeholder="Rp 100.000"
                            id="price"
                            name="price"
                            value={displayPrice}
                            onChange={handlePriceChange}
                        />
                        <InputError message={errors.price} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-full gap-3">
                <Button
                    type="reset"
                    disabled={processing}
                    size={"lg"}
                    variant={"outline"}
                    onClick={() => {
                        reset("description", "price");
                        setDisplayPrice("");
                    }}
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
    );
};

export default Create;
