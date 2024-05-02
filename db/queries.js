import { userModel } from "@/models/user-model";
import { dbConnect } from "@/services/mongo";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import mongoose from "mongoose";

const { recipeModel } = require("@/models/recipe-model");

async function getAllRecipe() {
    await dbConnect();
    const allRecepies = await recipeModel.find().lean();
    return replaceMongoIdInArray(allRecepies);
}

async function getRecipesByCategory(category) {
    await dbConnect();
    try {
        const recipes = await recipeModel.find({ category }).lean();
        return replaceMongoIdInArray(recipes);
    } catch (error) {
        console.error("Error fetching recipes by category:", error);
        throw error; // Rethrow the error for higher-level handling
    }
}

async function getRecipeById(recipeId) {
    await dbConnect();
    const recipe = await recipeModel.findById(recipeId).lean();
    return replaceMongoIdInObject(recipe);
}

async function createUser(user) {
    await dbConnect();
    return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
    await dbConnect();
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

async function getUserById(userId) {
    await dbConnect();
    const user = await userModel.findById(userId).lean();
    return replaceMongoIdInObject(user);
}

async function getAllUser() {
    await dbConnect();
    const allUser = await userModel.find().lean();
    return replaceMongoIdInArray(allUser);
}

async function updateFavourite(recipeId, authId) {
    await dbConnect();
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

