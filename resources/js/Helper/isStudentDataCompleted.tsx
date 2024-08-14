import { Student } from "@/types";

interface Props {
    student: Student;
}

const isStudentDataCompleted = ({ student }: Props): boolean => {
    if (!student.parent) {
        return false;
    }

    const baseChecks =
        student.gender !== null &&
        student.birth_date !== null &&
        student.address !== null;

    if (!baseChecks) {
        return false;
    }

    if (student.parent.choice === "orang tua") {
        return (
            student.parent.father !== null &&
            student.parent.father_occupation !== null &&
            student.parent.father_phone !== null &&
            student.parent.mother !== null &&
            student.parent.mother_occupation !== null &&
            student.parent.mother_phone !== null &&
            student.parent.address_father !== null &&
            student.parent.address_mother !== null
        );
    } else if (student.parent.choice === "wali") {
        return (
            student.parent.wali !== null &&
            student.parent.wali_occupation !== null &&
            student.parent.wali_phone !== null &&
            student.parent.address_wali !== null
        );
    }

    return false;
};

export default isStudentDataCompleted;
