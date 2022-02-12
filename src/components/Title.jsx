const Title = () => {
  return (
    <div>
      <img
        className='rounded-full w-[35vw] h-[35vw] object-cover border-blue-400 border-4 border-solid container max-w-[250px] max-h-[250px] mx-auto flex justify-center shadow hover:shadow-2xl hover:border-blue-700'
        src={require('../my_image.jpg')}
        alt='headshot'
      />
      <h1 className='text-3xl font-bold underline text-center'>Hiten Patel</h1>
    </div>
  );
};

export default Title;
