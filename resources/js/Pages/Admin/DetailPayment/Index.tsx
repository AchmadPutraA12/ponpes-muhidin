import { DetailPayment, Extracurricular, PageProps, User } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import useLocalStorage from "use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Create from "./Create";
import { DataTableCustom } from "@/Components/DataTableCustom";
import { detailPaymentColumns } from "../DataTable/columnDetailPayment";

interface Props {
    detailPayment: DetailPayment[];
}
export default function Dashboard({ detailPayment }: Props) {
    console.log(detailPayment);
    const [tabsValue, setTabsValue] = useLocalStorage(
        "ponpes_table_detailPayment",
        "ponpes_add_detailPayment"
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
                    <TabsTrigger value="ponpes_table_detailPayment">
                        Data detail pembayaran
                    </TabsTrigger>
                    <TabsTrigger value="ponpes_add_detailPayment">
                        Tambah detail pembayaran
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="ponpes_table_detailPayment">
                    <DataTableCustom
                        data={detailPayment}
                        columns={detailPaymentColumns}
                    />
                </TabsContent>
                <TabsContent value="ponpes_add_detailPayment">
                    <Create />
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajamen Penghuni"
        description="Halaman ini berfungsi sebagai halaman utama manajemen penghuni"
        head="penghuni"
        children={page}
    />
);
