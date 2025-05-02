import logo from '../../src/assets/logo.png'

const Footer = () => {
    return (
        <>
            <footer className="bg-purple-800 text-white py-10 px-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex justify-center md:justify-start items-center gap-1.5">
                            <div className="">
                                <img className='w-10' src={logo} alt="" />
                            </div>
                            <p className="font-semibold text-xl mt-3">Giftify</p>
                        </div>


                        <p className="text-sm mt-2">
                            Spreading joy through digital <br /> experiences
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="text-lg font-semibold mb-3">Quick Links</h6>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h6 className="text-lg font-semibold mb-3">Categories</h6>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">E-Cards</a></li>
                            <li><a href="#" className="hover:underline">Gift Cards</a></li>
                            <li><a href="#" className="hover:underline">Animations</a></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h6 className="text-lg font-semibold mb-3">Follow Us</h6>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="hover:underline">Twitter</a>
                            <a href="#" className="hover:underline">Facebook</a>
                            <a href="#" className="hover:underline">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;