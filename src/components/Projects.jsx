const Projects = () => {
  return (
    <div>
      <h1 className='text-3xl underline font-extrabold font-sans my-3 text-center'>
        My projects
      </h1>
      <div className='flex justify-center flex-wrap'>
        <div className='max-w-md py-4 px-8 bg-blue-200 shadow-lg rounded-lg my-2 mx-2'>
          <div>
            <h2 className='text-gray-800 text-3xl italic'>
              Backend project: API
            </h2>
            <p className='mt-2 text-gray-600'>
              About: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in perspiciatis officiis? Vero id rem obcaecati facilis
              quisquam expedita? Ex doloremque dolore adipisci. Sunt numquam,
              itaque minus eius est iste!
            </p>
          </div>
          <div className='flex justify-center mt-4'>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  'https://northcoders-backend-hiten.herokuapp.com/api/';
              }}
              className='bg-green-500 px-4 py-2 rounded-full text-xl font-medium hover:bg-green-600'>
              Take a look!
            </button>
          </div>
        </div>
        <div className='max-w-md py-4 px-8 bg-blue-200 shadow-lg rounded-lg my-2 mx-2'>
          <div>
            <h2 className='text-gray-800 text-3xl italic'>
              Frontend project: Webpage
            </h2>
            <p className='mt-2 text-gray-600'>
              About: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in perspiciatis officiis? Vero id rem obcaecati facilis
              quisquam expedita? Ex doloremque dolore adipisci. Sunt numquam,
              itaque minus eius est iste!
            </p>
          </div>
          <div className='flex justify-center mt-4'>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://nc-games-hiten.netlify.app/';
              }}
              className='bg-green-500 px-4 py-2 rounded-full text-xl font-medium hover:bg-green-600'>
              Take a look!
            </button>
          </div>
        </div>
        <div className='max-w-md py-4 px-8 bg-blue-200 shadow-lg rounded-lg my-2 mx-2'>
          <div>
            <h2 className='text-gray-800 text-3xl italic'>
              Group project: Fridge Tracker
            </h2>
            <p className='mt-2 text-gray-600'>
              About: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam in perspiciatis officiis? Vero id rem obcaecati facilis
              quisquam expedita? Ex doloremque dolore adipisci. Sunt numquam,
              itaque minus eius est iste!
            </p>
          </div>
          <div className='flex justify-center mt-4'>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  'https://github.com/galthop/koalas-project';
              }}
              className='bg-green-500 px-4 py-2 rounded-full text-xl font-medium hover:bg-green-600'>
              Take a look!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
