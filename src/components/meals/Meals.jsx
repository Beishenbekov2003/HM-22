import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/fetchApi";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getMeals = async () => {
    try {
      setLoading(true);
      const response = await fetchApi("foods");

      setMeals(response.data);
    } catch (error) {
      console.log(error);
      setError("failed to Load meals");
    }
    setLoading(false);
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <Card>
      {isLoading && !error && <p>LOADING........</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {meals.map((meal, index) => {
        return <MealItem key={index} meal={meal} />;
      })}
    </Card>
  );
};

export default memo(Meals);

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 40px auto;
  padding: 40px;
`;
