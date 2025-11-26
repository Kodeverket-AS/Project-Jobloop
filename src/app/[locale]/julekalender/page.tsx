export default function Julekalender() {
  return (
    <main
      className='
    min-h-screen
    w-full
    bg-gradient-to-br from-sky-100 via-white to-red-100
    flex justify-center
    pt-6 pb-16
    relative overflow-hidden
  '
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/snow-texture.png')] opacity-20" />
      <div className='w-full px-2 sm:px-4 lg:px-0 lg:max-w-[1200px] xl:max-w-[1380px] 2xl:max-w-[1600px]'>
        <div
          className='
    overflow-hidden
    rounded-2xl
    bg-white/80
    backdrop-blur-sm
    shadow-xl
    border border-red-100
  '
        >
          <iframe
            src='https://jobloopjulekalender2025.digitaljul.dk/'
            title='JobLoop julekalender 2025'
            className='
              w-[calc(100%+40px)]
              -ml-5
              h-[2200px]
              md:h-[2000px]
              lg:h-[1800px]
              xl:h-[1700px]
              border-0
            '
            loading='lazy'
          />
        </div>
      </div>
    </main>
  );
}
