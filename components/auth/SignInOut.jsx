'use client'

import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInOut() {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logout = () => {
        setAuth(null);
        router.push('/login')
    }
    return (
        <div>
            {
                auth ? (
                    <>
                        <span className="ml-2 bg-[#eb4a36] text-white rounded-full px-3 py-2">{auth?.firstName[0]}</span>
                        <span className="mx-1">|</span>
                        <a className="cursor-pointer py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center" onClick={logout}>Logout</a>
                    </>
                ) : (<Link href="/login" className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">Login</Link>)
            }
        </div>
    );
}