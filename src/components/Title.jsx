const Title = () => {
  return (
    <div>
      <h1 class='text-3xl font-bold underline text-center my-8'>Hiten Patel</h1>
      <img
        class='rounded-full w-[40vw] h-[40vw] object-cover border-blue-400 border-4 border-solid container max-w-[300px] max-h-[300px] mx-auto flex justify-center shadow hover:shadow-2xl hover:border-blue-700'
        src={require('../my_image.jpg')}
        alt='headshot'
      />
    </div>
  );
};

export default Title;
