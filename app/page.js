import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black">
      <div className="space-y-6 text-center">
        <h1 className={"text-3xl font-semibold text-white drop-shadow-md"}>
          ✈ Airline Management System
        </h1>
        <p className="text-white text-lg drop-shadow-md">A simple database project</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              SignIn
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
