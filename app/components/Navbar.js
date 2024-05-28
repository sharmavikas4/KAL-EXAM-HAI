"use client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase-config";
import { logout } from "../redux/features/Login/loginSlice";
const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.login);
  return (
    <div className="flex flex-row px-5 py-2 sm:px-10 sm:py-5 justify-between border-b-2 border-[#ccc]  shadow-[0px_2px_4px_rgb(180,180,180)] gap-2 sm:gap-0">
      <button
        className="flex flex-row"
        onClick={() => {
          router.push("/");
        }}
      >
        <img
          src="images/logo.png"
          className="sm:w-10 sm:h-11 w-7 h-9"
          alt="logo.png"
        ></img>
        <h1 className="text-sm sm:text-lg py-2 font-semibold">KAL EXAM HAI</h1>
      </button>
      <div className="flex flex-row gap-2">
        {isLogin ? (
          <button
            onClick={() => {
              signOut(auth)
                .then((res) => {
                  dispatch(logout());
                })
                .catch((err) => {
                  console.log(err.code);
                });
            }}
            className="text-sm w-20 h-8 sm:w-32 sm:h-11 sm:text-lg border-[#5D5FEF] border-2 text-[#5D5FEF] rounded py-1 px-4 sm:px-6"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              router.push("/signup");
            }}
            className="text-sm w-20 h-8 sm:w-32 sm:h-11 sm:text-lg border-[#5D5FEF] border-2 text-[#5D5FEF] rounded py-1 px-4 sm:px-6"
          >
            SignUp
          </button>
        )}
        <button
          onClick={() => {
            router.push("/upload");
          }}
          className="text-sm w-20 h-8 sm:w-32 sm:h-11 sm:text-lg bg-[#5D5FEF] border-2 border-[#5D5FEF] text-white rounded py-1 px-4 sm:px-6"
        >
          Upload
        </button>
      </div>
    </div>
  );
};
export default Navbar;
