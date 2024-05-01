import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import mongoose from "mongoose";

const { recipeModel } = require("@/models/recipe-model");

async function getAllRecipe() {
    const allRecepies = await recipeModel.find().lean();
    return replaceMongoIdInArray(allRecepies);
}

async function getRecipesByCategory(category) {
    try {
        const recipes = await recipeModel.find({ category }).lean();
        return replaceMongoIdInArray(recipes);
    } catch (error) {
        console.error("Error fetching recipes by category:", error);
        throw error; // Rethrow the error for higher-level handling
    }
}

async function getRecipeById(recipeId) {
    const recipe = await recipeModel.findById(recipeId).lean();
    return replaceMongoIdInObject(recipe);
}

async function createUser(user) {
    return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

async function getUserById(userId) {
    const user = await userModel.findById(userId).lean();
    return replaceMongoIdInObject(user);
}

async function getAllUser() {
    const allUser = await userModel.find().lean();
    return replaceMongoIdInArray(allUser);
}

async function updateFavourite(recipeId, authId) {
    // console.log(recipeId, authId);

    const user = await userModel.findById(authId);

    if (user) {
        const foundUsers = user.favourites.find(id => id.toString() === recipeId);

        if (foundUsers) {
            user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
        } else {
            user.favourites.push(new mongoose.Types.ObjectId(recipeId));
        }

        user.save();
    }


}

export {
    createUser, findUserByCredentials, getAllRecipe, getAllUser, getRecipeById, getRecipesByCategory, getUserById, updateFavourite
};

