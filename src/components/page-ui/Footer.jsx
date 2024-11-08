import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-8 text-center font-poppins">
      <div className="container mx-auto space-y-14 p-5">
        <Logo />
        <h1 className="text-2xl font-bold mb-4">MEHDI BELKHELFA</h1>

        {/* Copyright Text */}
        <p className="text-3xl font-semibold text-gray-400">
          © 2024 copyright all right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
