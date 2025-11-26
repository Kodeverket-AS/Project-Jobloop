export default function Julekalender() {
  return (
    <div className='fixed inset-0 w-screen h-screen overflow-hidden bg-white'>
      <iframe
        src='https://jobloopjulekalender2025.digitaljul.dk/'
        title='JobLoop julekalender 2025'
        className='w-full h-full border-0'
        loading='lazy'
      />
    </div>
  );
}
