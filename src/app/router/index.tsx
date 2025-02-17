import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { lazyLoad } from "@app/utils/lazyLoad";

const { Home } = lazyLoad(() => import('@views/pages/Home'));
const { CreateUser } = lazyLoad(() => import('@views/pages/CreateUser'));

export function Router() {
  return (
    <Suspense fallback={<div className="w-10 h-10 rounded-full border-4 border-r-white animate-spin"></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.createUser} element={<CreateUser />} />
      </Routes>
    </Suspense>
  )
}