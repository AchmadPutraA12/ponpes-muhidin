import { Extracurricular } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import useLocalStorage from "use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Create from "./Create";
import { DataTableCustom } from "@/Components/DataTableCustom";
import { extracurricularColumns } from "../DataTable/columnExtracurricular";

interface Props {
    extracurricular: Extracurricular[];
}
export default function Dashboard({ extracurricular }: Props) {
    const [tabsValue, setTabsValue] = useLocalStorage(
        "ponpes_table_extracurricular",
        "ponpes_add_extracurricular"
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
                    <TabsTrigger value="ponpes_table_extracurricular">
                        Data Ekstrakurikuler
                    </TabsTrigger>
                    <TabsTrigger value="ponpes_add_extracurricular">
                        Tambah Ekstrakurikuler
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="ponpes_table_extracurricular">
                    <DataTableCustom
                        data={extracurricular}
                        columns={extracurricularColumns}
                    />
                </TabsContent>
                <TabsContent value="ponpes_add_extracurricular">
                    <Create />
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajamen Ekstrakurikuler"
        description="Halaman ini berfungsi sebagai halaman utama manajemen ekstrakurikuler"
        head="ekstrakurikuler"
        children={page}
    />
);
