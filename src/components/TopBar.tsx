export const TopBar = () => {
    return (
      <div className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <div>
          <button className="mr-4 px-4 py-2 bg-black-500 font-md hover:bg-black rounded">Login</button>
          <button className="px-4 py-2 bg-slate-600 fond-md hover:bg-black rounded">Sign Up</button>
        </div>
      </div>
    );
  };