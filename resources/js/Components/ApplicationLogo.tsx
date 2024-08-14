interface Props {
    className?: string;
}

import { cn } from "@/lib/utils";
import Logo from "../../../public/Logo/Logo.png";

const ApplicationLogo: React.FC<Props> = ({ className }: Props) => {
    return <img src={Logo} className={cn("h-10 w-auto", className)} alt="" />;
};

export default ApplicationLogo;
