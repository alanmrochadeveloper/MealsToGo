import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
  `;

  const RestaurantCard = styled(Card)`
    background: white;
  `;

  const RestaurantCardTitle = styled(Card.Title)`
    background-color: aqua;
  `;

  const {
    name = "test 3",
    icon = "https://images.freeimages.com/images/large-previews/510/trash-icon-1525880.jpg",
    photos = [
      "https://images.freeimages.com/images/large-previews/e3c/french-restaurant-1475120.jpg",
    ],
    address = "Avenue ST de Elises",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <RestaurantCardTitle title={name} />
    </RestaurantCard>
  );
};
