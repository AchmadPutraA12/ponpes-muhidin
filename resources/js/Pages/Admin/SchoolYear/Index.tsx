import { Extracurricular, SchoolYear } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import useLocalStorage from "use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { DataTableCustom } from "@/Components/DataTableCustom";
import { extracurricularColumns } from "../DataTable/columnExtracurricular";
import Create from "./Create";
import { schoolYearColumns } from "../DataTable/columnSchoolYear";

interface Props {
    schoolYears: SchoolYear[];
}
export default function Dashboard({ schoolYears }: Props) {
    // console.log(schoolYears);
    const [tabsValue, setTabsValue] = useLocalStorage(
        "ponpes_table_schoolyear",
        "ponpes_add_schoolyear"
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
                    <TabsTrigger value="ponpes_table_schoolyear">
                        Data Tahun Ajaran
                    </TabsTrigger>
                    <TabsTrigger value="ponpes_add_schoolyear">
                        Tambah Tahun Ajaran
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="ponpes_table_schoolyear">
                    <DataTableCustom
                        data={schoolYears}
                        columns={schoolYearColumns}
                    />
                </TabsContent>
                <TabsContent value="ponpes_add_schoolyear">
                    <Create />
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajamen Tahun Ajaran"
        description="Halaman ini berfungsi sebagai halaman utama manajemen tahun ajaran"
        head="tahun ajaran"
        children={page}
    />
);
