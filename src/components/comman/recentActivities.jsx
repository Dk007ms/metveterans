import React from "react";
import activities from "../../data/recent-activities";

const Activities = () => {
  
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-red-500 mb-2">
          Recent Activities
        </h3>
        <h2 className="text-3xl font-bold text-gray-800">
          Join our latest Recent Activities
        </h2>
      </div>
      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="relative bg-white rounded-lg overflow-hidden shadow-md"
          >
            {/* Date tag */}
            <div className="absolute top-3 left-3 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
              {activity.date}
            </div>
            {/* Activity Image */}
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            {/* Title */}
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-800">
                {activity.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-red-600">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Activities;
