"use client";

import { useRouter } from "next/navigation";


export const LoginButton = ({ children, mode = "redirect", asChild }) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    };

    if (mode === "modal") {
        return <p>TODO: implement modal</p>;
    }

    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    );
};
