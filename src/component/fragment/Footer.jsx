const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-6 border-t-2 border-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* Brand and Social Icons */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">NoName WEB</h2>
            <div className="flex space-x-4 mt-4">
              <i className="fab fa-facebook text-xl"></i>
              <i className="fab fa-instagram text-xl"></i>
              <i className="fab fa-twitter text-xl"></i>
              <i className="fab fa-youtube text-xl"></i>
              <i className="fab fa-wordpress text-xl"></i>
            </div>
          </div>
  
          {/* Navigation */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">NAVIGATION</h3>
            <ul className="mt-2 space-y-2">
              <li>Home</li>
              <li>Desain Halaman</li>
              <li>Desain Element</li>
              <li>Tips and Trick</li>
              <li>Donate</li>
            </ul>
          </div>
  
          {/* Legal */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">LEGAL</h3>
            <ul className="mt-2 space-y-2">
              <li>General Info</li>
              <li>Privacy Policy</li>
              <li>Terms of</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">TALK TO US</h3>
            <ul className="mt-2 space-y-2">
              <li>support@ercom.com</li>
              <li>+66 2399 1145</li>
              <li>Contact Us</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center mt-10 text-sm border-t border-gray-700 pt-4">
          @NoNameWEB, Sanchhaya Education Private Limited, <span className="underline">All rights reserved</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  