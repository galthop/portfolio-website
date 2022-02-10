import { useState } from 'react';

const Projects = () => {
  const [project, setProject] = useState({
    title: 'Backend project',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
  deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
  commodi hic, suscipit in a veritatis pariatur minus consequuntur!`,
  });

  return (
    <div class='flex flex-col'>
      <div class='max-w-md py-4 px-8 bg-blue-200 shadow-lg rounded-lg my-2 mx-2'>
        <div>
          <h2 class='text-gray-800 text-3xl italic'>{project.title}</h2>
          <p class='mt-2 text-gray-600'>{project.description}</p>
        </div>
        <div class='flex justify-center mt-4'>
          <button
            href='https://www.google.com'
            class='bg-green-500 px-4 py-2 rounded-full text-xl font-medium hover:bg-green-600'>
            Take a look!
          </button>
        </div>
      </div>
      <div class='max-w-md py-4 px-8 bg-blue-200 shadow-lg rounded-lg my-2 mx-2'>
        <div>
          <h2 class='text-gray-800 text-3xl italic'>{project.title}</h2>
          <p class='mt-2 text-gray-600'>{project.description}</p>
        </div>
        <div class='flex justify-center mt-4'>
          <button
            href='https://www.google.com'
            class='bg-green-500 px-4 py-2 rounded-full text-xl font-medium hover:bg-green-600'>
            Take a look!
          </button>
        </div>
      </div>
      <div class='max-w-md py-4 px-8 bg-blue-200 shadow-lg rounded-lg my-2 mx-2'>
        <div>
          <h2 class='text-gray-800 text-3xl italic'>{project.title}</h2>
          <p class='mt-2 text-gray-600'>{project.description}</p>
        </div>
        <div class='flex justify-center mt-4'>
          <button
            href='https://www.google.com'
            class='bg-green-500 px-4 py-2 rounded-full text-xl font-medium hover:bg-green-600'>
            Take a look!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
