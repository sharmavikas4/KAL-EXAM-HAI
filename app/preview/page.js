"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
/**
 * Preview component
 * It is used to preview the pdf file
 * parameters searchParams
 * @returns preview component
 */
export default function Preview({ searchParams }) {
  const router = useRouter();
  const { isLogin } = useSelector((state) => state.login);
  useEffect(() => {
    if (!isLogin) {
      router.push("/signup");
    }
  }, [isLogin]);
  return (
    <div>
      <embed
        type="application/pdf"
        src={searchParams.url}
        className="w-full h-screen"
      ></embed>
    </div>
  );
}
