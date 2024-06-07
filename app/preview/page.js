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
  if (!isLogin) {
    router.push("/signup");
  }
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
