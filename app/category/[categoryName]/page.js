import Loading from "@/components/Loading";
import Recipe from "@/components/landing/Recipe";
import { getRecipesByCategory } from "@/db/queries";
import { dbConnect } from "@/services/mongo";
import { Suspense } from "react";

export default async function CategoryPage({ params: { categoryName } }) {
    await dbConnect();
    const decodedCategoryName = decodeURIComponent(categoryName.replace(/\+/g, ' '));
    const breakfastRecipes = await getRecipesByCategory(decodedCategoryName);
    // console.log(breakfastRecipes);
    return (
        <section className="container py-8">
            <div>

                <h3 className="font-semibold text-xl">{decodedCategoryName}</h3>

                <Suspense fallback={<Loading />}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                        {
                            breakfastRecipes.map((recipe) => (
                                <Recipe recipe={recipe} key={recipe.id} />
                            ))
                        }
                    </div>
                </Suspense>
            </div>
        </section>
    );
}