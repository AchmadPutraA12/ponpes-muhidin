import {
    DetailPayment,
    Extracurricular,
    PageProps,
    SchoolYear,
    Transaction,
    User,
} from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import useLocalStorage from "use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { useState } from "react";
import { DataTableCustom } from "@/Components/DataTableCustom";
import { transactionColumns } from "../DataTable/columnTransaction";

interface Props {
    transaction: Transaction[];
    schoolYears: SchoolYear[];
}

export default function Dashboard({ transaction, schoolYears }: Props) {
    const [tabsValue, setTabsValue] = useLocalStorage(
        "ponpes_table_detailPayment",
        "ponpes_table_detailPayment"
    );

    const handleTabsChange = (value: string) => {
        setTabsValue(value);
    };

    const [filterBySchoolYear, setFilterBySchoolYear] = useState<{
        first_year: string;
        last_year: string;
    } | null>(null);

    const handleSchoolYearChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const [first_year, last_year] = event.target.value.split("-");
        setFilterBySchoolYear({ first_year, last_year });
    };

    const filteredTransactions = filterBySchoolYear
        ? transaction.filter(
              (trans) =>
                  trans.first_year === filterBySchoolYear.first_year &&
                  trans.last_year === filterBySchoolYear.last_year
          )
        : transaction;

    return (
        <>
            <Tabs
                defaultValue={tabsValue}
                onValueChange={handleTabsChange}
                className="mt-5"
            >
                <TabsList className="bg-brandy-rose-100">
                    <TabsTrigger value="ponpes_table_detailPayment">
                        Data
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="ponpes_table_detailPayment">
                    <DataTableCustom
                        data={filteredTransactions}
                        columns={transactionColumns}
                    >
                        <div>
                            <div>
                                <select
                                    onChange={handleSchoolYearChange}
                                    value={
                                        filterBySchoolYear
                                            ? `${filterBySchoolYear.first_year}-${filterBySchoolYear.last_year}`
                                            : ""
                                    }
                                >
                                    <option value="">Pilih Tahun Ajaran</option>
                                    {schoolYears.map((schoolYear) => (
                                        <option
                                            key={schoolYear.id}
                                            value={`${schoolYear.first_year}-${schoolYear.last_year}`}
                                        >
                                            {schoolYear.first_year}/
                                            {schoolYear.last_year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </DataTableCustom>
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajamen Transaksi"
        description="Halaman ini berfungsi sebagai halaman utama manajemen transaksi"
        head="transaksi"
        children={page}
    />
);
