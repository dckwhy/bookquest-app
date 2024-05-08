import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Layout from "../../components/layout";
import Card from "../../components/card";

import { Book, getBooks } from "../../utils/apis/books";

const AllBook = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  async function fetchData() {
    // setIsLoadingBooks(true);
    let query: { [key: string]: string } = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }

    try {
      const result = await getBooks({ ...query });
      const { datas, ...rest } = result.payload;
      setBooks(datas);
      //   setMeta(rest);
    } catch (error) {
      //   toast({
      //     title: "Oops! Something went wrong.",
      //     description: (error as Error).message,
      //     variant: "destructive",
      //   });
    } finally {
      //   setIsLoadingBooks(false);
    }
  }

  return (
    <Layout>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center"
        data-testid="books-container"
      >
        {books.map((book) => (
          <Card
            key={book.id}
            data={book}
            navigate={`/books/${book.id}`}
            data-testid="detail-book"
          />
        ))}
      </div>
    </Layout>
  );
};

export default AllBook;
