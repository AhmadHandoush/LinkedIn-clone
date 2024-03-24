import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;