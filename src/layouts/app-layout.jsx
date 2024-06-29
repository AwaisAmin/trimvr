import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main className="min-h-screen container">
        <Outlet />
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
        Made 💖 with Awais.Dev
      </div>
    </>
  );
};

export default AppLayout;
