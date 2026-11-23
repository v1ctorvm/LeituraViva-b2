import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: green;
`;

export const Header = styled.View`
  background-color: red;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TitleContainer = styled.View`
  background-color: purple;
  margin: 20px;
`;

export const ScreenTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const ScreenSubTitle = styled.Text`
  font-size: 24px;
  color: gray;
`;

export const SearchInput = styled.TextInput`
  background-color: white;
  height: 40px;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
`;

export const SerchContainer = styled.View`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 80px;
  margin-top: 20px;
  background-color: blue;
`;

export const Main = styled.View`
  background-color: black;
`;

export const BookGrid = styled.FlatList`
  background-color: yellow;
  margin-bottom: 200px;
`;

export const BookCard = styled.View`
  margin: 10px;
  border-radius: 10px;
  background-color: wheat;
  flex-direction: row;
`;

export const BookText = styled.View`
  margin: 10px;
`;

export const BookTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const BookAuthor = styled.Text`
  font-size: 20px;
  color: gray;
  font-weight: 600;
`;

export const BookBurrow = styled.View`
  align-items: center;
`;

export const BookBurrowText = styled.Text`
  background-color: orange;
  font-size: 20px;
`;
