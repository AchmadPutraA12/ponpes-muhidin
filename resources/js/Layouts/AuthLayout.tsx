import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="min-h-screen flex justify-center p-2 sm:justify-center items-center ">
                <div className="  max-w-lg flex gap-4 h-full  md:p-8  rounded-xl">
                    {" "}
                    <div className="w-full   px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>{" "}
                </div>
            </div>
        </>
    );
}
