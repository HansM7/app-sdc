/** @format */

export default function HeaderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className='flex p-2 bg-zinc-900 w-[40%] rounded-md bg-opacity-80 mx-auto'>
      <div className='px-4'>
        <h1 className='p-2'>Home</h1>
      </div>
      <ul className='flex gap-2 bg-zinc-800 rounded-md w-full justify-around'>
        {children}
      </ul>
    </header>
  );
}
