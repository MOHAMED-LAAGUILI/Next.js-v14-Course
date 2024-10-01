import React from 'react';

export default function Blog({params}) {
  console.log(params);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
      <h3 className="text-xl font-bold text-gray-500">
        Blog : {params.blogId}
      </h3>
      <p className="text-lg text-gray-600">This is the blog page.</p>
    </div>
  );
}