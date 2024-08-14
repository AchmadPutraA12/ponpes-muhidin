import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "./ui/button";
import { AlertCircle, CircleXIcon, TrashIcon } from "lucide-react";
import { router } from "@inertiajs/react";
import { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";

interface Props {
    paramId: string;
}
const DeleteData = ({ paramId }: Props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Dialog onOpenChange={setShowModal} open={showModal}>
                <DialogTrigger>
                    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Button
                                    onClick={() => setShowModal(true)}
                                    variant={"outline"}
                                    size={"sm"}
                                    className=" hover:bg-red-100/20 border-red-500"
                                >
                                    {" "}
                                    <TrashIcon className="h-4  w-4 text-red-500" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Hapus</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>{" "}
                </DialogTrigger>
                <DialogContent className="bg-background">
                    <DialogHeader>
                        <DialogTitle className="mt-2">
                            Apakah anda yakin ingin menghapus?
                        </DialogTitle>
                        <div className="text-sm flex">
                            Tindakan ini tidak bisa dibatalkan. Ini akan hapus
                            data anda, apakah anda yakin ingin melanjutkan ?
                        </div>
                    </DialogHeader>
                    <div className="mt-4 flex items-center justify-end gap-4">
                        <Button
                            variant={"outline"}
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                router.delete(`${paramId}`, {
                                    preserveScroll: true,
                                });
                                setShowModal(false);
                            }}
                        >
                            Continue
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DeleteData;
