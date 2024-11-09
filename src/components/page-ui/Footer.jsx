import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-8 text-center font-poppins">
      <div className="container mx-auto space-y-4">
        <Logo />
        <h1 className="text-lg font-bold mb-4">MEHDI BELKHELFA</h1>

        {/* Copyright Text */}
        <p className="text-xl font-semibold text-gray-400">
          © 2024 copyright all right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
