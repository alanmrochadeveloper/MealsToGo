import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import {
  Oswald_400Regular,
  useFonts as useOswaldFonts,
} from "@expo-google-fonts/oswald";
import {
  Lato_400Regular,
  useFonts as useLatoFonts,
} from "@expo-google-fonts/lato";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const [OswaldLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });
  const [LatoLoaded] = useLatoFonts({
    Lato_400Regular,
  });
  if (!OswaldLoaded && !LatoLoaded) {
    return null;
  }
  const RestaurantCardCover = styled(Card.Cover)`
    padding: ${({ theme }) => theme.space[3]};
  `;

  const RestaurantCard = styled(Card)`
    background-color: white;
  `;

  const RestaurantCardTitle = styled(Text)`
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.heading};
  `;

  const RestaurantCardAddress = styled(Text)`
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.caption};
  `;

  const Info = styled.View`
    padding: ${({ theme }) => theme.space[3]};
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
      <Info>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
        <SvgXml xml={star} />
      </Info>
    </RestaurantCard>
  );
};
