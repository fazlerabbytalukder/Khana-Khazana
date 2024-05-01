import { Suspense } from "react";
import Loading from "../Loading";
import Recipes from "./Recipes";
import RecipesList from "./RecipesList";

export default function AllRecipes() {
    return (
        <section className="container py-8">
            <div className="grid grid-cols-12 py-4">
                <RecipesList />
                <Suspense fallback={<Loading />}>
                    <Recipes />
                </Suspense>
            </div>
        </section>
    );
}