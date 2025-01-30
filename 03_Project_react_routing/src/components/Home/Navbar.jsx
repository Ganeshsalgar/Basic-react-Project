const NavContainer = () => {
  return (
    <div className="flex width-100 items-center justify-between px-30 bg-amber-600">
      <div className="h-20 w-20 py-4">
        <img className="rounded-full "
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt="Error"
        />
      </div>

      <div className="flex gap-10 list-none text-white">
        <link className=" hover:text-gray-500">Home</link>
        <li className=" hover:text-gray-500">About</li>
        <li className=" hover:text-gray-500">Restorant</li>
        <li className=" hover:text-gray-500">Contant us</li>
      </div>
    </div>
  );
};

export default NavContainer;
