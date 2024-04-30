import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export interface CardProps {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, date, imageUrl, description }) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  const recipeContent = (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Method:🍕</h3>
      <p>
        Yeast: - I use Platinum Yeast from Red Star. I have the best results
        when I use this instant yeast. The Platinum yeast is fantastic because
        its careful formula strengthens your dough and makes making working with
        yeast simple. You only need 1 standard packet of yeast (2 and 1/4
        teaspoons) to get the job done.
      </p>
      <p className=" mt-3">
        Water: - I tested this pizza dough recipe with different amounts of
        water. 1 and 1/3 cups is the perfect amount. Use warm water to cut down
        on rise time, about 100-110°F. Anything over 130ºF kills the yeast.
      </p>
      <p className=" mt-3">
        Flour: - Use unbleached all-purpose white flour in this recipe.
        Bleaching the flour strips away some of the protein, which will affect
        how much water the flour absorbs. You can substitute bread flour for a
        chewier pizza crust. If you love whole grain bread, try this whole wheat
        pizza dough instead.
      </p>
      <p className=" mt-3">
        Oil: - A couple Tablespoons of extra virgin olive oil adds wonderful
        flavor to the dough. Don’t forget to brush the dough with olive oil
        before adding the toppings, which prevents the crust from tasting soggy.
      </p>
      <p className=" mt-3">Salt: Salt adds necessary flavor.</p>

      <p className=" mt-3">
        Sugar: - 1 Tablespoon of sugar increases the yeast’s activity and
        tenderizes the dough, especially when paired with a little olive oil.
      </p>

      <p className=" mt-3">
        Cornmeal: - Cornmeal isn’t in the dough, but it’s used to dust the pizza
        pan. Cornmeal gives the pizza crust a little extra flavor and crisp.
        Most delivery pizzas you enjoy have cornmeal on the bottom crust!
      </p>
    </div>
  );

  return (
    <div className="bg-white w-[345px]  shadow-md rounded-md p-4 ml-[321px] mt-10 relative">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="mr-2 text-3xl relative top-1"
            onClick={toggleRecipe}
          >
            {showRecipe ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <button className="mr-2 text-3xl">
            <FcLike />
          </button>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Share
          </button>
        </div>
      </div>
      {showRecipe && recipeContent}
    </div>
  );
};

export default Card;
