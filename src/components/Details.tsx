import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [onePizza, setOnePizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
  }>();

  console.log(onePizza);
  useEffect(() => {
    const getOnePizza = async () => {
      try {
        const { data } = await axios(
          "https://62aa0b24371180affbce1a8a.mockapi.io/items/" + id
        );
        setOnePizza(data);
        console.log(data);
      } catch (error) {
        alert("ошибка при получении пиццы");
        navigate("/");
      }
    };
    getOnePizza();
  }, []);

  if (!onePizza) {
    return <>"Loading..."</>;
  }
  return (
    <div className="container">
      <img
        width={200}
        height={200}
        src={onePizza.imageUrl}
        alt="imageOfPizza"
      />
      <h3>{onePizza.title}</h3>
      <p>{onePizza.price} руб.</p>
      <p>{onePizza.rating} рейтинг</p>
    </div>
  );
};

export default Details;
