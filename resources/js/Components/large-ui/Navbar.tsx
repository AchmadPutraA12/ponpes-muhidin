import { LogOut, Menu, User2 } from "lucide-react";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "../ApplicationLogo";
import { PageProps } from "@/types";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
const Navbar = () => {
    const { url } = usePage();

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="w-full lg:px-16 lg:py-7 z-50 py-4 top-0 px-3 absolute flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Link href={"/"}>
                    {" "}
                    <h1 className="flex items-center gap-2 lg:gap-4">
                        <ApplicationLogo className=" size-12 md:size-14 lg:size-16 " />
                        <div className="flex  flex-col ">
                            <span className=" font-bold lg:text-2xl">
                                MI MUHYIDDIN
                            </span>
                            <span className="font-bold lg:text-lg">
                                SURABAYA
                            </span>
                        </div>
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-16">
                <div className="lg:flex items-center gap-6 hidden">
                    {" "}

                    {!auth.user ? (
                        <>
                            <Link
                                className={` ${url === "/" &&
                                    "text-primary font-semibold"
                                    }`}
                                href="/"
                                as="button"
                            >
                                Home
                            </Link>
                            <a
                                href="#biaya-pendaftaran"
                                onClick={(e) =>
                                    handleScroll(e, "biaya-pendaftaran")
                                }
                            >
                                Biaya Pendaftaran
                            </a>
                            <a
                                href="#jadwal"
                                onClick={(e) => handleScroll(e, "jadwal")}
                            >
                                Jadwal
                            </a>
                        </>
                    ) : (
                        <>
                            <Link
                                className={` ${url === "/" &&
                                    "text-primary font-semibold"
                                    }`}
                                href="/"
                                as="button"
                            >
                                Home
                            </Link>
                        </>
                    )}

                    <Link
                        className={` ${url === "/tentang-kami" &&
                            "text-primary font-semibold"
                            }`}
                        href="/tentang-kami"
                        as="button"
                    >
                        Tentang Kami
                    </Link>
                </div>
                {auth.user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className=" items-center gap-3  cursor-pointer flex">
                                <User2
                                    className="p-2 border rounded-full bg-primary text-white"
                                    size={44}
                                />
                                <div className=" flex-col w-auto hidden md:flex">
                                    <span className=" text-sm font-semibold  text-black">
                                        {auth.user.name}
                                    </span>
                                    <span className="text-xs font-medium text-gray-400 ">
                                        {auth.user.email}
                                    </span>
                                </div>
                                <svg
                                    className="hidden md:block ml-2 text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m7 10l5 5m0 0l5-5"
                                    ></path>
                                </svg>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mt-2 bg-white z-[110]">
                            <DropdownMenuLabel>Profil Saya</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuGroup>
                                <Link
                                    href={route("admin.profile.edit")}
                                    preserveState
                                >
                                    <DropdownMenuItem className=" cursor-pointer">
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup> */}
                            <DropdownMenuSeparator />
                            <Link href={route("logout")} method="post">
                                <DropdownMenuItem className=" cursor-pointer">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <div className="flex items-center gap-2">
                        <Button asChild>
                            <Link href={route("login")}>Login</Link>
                        </Button>
                        <Button
                            className="hidden lg:block"
                            asChild
                            variant={"outline"}
                        >
                            <Link href={route("register")}>Register</Link>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
