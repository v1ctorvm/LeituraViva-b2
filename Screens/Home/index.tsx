import { useEffect, useState } from "react";
import {
  BookAuthor,
  BookBurrow,
  BookBurrowText,
  BookCard,
  BookGrid,
  BookImage,
  BookText,
  BookTitle,
  Header,
  Main,
  ScreenContainer,
  ScreenSubTitle,
  ScreenTitle,
  SearchInput,
  SerchContainer,
  TitleContainer,
} from "./styles";

export const BOOK_MOCK = [
  {
    id: 1,
    name: "Clean Code",
    author: "Robert C. Martin",
    borrowed: "Available",
  },
  {
    id: 2,
    name: "Clean  Architeture",
    author: "Robert C. Martin",
    borrowed: "Available",
  },
  {
    id: 3,
    name: "Code Complete",
    author: "Berrart Sabah",
    borrowed: "Available",
  },
  {
    id: 4,
    name: "Code With Juliano",
    author: "Ramos Juliano",
    borrowed: "Burrowed",
  },
  {
    id: 5,
    name: "Book 5",
    author: "Autor 5",
    borrowed: "Burrowed",
  },
  {
    id: 6,
    name: "Book 6",
    author: "Autor 6",
    borrowed: "Burrowed",
  },
  {
    id: 7,
    name: "Book 7",
    author: "Autor 7",
    borrowed: "Burrowed",
  },
  {
    id: 8,
    name: "Book 8",
    author: "Autor 8",
    borrowed: "Burrowed",
  },
  {
    id: 9,
    name: "Book 9",
    author: "Autor 9",
    borrowed: "Available",
  },
  {
    id: 10,
    name: "Book 10",
    author: "Autor 10",
    borrowed: "Available",
  },
  {
    id: 11,
    name: "Book 11",
    author: "Autor 11",
    borrowed: "Burrowed",
  },
  {
    id: 12,
    name: "Book 12",
    author: "Autor 12",
    borrowed: "Burrowed",
  },
  {
    id: 13,
    name: "Book 13",
    author: "Autor 13",
    borrowed: "Burrowed",
  },
  {
    id: 14,
    name: "Book 14",
    author: "Autor 14",
    borrowed: "Available",
  },
  {
    id: 15,
    name: "Book 15",
    author: "Autor 15",
    borrowed: "Burrowed",
  },
];

export function Home() {
  const [busca, setBusca] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(BOOK_MOCK);

  useEffect(() => {
    const resultado = BOOK_MOCK.filter(
      (book) =>
        book.name.toLowerCase().includes(busca.toLowerCase()) ||
        book.author.toLowerCase().includes(busca.toLowerCase()),
    );

    setFilteredBooks(resultado);
  }, [busca]);

  return (
    <ScreenContainer>
      <Header>
        <BookImage
          source={{
            uri: "https://thumbs.dreamstime.com/b/simple-open-book-vector-icon-single-color-design-element-isolat-simple-open-book-vector-icon-single-color-design-element-isolated-108729123.jpg",
          }}
          resizeMode="cover"
        />
        <TitleContainer>
          <ScreenTitle>LeituraViva</ScreenTitle>
          <ScreenSubTitle>Libary Loan System</ScreenSubTitle>
        </TitleContainer>
      </Header>
      <Main>
        <SerchContainer>
          <SearchInput placeholder="Search Book" onChangeText={setBusca} />
        </SerchContainer>

        <BookGrid
          data={filteredBooks}
          renderItem={({ item }) => (
            <BookCard>
              <BookText>
                <BookTitle>{item.name}</BookTitle>
                <BookAuthor>{item.author}</BookAuthor>
              </BookText>

              <BookBurrow>
                <BookBurrowText>{item.borrowed}</BookBurrowText>
              </BookBurrow>
            </BookCard>
          )}
        />
      </Main>
    </ScreenContainer>
  );
}
