import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  const utcTime = now.toISOString(); // ISO string is always in UTC

  const time = new Date(utcTime).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata', // Set the timezone to UTC for consistency
  });
  
  const date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeZone: 'Asia/Kolkata', // Set the timezone to UTC for consistency
  }).format(new Date(utcTime));

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[200px] rounded py-2 text-center text-base font-normal">
          Cheers to a Good Start !
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      

      <MeetingTypeList />
      <footer className='mt-auto flex justify-center py-4'>
        <p className='text-center text-white'>
          Coded with ❤️ by Karan
        </p>
      </footer>
    </section>
  );
};

export default Home;
