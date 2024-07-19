import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Service from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import ServiceDetails from "./components/services/ServiceDetails.jsx";
import PageNotFound from "./components/common/PageNotFound.jsx";
import Careers from "./pages/Careers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "service/:id", element: <ServiceDetails /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "careers", element: <Careers /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";

// import Home from "./pages/Home.jsx";
// import LoadingSpinner from "./components/common/LoadingSpinner.jsx";
// const About = lazy(() => import("./pages/About.jsx"));
// const Service = lazy(() => import("./pages/Services.jsx"));
// const Gallery = lazy(() => import("./pages/Gallery.jsx"));
// const Contact = lazy(() => import("./pages/Contact.jsx"));
// const ServiceDetails = lazy(() =>
//   import("./components/services/ServiceDetails.jsx")
// );
// const PageNotFound = lazy(() => import("./components/common/PageNotFound.jsx"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//             <About />
//           </Suspense>
//         ),
//       },
//       {
//         path: "service",
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//             <Service />
//           </Suspense>
//         ),
//       },
//       {
//         path: "service/:id",
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//             <ServiceDetails />
//           </Suspense>
//         ),
//       },
//       {
//         path: "gallery",
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//             <Gallery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "contact",
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//             <Contact />
//           </Suspense>
//         ),
//       },
//       {
//         path: "*",
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//             <PageNotFound />
//           </Suspense>
//         ),
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
