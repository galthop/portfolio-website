const Projects = () => {
  return (
    <div>
      <h1 className='text-3xl underline font-extrabold font-sans my-5 text-center'>
        My projects
      </h1>
      <div className='flex justify-center flex-wrap'>
        <div className='max-w-md py-4 px-8 bg-blue-200 shadow-lg rounded-lg my-2 mx-2'>
          <div>
            <h2 className='text-gray-800 text-3xl underline italic'>
              Board game reviews API
            </h2>
            <p className='mt-2 text-gray-600'>
              A Node.js API designed to interact with a multiple board game
              related databases. The user can search for specific game reviews,
              add their own reviews, sort by various review properties (e.g.
              number of comments). More endpoints are currently in development.
              <br></br>
              Technologies used: Postgres, Express, Node.js, Jest
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
            <h2 className='text-gray-800 text-3xl underline italic'>
              Board game reviews website
            </h2>
            <p className='mt-2 text-gray-600'>
              A website where users can find information about board game
              genres, filter reviews by category, vote on reviews, and more.
              These requests are sent to the board game reviews API, so the user
              can update and receive information from the API's web server in
              real time, and see the effect(s) of their interaction immediately.
              <br></br>
              Technologies used: React, CSS, Axios
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
            <h2 className='text-gray-800 text-3xl underline italic'>
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
