import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../../components/layout";

import { Book, getDetailBook } from "../../utils/apis/books";

const DetailBook = () => {
  const params = useParams();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { payload } = await getDetailBook(params.id_book!);
      setBook(payload);
    } catch (error) {
      // setIsError(true);
      // toast({
      //   title: "Oops! Something went wrong.",
      //   description: (error as Error).message,
      //   variant: "destructive",
      // });
    }
  }

  return (
    <Layout>
      <section className="relative ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-md:px-2 ">
            <div className="img">
              <div className="img-box max-lg:mx-auto ">
                <img
                  src={book?.cover_image}
                  alt={book?.title}
                  className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96 max-lg:mx-auto lg:mx-auto"
                />
              </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl">
                <h2 className="font-manrope font-bold text-3xl leading-10 mb-2 capitalize">
                  {book?.title}
                </h2>
                <p className="text-gray-500 text-base font-normal mb-5">
                  by {book?.author}
                </p>
                <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                  <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                    <p className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center">
                      {book?.category}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 py-8">
                  <div className="flex sm:items-center sm:justify-center w-full">
                    {book?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailBook;
