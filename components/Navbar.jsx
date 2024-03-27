import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
            <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
                <div className="flex items-center gap-2">
                    <Image src="/assets/svg/menu.svg" width={80} height={80} className="lg:hidden" alt="" />
                    <a href="./index.html">
                        <Image src="/assets/lws-logo-black.svg" width={120} height={70} alt="" />
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
                <Image src="/assets/svg/avatar.svg" width={18} height={18} className="hidden lg:block" alt="login acount avatar" />
                <Image src="/assets/svg/shopping-Cart.svg" width={20} height={20} alt="shopping cart icon" />
            </div>
        </nav>
    );
};

export default Navbar;
