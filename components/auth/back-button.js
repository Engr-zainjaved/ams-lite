import { Button } from "../ui/button";
import Link from "next/link";


export const BackButton = ({ href, label }) => {
    return (
        <Button variant="link" className="font-norman w-full" size="sm" asChild>
            <Link href={href}>{label}</Link>
        </Button>
    );
};
