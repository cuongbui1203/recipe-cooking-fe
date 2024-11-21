import React from 'react';

const RecipeCard = () => {
  return (
    <div className="border rounded-md shadow-md flex p-5 w-fit text-center justify-center gap-5">
    <div className='w-[200px] h-[200px] m-2'>
     <img
        src="https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/an-gi-102-16715878746102005998080.jpg"
        alt="Recipe"
        className='object-cover'
      />
      </div>
      <div>
      <h2 className="text-xl font-semibold">test</h2>
      <p className="text-gray-600">Type: test2</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </button>
      </div>
    </div>
  );
};

export default RecipeCard;
