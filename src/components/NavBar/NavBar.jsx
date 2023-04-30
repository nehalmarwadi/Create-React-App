import React from "react";

const NavBar = ({ data, setData, setIsLoading, setIsError }) => {
  function getUsersData() {
    setIsLoading(true);
    setTimeout(()=>{
      fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((response) => {
        setData(data => [...data, ...response?.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError((err) => ({
          ...err,
          error: true,
          msg: "Soemthing went wrong!",
        }));
        setIsLoading(false);
      });
    },2000)  
  }

  return (
    <nav className="w-full bg-black h-32 md:h-16 lg:h-16 px-6 py-4 flex flex-col justify-between md:flex-row">
      <h1 className="text-3xl text-white self-center">UserDataApplication</h1>
      <button
        class="bg-sky-500 hover:bg-sky-700 px-6 rounded-2xl hover:text-white"
        onClick={() => {
          getUsersData();
        }}
        disabled={data?.length ? true : false}
      >
        Get Users Data
      </button>
    </nav>
  );
};

export default NavBar;