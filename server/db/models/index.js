const User = require('./user');
const db = require('../db');
const FridgeItems = require('./fridgeItems');
const Fridge = require('./fridge');
const Recipe = require('./recipe');

const RecipeUser = db.define('recipeUser', {});

User.belongsToMany(FridgeItems, { through: Fridge });
FridgeItems.belongsToMany(User, { through: Fridge });
// User.belongsToMany(Recipe, { through: RecipeUser });
Recipe.belongsToMany(User, { through: RecipeUser });

module.exports = {
  User,
  FridgeItems,
  Fridge,
  Recipe,
  RecipeUser,
};
