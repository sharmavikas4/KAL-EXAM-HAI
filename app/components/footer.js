import { useRouter } from "next/navigation";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  const year = new Date().getFullYear();
  const router = useRouter();
  return (
    <div className="bg-[#5D5FEF] w-full h-32 flex flex-col items-center justify-center p-10 gap-1 overflow-hidden">
      <p className="text-white text-sm sm:text-base font-semibold">
        &copy;Team GDSC SMVDU, {year}
      </p>
      <p className="text-white text-sm text-center">
        For any query or suggestion, feel free to contact us.
      </p>
      <div className="flex gap-4 text-white items-center justify-center">
        <a className="inline-block" href="tel:9797052979">
          <BsFillTelephoneFill className="inline-block" /> 9797052979
        </a>
        <a className="inline-block" href="mailto:gdsc@smvdu.ac.in">
          <IoMdMail className="inline-block text-lg" /> gdsc@smvdu.ac.in
        </a>
      </div>
      <button
        className="text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-[#5D5FEF] bg-[#5D5FEF] py-1 px-3 rounded"
        onClick={() => {
          router.push("/contact");
        }}
      >
        Contact
      </button>
    </div>
  );
};
export default Footer;
