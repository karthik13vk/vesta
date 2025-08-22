
import footerlogo from "../../assets/images/footer-logo.png";
const Footer = () => {
  return (
    <div className=" Footer-section">
      <div className="py-10 lg:py-20 top-footer bg-bg_1">
        <div className="container px-4 mx-auto lg:px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="footer-left">
                <img src={footerlogo} alt="footerlogo" className="mb-4" />
                <p className="text-white text-md">
                    Our Story is rooted in nature and community. Founded by South Indian wellness enthusiasts, we grew up seeing families use Moringa (or murungai in Tamil) daily – in sambar, soups, and herbal tonics. Inspired by this tradition and by scientific research on Moringa’s benefits, we set out to share this superfood more widely
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="text-white lg:pl-2">
                    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

                    <ul className="font-normal">
                        <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Contact Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">About Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Careers </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Flipkart </a>
                        </li>
                     <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Stories</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="text-white lg:pl-2">
                    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

                    <ul className="font-normal">
                        <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Contact Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">About Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Careers </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Flipkart </a>
                        </li>
                     <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Stories</a>
                        </li>
                    </ul>
                    
                </div>
                  <div className="text-white lg:pl-2">
                    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

                    <ul className="font-normal">
                        <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Contact Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">About Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Careers </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Flipkart </a>
                        </li>
                     <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Stories</a>
                        </li>
                    </ul>
                    
                </div>
                  <div className="text-white lg:pl-2">
                    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

                    <ul className="font-normal">
                        <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Contact Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">About Us </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Careers </a>
                        </li>
                     <li className="mb-1.5">
                           <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4">Flipkart </a>
                        </li>
                     <li className="mb-1.5">
                            <a href="/" className="transition-all duration-300 hover:pl-2 hover:text-text_4"> Stories</a>
                        </li>
                    </ul>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-2.5 bg-bg_4 text-text_1 px-2 flex items-center justify-center text-lg font-semibold text-center">
         <p>© 2025 Vesta. Powered by <a href="/" className="font-bold">Greaterdhan.com</a> </p>
      </div>
      
    </div>
  );
};

export default Footer;
