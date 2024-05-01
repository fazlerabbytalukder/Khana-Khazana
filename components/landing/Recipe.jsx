import { getBlurData } from "@/utils/blur-generator";
import Image from "next/image";
import Link from "next/link";

export default async function Recipe({ recipe }) {
    const { base64 } = await getBlurData(recipe?.thumbnail);
    return (
        <div className="card">
            <Image
                className="rounded-md"
                src={recipe?.thumbnail}
                alt="recipes"
                width={300}
                height={160}
                placeholder="blur"
                blurDataURL={base64} />
            <Link href={`/details/${recipe?.id}`} className="my-2">{recipe?.name}</Link>
            <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ {recipe?.rating}.0</span>
                <span>By: {recipe?.author}</span>
            </div>
        </div>
    );
}