import FileInput from "@/Components/FileInput";
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
import { DetailPayment, PageProps, User } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";
import { PenBoxIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface EditProps {
    detailPayment: DetailPayment;
}

const Edit = ({ detailPayment }: EditProps) => {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        description: detailPayment.description,
        price: detailPayment.price,
    });

    const [displayPrice, setDisplayPrice] = useState(
        formatRupiah(detailPayment.price.toString())
    );

    useEffect(() => {
        setData({
            description: detailPayment.description,
            price: detailPayment.price,
        });
        setDisplayPrice(formatRupiah(detailPayment.price.toString()));
    }, [detailPayment]);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.post(
            route("admin.detail-payment.update", detailPayment.id),
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

        rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
        return rupiah;
    }

    function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
        const rawValue: any = e.target.value.replace(/\./g, "");
        setData("price", rawValue);
        setDisplayPrice(formatRupiah(rawValue));
        clearErrors("price");
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
                                            htmlFor="description"
                                        >
                                            Deskripsi
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Deskripsi pembayaran ini ..."
                                            id="description"
                                            name="description"
                                            value={data.description}
                                            onChange={(e) => {
                                                setData(
                                                    "description",
                                                    e.target.value
                                                );
                                                clearErrors("description");
                                            }}
                                        />
                                        <InputError
                                            message={errors.description}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            variant={"wajib"}
                                            htmlFor="price"
                                        >
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
                                        setDisplayPrice(
                                            formatRupiah(
                                                detailPayment.price.toString()
                                            )
                                        );
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
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Edit;
