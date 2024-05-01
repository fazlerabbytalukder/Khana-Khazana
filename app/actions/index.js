"use server";

import { createUser, findUserByCredentials, updateFavourite } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect("/login");
}

async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}

// console.log(recipeId, authId);

async function addFavourite(recipeId, authId) {
    try {
        await updateFavourite(recipeId, authId);
        // console.log(recipeId, authId);
    } catch (error) {
        throw error;
    }
    revalidatePath(`/details/${recipeId}`);
}

export { addFavourite, performLogin, registerUser };

