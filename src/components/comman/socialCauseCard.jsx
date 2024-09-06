import React from 'react'

const SocialCauseCard = ({ cause }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={cause.image.url}
        alt={cause.image.altText}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{cause.description}</p>
        <a
          href={cause.button.url}
          className="text-white bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 rounded"
        >
          {cause.button.text}
        </a>
      </div>
    </div>
  );
};
export default SocialCauseCard;