import { Link, usePage } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { PageProps } from "@/types";
import { LogOut, MenuIcon, UserCog2Icon } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/Components/ui/sheet";
import {
    ActivityIcon,
    BadgeDollarSign,
    CalendarCheck,
    CalendarClock,
    DollarSign,
    LayoutDashboard,
    User2Icon,
} from "lucide-react";

import ApplicationLogo from "../ApplicationLogo";
import SidebarItem from "../SidebarItem";
const NavbarAdmin = () => {
    const { auth } = usePage<PageProps>().props;
    let variantUrl = window.location.pathname;

    return (
        <nav className="w-full bg-background flex px-4 justify-between py-3 lg:px-10 items-center z-10 top-0 fixed">
            <h1 className="lg:flex hidden items-center mt-2 gap-2 lg:gap-4">
                <ApplicationLogo className=" size-12 md:size-14" />
                <div className="flex  flex-col ">
                    <span className=" font-bold">MI MUHYIDDIN</span>
                    <span className="font-bold ">SURABAYA</span>
                </div>
            </h1>
            <div className="flex items-center gap-3 lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetDescription className="flex flex-col justify-between">
                                {" "}
                                <ul className="mt-6 font-medium text-sm flex flex-col gap-2">
                                    <SidebarItem
                                        href={route("admin.dashboard.index")}
                                        icon={LayoutDashboard}
                                        label="Dashboard"
                                        isActive={
                                            variantUrl === "/admin/dashboard"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route(
                                            "admin.extracurricular.index"
                                        )}
                                        icon={ActivityIcon}
                                        label="Ekstrakulikuler"
                                        isActive={
                                            variantUrl ===
                                            "/admin/ekstrakulikuler"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route(
                                            "admin.detail-payment.index"
                                        )}
                                        icon={BadgeDollarSign}
                                        label="Detail Pembayaran"
                                        isActive={
                                            variantUrl ===
                                            "/admin/detail-pembayaran"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route("admin.school-year.index")}
                                        icon={CalendarCheck}
                                        label="Tahun Ajaran"
                                        isActive={
                                            variantUrl === "/admin/tahun-ajaran"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route(
                                            "admin.schedule-register.index"
                                        )}
                                        icon={CalendarClock}
                                        label="Jadwal Pendaftaran"
                                        isActive={
                                            variantUrl ===
                                            "/admin/jadwal-pendaftaran"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route("admin.student.index")}
                                        icon={User2Icon}
                                        label="Siswa Pendaftar"
                                        isActive={variantUrl === "/admin/siswa"}
                                    />{" "}
                                    <SidebarItem
                                        href={route("admin.transaction.index")}
                                        icon={DollarSign}
                                        label="Transaksi"
                                        isActive={
                                            variantUrl === "/admin/transaksi"
                                        }
                                    />{" "}
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className=" items-center gap-3  cursor-pointer flex">
                        <UserCog2Icon
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
                        <Link href={route("admin.profile.edit")} preserveState>
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
        </nav>
    );
};

export default NavbarAdmin;
