import { ScheduleRegister, SchoolYear } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import useLocalStorage from "use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Create from "./Create";
import { scheduleRegisterColumns } from "../DataTable/columnScheduleRegister";
import { DataTableCustom } from "@/Components/DataTableCustom";

interface Props {
    scheduleRegister: ScheduleRegister[];
    schoolYear: SchoolYear[];
}
export default function Dashboard({ scheduleRegister, schoolYear }: Props) {
    console.log(schoolYear);
    const [tabsValue, setTabsValue] = useLocalStorage(
        "ponpes_table_scheduleRegister",
        "ponpes_add_scheduleRegister"
    );

    const handleTabsChange = (value: string) => {
        setTabsValue(value);
    };
    return (
        <>
            <Tabs
                defaultValue={tabsValue}
                onValueChange={handleTabsChange}
                className="mt-5"
            >
                <TabsList className="bg-brandy-rose-100">
                    <TabsTrigger value="ponpes_table_scheduleRegister">
                        Data Jadwal Pendaftaran
                    </TabsTrigger>
                    <TabsTrigger value="ponpes_add_scheduleRegister">
                        Tambah Jadwal Pendaftaran
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="ponpes_table_scheduleRegister">
                    <DataTableCustom
                        data={scheduleRegister}
                        columns={scheduleRegisterColumns}
                    />
                </TabsContent>
                <TabsContent value="ponpes_add_scheduleRegister">
                    <Create schoolYears={schoolYear} />
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajamen Jadwal Pendaftaran"
        description="Halaman ini berfungsi sebagai halaman utama manajemen jadwal pendaftaran"
        head="jadwal-pendaftaran"
        children={page}
    />
);
