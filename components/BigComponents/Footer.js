export default function Footer() {
  return (
    <footer className="flex items-center w-full h-24 bg-primary mt-4 sm:h-16">
      <div className="w-4/5 flex flex-col sm:flex-row sm:mx-auto text-white text-base ml-1.5">
        <p className="cursor-pointer">2020 Zwallet. All right reserved.</p>
        <div className="sm:flex sm:ml-auto">
          <p className="sm:mr-5 cursor-pointer">+62 5637 8882 9901</p>
          <p className="cursor-pointer">contact@zwallet.com</p>
        </div>
      </div>
    </footer>
  );
}
