interface Recipe {
  name: string;
  ingredients: string[];
  cookingMinutes: number;
}

const completeRecipe: Required<Recipe> = {
  name: "Vegetable Pasta",
  ingredients: ["Pasta", "Tomato", "Capsicum"],
  cookingMinutes: 25
};

console.log("Recipe:", completeRecipe);
