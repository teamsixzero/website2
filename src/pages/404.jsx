import React, { useEffect, useContext } from "react";
import { Link } from "gatsby";

import { PreviewContext } from "../context/PreviewContext";

import Seo from "../components/Seo";

import Page from "../pages/{sanityPage.slug__current}";
import ProjectPage from "../pages/projects/{sanityProject.slug__current}";
import BlogPage from "../pages/blog/{sanityBlog.slug__current}";

const NotFoundPage = ({ location }) => {
  const {
    activePreview,
    setActivePreview,
    setPreviewContextData,
    setPreviewValidationData,
  } = useContext(PreviewContext);

  const getSlug = (url) => new URL(url).pathname.match(/[^\/]+/g);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const previewModeParameter = urlSearchParams.get("previewMode");
    const previewDatasetParameter = urlSearchParams.get("previewDataset");
    const previewValidationDataParameter = urlSearchParams.get("validation");

    if (previewValidationDataParameter) {
      setPreviewValidationData(JSON.parse(previewValidationDataParameter));
    }

    if (previewModeParameter) {
      setActivePreview(true);
    }

    if (previewDatasetParameter) {
      setPreviewContextData({ previewDataset: previewDatasetParameter });
    }
  }, []);

  if (activePreview) {
    const slugArray = getSlug(window.location.href)?.join("/");

    const pageTypeToComponentAndData = {
      projects: {
        component: ProjectPage,
        data: {
          sanityProject: {
            slug: {
              current: slugArray.replace("projects/", ""),
            },
          },
        },
      },
      blog: {
        component: BlogPage,
        data: {
          sanityBlog: {
            slug: {
              current: slugArray.replace("blog/", ""),
            },
          },
        },
      },
      default: {
        component: Page,
        data: {
          sanityPage: {
            slug: {
              current: slugArray,
            },
          },
        },
      },
    };

    const pageType = slugArray.startsWith("projects/")
      ? "projects"
      : slugArray.startsWith("blog/")
      ? "blog"
      : "default";

    const { component: PageComponent, data: pageData } =
      pageTypeToComponentAndData[pageType];

    return <PageComponent data={pageData} />;
  }

  return (
    <section className="page-404">
      <div className="page-404__wrapper">
        <h1>Page not found</h1>
        <p className="h4">
          Sorry, but the page you were trying to view does not exist.
        </p>
        <Link to="/" className="btn">
          <span>Return home →</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

export function Head() {
  return (
    <Seo>
      <title>Page not found | Sixzero</title>
    </Seo>
  );
}
