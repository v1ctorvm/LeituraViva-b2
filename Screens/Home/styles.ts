import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  align-self: center;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TitleContainer = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
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
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
`;

export const SerchContainer = styled.View`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 80px;
  margin-top: 20px;
  background-color: #cdc9c9;
`;

export const Main = styled.View`
  background-color: #ffffff;
`;

export const BookGrid = styled.FlatList`
  margin-bottom: 200px;
  background-color: #cdc9c9;
`;

export const BookCard = styled.View`
  margin: 10px;
  border-radius: 10px;
  flex-direction: row;
  border-width: 1px;
  background-color: white;
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
  margin: 20px;
`;

export const BookBurrowText = styled.Text`
  background-color: rgba(197, 255, 252, 0.98);
  font-size: 20px;
  align-self: last baseline;
  border-radius: 20px;
`;
