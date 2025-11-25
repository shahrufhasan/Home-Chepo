import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductCard({
  _id,
  title,
  description,
  image,
  price,
  rating,
  date,
}) {
  const productId = _id?.$oid || _id;

  const renderStars = (ratingValue) => {
    const full = Math.round(ratingValue);
    const empty = 5 - full;

    return (
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(full)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {[...Array(empty)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
        <span className="ml-2 text-gray-700 font-medium">({ratingValue})</span>
      </div>
    );
  };

  return (
    <div className="card bg-base-200 shadow-xl m-4 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-60 object-cover p-1"
        />
      </figure>

      <div className="card-body text-center">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm text-left">{description}</p>

        <p className="text-lg font-bold text-left">
          Price: <span className="text-[#FF7F07]">${price}</span>
        </p>

        {rating && (
          <p className="flex gap-1 text-left">
            <span className="text-gray-500">Ratings:</span>
            {renderStars(rating)}
          </p>
        )}

        <p className="text-left text-gray-500">
          Created At: <span className="text-black">{date}</span>
        </p>

        <div className="card-actions justify-center mt-4">
          <Link
            href={`/products/${productId}`}
            className="btn bg-[#FF7F07] text-white hover:bg-[#e66f06] w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
