"use client";

import { addFavourite } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FavButton({ recipeInfo, allUser }) {
    const { auth } = useAuth();
    const router = useRouter();

    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        // console.log("isFavourite updated:", isFavourite);
        if (auth) {
            const foundUser = allUser.find(user => user.id === auth.id);
            setIsFavourite(foundUser?.favourites?.includes(recipeInfo?.id) || false);
        }
    }, [auth, allUser]); // Update isFavourite on changes in auth or allUser

    const toggleFavourite = async () => {
        try {
            if (auth) {
                await addFavourite(recipeInfo?.id, auth?.id);
                setIsFavourite(!isFavourite); // Update UI state directly on success
            } else {
                router.push("/login");
            }
        } catch (error) {
            console.error("Error occurred while adding favourite:", error);
        }
    };

    return (
        <button onClick={toggleFavourite} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
            <span className={`flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36] ${isFavourite ? 'text-red-600' : ''}`}>Favourite</span>
        </button>
    );
}