import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import styled from "styled-components/native";

const androidStatusBarHeight = (value = 0) => StatusBar.currentHeight + value;

export const RestaurantScreen = () => {
  const SafeAreaContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
  `;

  const SearchbarContainer = styled.View`
    flex: 0.1;
    justify-content: center;
    margin: ${androidStatusBarHeight(10)}px 10px 10px 10px;
  `;

  const SearchBar = styled(Searchbar)`
    border-radius: ${({ theme }) => theme.space[1]};
  `;

  const List = styled.View`
    flex: 1;
    padding: ${({ theme }) => theme.space[3]};
  `;

  return (
    <SafeAreaContainer>
      <SearchbarContainer>
        <SearchBar elevation={3} mode="view" showDivider={false} />
      </SearchbarContainer>
      <List>
        <RestaurantInfoCard />
      </List>
      <ExpoStatusBar style="auto" />
    </SafeAreaContainer>
  );
};
