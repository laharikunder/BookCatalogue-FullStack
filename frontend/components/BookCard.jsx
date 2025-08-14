import React from "react";

export default function BookCard({
  title,
  author,
  year,
  description,
  image,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />
      )}

      <div className="p-4 flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-1" style={{ color: 'rgba(180,104,149,1)' }}>
          {title}
        </h2>
        <p className="text-sm text-gray-600">by {author}</p>
        <p className="text-sm text-gray-500 mb-2">Published: {year}</p>
        <p className="text-sm text-gray-700 line-clamp-3 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}
