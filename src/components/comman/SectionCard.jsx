import React from 'react'

const SectionCard = ({ section }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={section.image.url}
          alt={section.image.altText}
          className="w-full h-40 object-cover"
        />
        {section.tag && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
            {section.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{section.description}</p>
        <a
          href={section.button.url}
          className="text-white bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 rounded"
        >
          {section.button.text}
        </a>
      </div>
    </div>
  );
};
export default SectionCard
