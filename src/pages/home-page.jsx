import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { } = useNavigate();
  return <>
    <div className="w-full h-full flex flex-col items-center gap-20">
      <h1 className="font-bold text-6xl text-center w-full ">Welcome to my recipe page</h1>
      <div>
        <button 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          login to my page
        </button>
      </div>
    </div>

  </>
}
