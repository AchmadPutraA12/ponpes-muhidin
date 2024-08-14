import GuestLayout from "@/Layouts/GuestLayout";
import { Extracurricular } from "@/types";

interface Props {
    extracurricular: Extracurricular[];
}
export default function Welcome({ extracurricular }: Props) {
    return (
        <>
            <div className=" pt-20  mb-20 px-3 lg:px-44 lg:pt-32 w-full relative">
                <div className="w-full flex justify-center">
                    <h1 className="text-3xl  text-primary  px-6 py-8 md:py-4 rounded-xl text-center lg:text-5xl font-bold">
                        Ekstrakurikuler
                    </h1>
                </div>

                <div className="grid grid-cols-1 px-4 md:px-0 md:mt-20 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
                    {extracurricular.map((extracurricular) => (
                        <div
                            className="flex flex-col gap-4"
                            key={extracurricular.id}
                        >
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl lg:text-4xl font-semibold">
                                    {extracurricular.name}
                                </h1>
                                <img
                                    className="w-full h-[200px] object-cover rounded-xl"
                                    src={`/storage/${extracurricular.image}`}
                                    alt=""
                                />
                                <p className="text-sm lg:text-lg text-zinc-500">
                                    {extracurricular.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

Welcome.layout = (page: any) => <GuestLayout head="Home" children={page} />;
