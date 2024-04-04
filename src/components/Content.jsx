import React from "react";

const Content = () => {
  return (
    <div>
      <h1 className="bg-gray-300 hover:bg-blue-700 w-fit p-2 m-5 sm:p-5 rounded-lg  mx-auto sm:mx-auto font-semibold text-blue-500 hover:text-white sm:m-10 text-xl sm:text-3xl">
        Cyber Dude Networks
      </h1>

      <p className="text-center font-light w-full mb-5">
        Welcome to Cyber Dude Networks Pvt Ltd.., where a dedicated team of
        professionals works <br></br>together to bring innovation, creaativity
        and expertise to software industry get to know <br></br> the individuals
        who make our company thrive.
      </p>
      <hr />

      <h1 className="  w-fit p-2 m-3 sm:p-5   mx-auto sm:mx-auto font-semibold text-black  sm:mt-1 text-lg sm:text-xl">
        Meet Our Team
      </h1>

      <h1 className="bg-gray-300 hover:bg-blue-700 w-fit p-2 m-2 sm:p-3 rounded-lg  mx-auto sm:mx-auto font-semibold text-blue-500 hover:text-white sm:mt-1 text-xl sm:text-2xl">
        Leadership / Management Team
      </h1>
      <main className="max-w-md mx-auto mt-5">
        <img
          src="https://avatars.githubusercontent.com/u/15264938?v=4"
          alt="AnbuRocky-Photo"
          className="w-48 rounded-lg"
          title="Mr.AnbuSelvan - CEO"
        />
        <h1 className="font-semibold mt-2 text-red-600"> Mr.AnbuSelvan</h1>
        <h1 className="font-semibold  text-blue-600">Founder / CEO</h1>
      </main>
    </div>
  );
};

export default Content;
