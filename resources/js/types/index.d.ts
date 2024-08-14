export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    student: Student;
}

export interface Extracurricular {
    id: number;
    name: string;
    image: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface DetailPayment {
    id: number;
    description: string;
    price: number;
    created_at: string;
    updated_at: string;
}

export interface SchoolYear {
    id: number;
    first_year: string;
    last_year: string;
    quota: number;
    is_active: number;
    created_at: string;
    updated_at: string;
    schedule_register: ScheduleRegister;
    first_date_formatted: string;
    last_date_formatted: string;
    students: Student[];
}

export interface ScheduleRegister {
    id: number;
    first_date: string;
    last_date: string;
    school_year_id: number;
    created_at: string;
    updated_at: string;
    school_year: SchoolYear;
}

export interface Student {
    id: number;
    gender: string | null;
    birth_date: string | null;
    address: string | null;
    nis: string | null;
    student_prev_school_id: number | null;
    student_parent_id: number | null;
    user_id: number;
    created_at: string;
    updated_at: string;
    parent: StudentParent;
    prev_school: PrevSchool;
    school_year: SchoolYear;
    pivot: StudentRegister;
    user: User;
}

export interface StudentParent {
    id: number;
    father: string | null;
    father_occupation: string | null;
    father_phone: string | null;
    mother: string | null;
    mother_occupation: string | null;
    mother_phone: string | null;
    wali: string | null;
    wali_occupation: string | null;
    wali_phone: string | null;
    address_father: string | null;
    address_mother: string | null;
    address_wali: string | null;
    choice: string | null;
    created_at: string;
    updated_at: string;
}

export interface PrevSchool {
    id: number;
    name: string | null;
    created_at: string;
    updated_at: string;
}

export interface StudentRegister {
    id: number;
    student_id: number;
    school_year_id: number;
    status?: null | string;
    note: string;
    kk: null | string;
    akte: null | string;
    ijazah_tk: null | string;
    ktp: null | string;
    created_at: string;
    updated_at: string;
    student: Student;
}

export interface Transaction {
    id: number;
    student_register_id: number;
    invoice: string;
    amount: number;
    date: string;
    status: string;
    created_at: string;
    updated_at: string;
    first_year: string;
    last_year: string;
    name: string;
    student_id: number;
    nis: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    flash: {
        success: string;
        error: string;
    };
    schoolYear: SchoolYear;
};
