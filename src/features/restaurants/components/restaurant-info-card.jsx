import React from "react";
import { Text, Image } from "react-native";
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
import open from "../../../assets/open";

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

  const Rating = styled.View`
    margin-top: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[2]};
    flex-direction: row;
  `;

  const Open = styled.View`
    margin-top: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[2]};
    flex-direction: row;
  `;

  const OpenRatingContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `;

  const ClosedTemporarily = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
  `;

  const ClosedTempText = styled.Text`
    color: ${({ theme }) => theme.colors.text.error};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-right: 6px;
  `;

  const AvailableContainer = styled.View`
    flex-direction: row;
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
    isClosedTemporarily = true,
  } = restaurant;

  const ratings = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <OpenRatingContainer>
          <Rating>
            {ratings.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <AvailableContainer>
            {isClosedTemporarily && (
              <ClosedTemporarily>
                <ClosedTempText>temporarily closed</ClosedTempText>
                <Image
                  source={{ uri: icon }}
                  alt="icone qualquer"
                  style={{ width: 20, height: 20 }}
                />
              </ClosedTemporarily>
            )}
            {isOpenNow && (
              <Open>
                <SvgXml xml={open} width={20} height={20} />
              </Open>
            )}
          </AvailableContainer>
        </OpenRatingContainer>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </Info>
    </RestaurantCard>
  );
};
