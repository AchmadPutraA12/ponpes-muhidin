import { StudentRegister } from "@/types";

interface Props {
    studentRegister: StudentRegister;
}

const isStudentDataRegist = ({ studentRegister }: Props): boolean => {
    if (studentRegister) {
        return (
            studentRegister.status !== null ||
            studentRegister.kk !== null ||
            studentRegister.akte !== null ||
            studentRegister.ijazah_tk !== null ||
            studentRegister.ktp !== null
        );
    }
    return false;
};

export default isStudentDataRegist;
