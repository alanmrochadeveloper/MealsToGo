import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const CardCover = styled(Card.Cover)`
  padding: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "test 2",
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
    <Card elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </Card>
  );
};
