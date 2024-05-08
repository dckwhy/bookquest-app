import { Link } from "react-router-dom";

import { Book } from "../utils/apis/books";

interface BookCardProps {
  data: Book;
  navigate: string;
}

const Card = (props: BookCardProps) => {
  const { data, navigate } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={navigate}>
        <img className="rounded-t-lg" src={data.cover_image} alt={data.title} />
      </Link>
      <div className="p-5">
        <Link to={navigate}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default Card;
