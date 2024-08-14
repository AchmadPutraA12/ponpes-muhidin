import {
    ActivityIcon,
    BadgeDollarSign,
    CalendarCheck,
    CalendarClock,
    DollarSign,
    LayoutDashboard,
    User2Icon,
} from "lucide-react";
import SidebarItem from "../SidebarItem";

const SidebarAdmin = () => {
    let variantUrl = window.location.pathname;
    return (
        <aside className=" hidden lg:block bg-background w-64 left-0 h-screen top-0 fixed">
            <div className="pt-[88px] px-8 flex flex-col justify-between h-full">
                <ul className="mt-6 font-medium text-sm flex flex-col ">
                    <SidebarItem
                        href={route("admin.dashboard.index")}
                        icon={LayoutDashboard}
                        label="Dashboard"
                        isActive={variantUrl === "/admin/dashboard"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.extracurricular.index")}
                        icon={ActivityIcon}
                        label="Ekstrakulikuler"
                        isActive={variantUrl === "/admin/ekstrakulikuler"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.detail-payment.index")}
                        icon={BadgeDollarSign}
                        label="Detail Pembayaran"
                        isActive={variantUrl === "/admin/detail-pembayaran"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.school-year.index")}
                        icon={CalendarCheck}
                        label="Tahun Ajaran"
                        isActive={variantUrl === "/admin/tahun-ajaran"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.schedule-register.index")}
                        icon={CalendarClock}
                        label="Jadwal Pendaftaran"
                        isActive={variantUrl === "/admin/jadwal-pendaftaran"}
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
                        isActive={variantUrl === "/admin/transaksi"}
                    />{" "}
                </ul>
                <div className="mb-5 flex flex-col justify-center items-center">
                    <span className="text-xs font-semibold">
                        © 2024 - MI MUHYIDDIN
                    </span>
                    <span className="text-xs text-zinc-600">
                        All rights reserved
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default SidebarAdmin;
