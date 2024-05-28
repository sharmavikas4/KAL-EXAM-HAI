"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../firebase/firebase-config";
import { HashLoader } from "react-spinners";
import { auth } from "../firebase/firebase-config";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const Admin = () => {
  const [requestPaper, setRequestPaper] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { isLogin } = useSelector((state) => state.login);
  useEffect(() => {
    setIsLoading(true);
    const data = [];
    const fetchData = async () => {
      const collectionRef = collection(db, "Request");
      await getDocs(collectionRef).then((res) => {
        res.docs.map((doc) => {
          if (doc.data().faculty !== undefined) {
            return data.push({ ...doc.data(), id: doc.id });
          }
        });
      });
      setRequestPaper(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (auth?.currentUser?.email !== "kalexamhai1@gmail.com") {
      router.push("/signup");
    }
  }, [isLogin]);
  console.log(requestPaper);
  const router = useRouter();
  const reject = async (id, fileName, saving) => {
    setIsDisabled(true);
    const docu = await doc(db, "Request", id);
    if (!saving) {
      console.log("File deletion started");
      const fileref = ref(storage, `files/${fileName}`);
      await deleteObject(fileref)
        .then(() => {
          console.log("File deleted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const docRef = deleteDoc(docu)
      .then(() => {
        setIsDisabled(false);
        setRequestPaper(requestPaper.filter((p) => p.id !== id));
      })
      .catch((err) => {
        setIsDisabled(false);
        console.log(err);
      });
  };
  const accept = async (object) => {
    setIsDisabled(true);
    const collectionRef = collection(db, "View");
    const docu = [];
    await getDocs(collectionRef).then((res) => {
      res.docs.map((doc) => {
        return docu.push(doc.data(), doc.id);
      });
    });
    const data = docu[0];
    const id = docu[1];
    const docs = doc(db, "View", id);
    console.log(data, id);
    data[object.faculty][object.department][object.semester].push({
      subject: object.subject,
      exam: object.exam,
      file: object.file,
      year: object.year,
    });
    await updateDoc(docs, data)
      .then(() => {
        setIsDisabled(false);
        reject(object.id, object.fileName, true);
      })
      .catch((err) => {
        console.log(err);
        setIsDisabled(false);
      });
  };
  return (
    <div>
      <Navbar />
      {isLoading ? (
        // Loader component , adjust it according to the page , refer to npm react-spinners for documentation
        <HashLoader
          color={"#5BD1D7"}
          loading={"Loading"}
          className=" justify-center"
          size={50}
        />
      ) : (
        <div className="flex flex-row items-center place-content-center m-4 sm:w-[98%]  w-[94%] flex-wrap gap-4 p-4 ">
          {requestPaper.length === 0 && (
            <div className="flex flex-row items-center place-content-center m-4 sm:w-[98%]  w-[94%] flex-wrap gap-4 p-4 ">
              <h1 className="text-lg sm:text-2xl font-semibold">
                No requests available...
              </h1>
            </div>
          )}
          {requestPaper.map((p, i) => {
            return (
              <div
                key={i}
                className="flex md:basis-5/6 flex-row flex-wrap gap-4 p-4 items-center place-content-center md:gap-10 md:p-6 border-[#eee] border-[1px] shadow-xl shadow-[0px 4px 8px #b4b4b4]"
              >
                <span className="text-base sm:text-lg font-semibold">
                  {p.department}
                </span>
                <span className="text-base sm:text-lg font-semibold">
                  {p.year}
                </span>
                <span className="text-base sm:text-lg font-semibold">
                  {p.semester}
                </span>
                <span className="text-base sm:text-lg font-semibold">
                  {p.subject}
                </span>
                <span className="text-base sm:text-lg font-semibold">
                  {p.exam}
                </span>
                {typeof window !== "undefined" && window.innerWidth >= 640 ? (
                  <>
                    <button
                      onClick={() => {
                        const param = new URLSearchParams();
                        param.set("url", p.file);
                        router.push("/preview?" + param.toString());
                      }}
                      disabled={isDisabled}
                      className="bg-stone-400 hover:bg-white hover:text-stone-500  text-white rounded-md sm:font-bold font-semibold py-2 px-3"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => {
                        reject(p.id, p.fileName, false);
                      }}
                      disabled={isDisabled}
                      className="bg-red-600 hover:bg-white hover:text-red-600 text-white rounded-md sm:font-bold font-semibold py-2 px-3"
                    >
                      Reject
                    </button>
                    <button
                      disabled={isDisabled}
                      onClick={() => {
                        accept(p);
                      }}
                      className="bg-green-500 hover:bg-white hover:text-green-500  text-white rounded-md sm:font-bold font-semibold py-2 px-3"
                    >
                      Accept
                    </button>
                  </>
                ) : (
                  <div className="flex flex-row gap-3">
                    <button
                      onClick={() => {
                        const param = new URLSearchParams();
                        param.set("url", p.file);
                        router.push("/preview?" + param.toString());
                      }}
                      disabled={isDisabled}
                      className="bg-stone-400 hover:bg-white hover:text-stone-500  text-white rounded-md sm:font-bold font-semibold py-2 px-3"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => {
                        reject(p.id, p.fileName, false);
                      }}
                      disabled={isDisabled}
                      className="bg-red-600 hover:bg-white hover:text-red-600 text-white rounded-md sm:font-bold font-semibold py-2 px-3"
                    >
                      Reject
                    </button>
                    <button
                      disabled={isDisabled}
                      onClick={() => {
                        accept(p);
                      }}
                      className="bg-green-500 hover:bg-white hover:text-green-500  text-white rounded-md sm:font-bold font-semibold py-2 px-3"
                    >
                      Accept
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Admin;
