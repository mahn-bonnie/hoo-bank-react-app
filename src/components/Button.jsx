/* eslint-disable react/prop-types */

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary border-2 border-black hover:border-[#33bbcf] hover:text-white bg-blue-gradient button-btn rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
