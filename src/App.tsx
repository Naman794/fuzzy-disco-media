/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));
const Industries = React.lazy(() => import("./pages/Industries"));
const IndustryDetail = React.lazy(() => import("./pages/IndustryDetail"));
const Contact = React.lazy(() => import("./pages/Contact"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-coral border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "services/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ServiceDetail />
          </Suspense>
        ),
      },
      {
        path: "industries",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Industries />
          </Suspense>
        ),
      },
      {
        path: "industries/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <IndustryDetail />
          </Suspense>
        ),
      },
      {
        path: "case-studies",
        element: (
          <div className="p-24 min-h-screen text-center">
            <h1 className="text-4xl font-bold">Case Studies</h1>
            <p className="mt-4">Page content coming soon.</p>
          </div>
        ),
      },
      {
        path: "case-studies/:id",
        element: (
          <div className="p-24 min-h-screen text-center">
            <h1 className="text-4xl font-bold">Case Study Detail</h1>
          </div>
        ),
      },
      {
        path: "blog",
        element: (
          <div className="p-24 min-h-screen text-center">
            <h1 className="text-4xl font-bold">Blog</h1>
          </div>
        ),
      },
      {
        path: "careers",
        element: (
          <div className="p-24 min-h-screen text-center">
            <h1 className="text-4xl font-bold">Careers</h1>
          </div>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "faq",
        element: (
          <div className="p-24 min-h-screen text-center">
            <h1 className="text-4xl font-bold">FAQ</h1>
          </div>
        ),
      },
      {
        path: "*",
        element: (
          <div className="p-24 min-h-screen text-center">
            <h1 className="text-4xl font-bold mt-20">404 - Not Found</h1>
          </div>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
