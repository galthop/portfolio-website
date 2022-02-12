const Title = () => {
  return (
    <div>
      <div className='bg-blue-200 py-3 mb-3 border-blue-400 border-b-4 border-solid'>
        <h1 className='text-3xl font-bold underline text-center'>
          Hiten Patel's portfolio website
        </h1>
      </div>
      <img
        className='rounded-full w-[35vw] h-[35vw] object-cover border-blue-400 border-4 border-solid container max-w-[250px] max-h-[250px] mx-auto flex justify-center'
        src={require('../my_image.jpg')}
        alt='headshot'
      />
      <h1 className='text-3xl font-bold underline text-center my-3'>
        About me
      </h1>
    </div>
  );
};

export default Title;
