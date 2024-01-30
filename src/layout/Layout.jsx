import { Outlet } from "react-router-dom";
import Header from "./Header";
function MainLayout() {
  return (
    <div className="h-full container mx-auto overflow-x-hidden">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
