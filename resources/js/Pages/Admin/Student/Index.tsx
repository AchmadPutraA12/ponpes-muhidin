import { useEffect, useState } from "react";
import { Extracurricular, SchoolYear, Student, StudentRegister } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import useLocalStorage from "use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { DataTableCustom } from "@/Components/DataTableCustom";
import { schoolYearColumns } from "../DataTable/columnSchoolYear";
import { studentColumns } from "../DataTable/columnStudent";

interface Props {
    studentRegister: StudentRegister[];
    schoolYears: SchoolYear[];
}

export default function Dashboard({ studentRegister, schoolYears }: Props) {
    const [tabsValue, setTabsValue] = useLocalStorage(
        "ponpes_table_student",
        ""
    );

    const handleTabsChange = (value: string) => {
        setTabsValue(value);
    };
    const [filterBySchoolYear, setFilterBySchoolYear] = useState<number | null>(
        null
    );

    const handleSchoolYearChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedSchoolYearId = parseInt(event.target.value);
        setFilterBySchoolYear(selectedSchoolYearId);
    };

    const filteredStudents = filterBySchoolYear
        ? studentRegister.filter(
              (student) => student.school_year_id === filterBySchoolYear
          )
        : studentRegister;

    return (
        <>
            <Tabs
                defaultValue={tabsValue}
                onValueChange={handleTabsChange}
                className="mt-5"
            >
                <TabsList className="bg-brandy-rose-100">
                    <TabsTrigger value="ponpes_table_student">
                        Data Tahun Ajaran
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="ponpes_table_student">
                    <DataTableCustom
                        data={filteredStudents}
                        columns={studentColumns}
                    >
                        <div>
                            <select
                                onChange={handleSchoolYearChange}
                                value={filterBySchoolYear || ""}
                            >
                                <option value="">Pilih Tahun Ajaran</option>
                                {schoolYears.map((schoolYear) => (
                                    <option
                                        key={schoolYear.id}
                                        value={schoolYear.id}
                                    >
                                        {schoolYear.first_year}/
                                        {schoolYear.last_year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </DataTableCustom>
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajemen Siswa"
        description="Halaman ini berfungsi sebagai halaman utama manajemen siswa"
        head="siswa"
        children={page}
    />
);
