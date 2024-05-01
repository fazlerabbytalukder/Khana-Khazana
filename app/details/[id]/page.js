import DetailsCard from "@/components/recipeDetails/DetailsCard";
import HowToMake from "@/components/recipeDetails/HowToMake";
import { getRecipeById } from "@/db/queries";
import { dbConnect } from "@/services/mongo";

export async function generateMetadata({ params, searchParams }, parent) {
    await dbConnect();
    // read route params
    const id = params.id;
    const pageUrl = process.env.NEXT_PUBLIC_SITE_URI;

    const recipeInfo = await getRecipeById(id);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: recipeInfo.name.slice(0, 100),
        description: recipeInfo.description.slice(0, 100),
        openGraph: {
            images: [
                {
                    url: `http://localhost:3000/api/og?title=${recipeInfo.name.slice(
                        0,
                        100
                    )}`,
                    width: 1200,
                    height: 600,
                },
            ],
        },
    };
}

export default async function DetailsPage({ params: { id } }) {
    const recipeInfo = await getRecipeById(id);

    // console.log(recipeInfo);
    return (
        <>
            <DetailsCard recipeInfo={recipeInfo} />
            <HowToMake steps={recipeInfo?.steps} />
        </>
    );
}