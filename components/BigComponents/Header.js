export default function Header() {
  return (
    <header className="flex items-center w-full h-36 bg-white rounded-b-3xl">
      <div className="flex flex-col-reverse items-center sm:justify-between sm:flex-row w-4/5 mx-auto">
        <h1 className="font-thefont font-black text-3xl text-primary cursor-pointer">
          Save Money
        </h1>
        <div className="border">
          <h1>For Image</h1>
        </div>
      </div>
    </header>
  );
}
