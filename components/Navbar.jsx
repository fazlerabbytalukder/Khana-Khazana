import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";

export default function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex justify-between py-6">
                <Link href="/">
                    <Image
                        className="object-cover h-[54px]"
                        src="/logo.svg"
                        alt="kana-kajana"
                        width={165}
                        height={54} />
                </Link>

                <ul className="flex items-center gap-4 text-sm text-gray-500">
                    <li className="py-2">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="py-2">
                        <Link href="/recipe">Recipe</Link>
                    </li>

                    <li className="py-2">
                        <Link href="/about">About us</Link>
                    </li>

                    <li>
                        <SignInOut />
                    </li>
                </ul>
            </div>
        </nav>
    );
}