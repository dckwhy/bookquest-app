import { useEffect, useState } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

import Layout from "../components/layout";
import Card from "../components/card";
import RiveWrapper from "../components/rive";

import { Book, getBooks } from "../utils/apis/books";

const Home = () => {
  const [newBooks, setNewBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchNewBooks();
  }, []);

  async function fetchNewBooks() {
    try {
      const result = await getBooks({ sort: "new", limit: 5 });

      setNewBooks(result.payload.datas);
    } catch (error) {
      // toast({
      //   title: "Oops! Something went wrong.",
      //   description: (error as Error).message,
      //   variant: "destructive",
      // });
    } finally {
    }
  }

  return (
    <Layout>
      <section className="bg-transparent mb-6 pb-8">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to BookQuest
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Discover and borrow thousands of books at your fingertips.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-full h-full hidden lg:mt-0 lg:col-span-5 lg:flex md:block">
            <RiveWrapper />
          </div>
        </div>
      </section>
      <div className="flex justify-between my-9 w-full h-fit items-center">
        <p className="font-semibold text-lg tracking-wider">
          New Release Books
        </p>
        <Link
          className="text-sm tracking-wide"
          to="/books?sort=new"
          data-testid="to-books-by-new"
        >
          Show all
        </Link>
      </div>
      <div className="relative w-full h-fit">
        <div className="flex space-x-4 pb-4">
          {newBooks.map((book) => (
            <Card
              key={book.id}
              data={book}
              navigate={`/books/${book.id}`}
            ></Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
