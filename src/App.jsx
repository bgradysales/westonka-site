import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import NotFoundPage from "./pages/NotFoundPage";

import { seoPages } from "./data/seoPages";
import { productCollections } from "./data/collections";

const smokeTests = [
  {
    name: "all page routes are unique",
    pass:
      new Set(
        [...seoPages, ...productCollections].map(
          (page) => page.slug
        )
      ).size ===
      seoPages.length + productCollections.length,
  },

  {
    name: "all collection pages have meta content",
    pass: productCollections.every(
      (item) =>
        item.metaTitle &&
        item.metaDescription &&
        item.sections.length >= 3
    ),
  },
];

smokeTests.forEach((test) => {
  if (!test.pass) {
    console.warn(
      `Westonka Outdoor Living smoke test failed: ${test.name}`
    );
  }
});

export default function App() {
  const initialPath =
    typeof window !== "undefined"
      ? window.location.pathname
      : "/";

  const [currentPath, setCurrentPath] =
    useState(initialPath);

  const currentSeoPage = seoPages.find(
    (page) => page.slug === currentPath
  );

  const currentCollection = productCollections.find(
    (item) => item.slug === currentPath
  );

  function navigateTo(path) {
    const [pathname, hash] = path.split("#");

    const nextPath = pathname || "/";

    const nextUrl = hash
      ? `${nextPath}#${hash}`
      : nextPath;

    if (typeof window !== "undefined") {
      window.history.pushState({}, "", nextUrl);
    }

    setCurrentPath(nextPath);

    setTimeout(() => {
      if (
        hash &&
        typeof document !== "undefined"
      ) {
        document
          .getElementById(hash)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      } else if (
        typeof window !== "undefined"
      ) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 0);
  }

  useEffect(() => {
    function handlePopState() {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(
      "popstate",
      handlePopState
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };
  }, []);

  if (currentSeoPage) {
    return (
      <ContentPage
        page={currentSeoPage}
        navigateTo={navigateTo}
        type="seo"
      />
    );
  }

  if (currentCollection) {
    return (
      <ContentPage
        page={currentCollection}
        navigateTo={navigateTo}
        type="collection"
      />
    );
  }

  if (currentPath !== "/") {
    return (
      <NotFoundPage
        navigateTo={navigateTo}
      />
    );
  }

  return (
    <HomePage navigateTo={navigateTo} />
  );
}