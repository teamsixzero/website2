import { useEffect, useContext } from "react";
import { useLiveQuery } from "@sanity/preview-kit";
import { PreviewContext } from "../context/PreviewContext";

export const usePreview = (initialData, pageQuery) => {
  const {
    setActivePreview,
    setPreviewContextData,
    setPreviewIsLoading,
    setPreviewValidationData,
    setIsNewUnpublishedDoc,
    isNewUnpublishedDoc,
  } = useContext(PreviewContext);

  const [previewData, sanityPreviewIsLoading] = useLiveQuery(
    initialData,
    pageQuery,
    {
      slug: initialData?.slug?.current,
    }
  );

  useEffect(() => {
    setPreviewIsLoading(sanityPreviewIsLoading);
  }, [sanityPreviewIsLoading]);

  useEffect(() => {
    // Get URL params
    const urlSearchParams = new URLSearchParams(window.location.search);
    const previewModeParameter = urlSearchParams.get("previewMode");
    const previewDatasetParameter = urlSearchParams.get("previewDataset");
    const previewValidationDataParameter = urlSearchParams.get("validation");
    const previewIsNewUnpublishedDocParameter =
      urlSearchParams.get("isNewUnpublishedDoc") === "true";

    if (previewValidationDataParameter) {
      setPreviewValidationData(JSON.parse(previewValidationDataParameter));
    }

    if (previewModeParameter) {
      setActivePreview(true);
    }
    if (previewDatasetParameter) {
      setPreviewContextData({ previewDataset: previewDatasetParameter });
    }

    if (previewIsNewUnpublishedDocParameter) {
      setIsNewUnpublishedDoc(previewIsNewUnpublishedDocParameter);
    }
  }, []);

  return {
    previewData,
    previewIsLoading: sanityPreviewIsLoading,
    isNewUnpublishedDoc,
  };
};
