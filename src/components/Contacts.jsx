const Contacts = () => {
  return (
    <div>
      <h1 className='text-3xl underline font-extrabold font-sans mt-8 text-center'>
        Contact me
      </h1>
      <div className='flex mt-8 pb-10'>
        <img
          className='rounded-[1.2rem] w-[20vw] h-[20vw] object-cover border-blue-400 border-4 border-solid container max-w-[100px] max-h-[100px] mx-auto flex shadow hover:shadow-2xl hover:border-blue-700'
          src={require('../linkedinlogo.png')}
          alt='linkedin'
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              'http://www.linkedin.com/in/hiten-patel-19296a218';
          }}
        />
        <img
          className='rounded-[0.9rem] w-[27.6vw] h-[20vw] object-cover border-blue-400 border-4 border-solid container max-w-[138px] max-h-[100px] mx-auto flex shadow hover:shadow-2xl hover:border-blue-700'
          src={require('../gmaillogo.png')}
          alt='gmail'
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              'https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDktRrFlpRHgzgdMbxMdBkNhbzMLFrZxNhrFnTHbkpvrzlCkPVBWzQDzqGRZwHfCqPHzg';
          }}
        />
        <img
          className='rounded-full w-[20vw] h-[20vw] object-cover border-blue-400 border-4 border-solid container max-w-[100px] max-h-[100px] mx-auto flex shadow hover:shadow-2xl hover:border-blue-700'
          src={require('../githublogo.png')}
          alt='github'
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://github.com/galthop';
          }}
        />
      </div>
    </div>
  );
};

export default Contacts;
