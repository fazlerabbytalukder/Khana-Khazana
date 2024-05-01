import { getAllRecipe } from "@/db/queries";
import { dbConnect } from "@/services/mongo";
import Link from "next/link";

export default async function RecipesList() {
    await dbConnect();
    const allRecipe = await getAllRecipe();
    const uniqueCategories = Array.from(new Set(allRecipe.map(recipe => recipe.category)));
    // console.log(uniqueCategories);
    return (
        <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                {uniqueCategories.map(category => (
                    <li key={category}>
                        <Link href={`category/${category}`}>
                            <span>{category}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}