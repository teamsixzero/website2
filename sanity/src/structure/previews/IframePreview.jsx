import React, {useState, useEffect} from 'react'
import {useValidationStatus} from 'sanity'

// Function to assemble the preview URL based on the displayed object
const assembleProjectUrl = ({displayed, context, previewUrl, validation, isNewUnpublishedDoc}) => {
  // Construct the base preview URL
  const basePreviewUrl = previewUrl
  let slug =
    displayed?._type === 'page'
      ? displayed?.slug?.current
      : displayed?._type === 'project'
        ? `projects/${displayed?.slug?.current}`
        : `${displayed?._type}/${displayed?.slug?.current}`

  const validationArray = encodeURIComponent(JSON.stringify(validation))

  // Check if slug or basePreviewUrl is missing
  if (!slug || !basePreviewUrl) {
    console.warn('Missing slug or previewURL', {slug, basePreviewUrl})
    return ''
  }

  if (slug === 'index') {
    slug = ''
  }

  // Append the slug to the base URL to get the final page preview URL
  const finalPagePreviewUrl = `${basePreviewUrl}${slug}`

  return `${finalPagePreviewUrl}?previewMode=true&previewDataset=${context.dataset}&validation=${validationArray}&isNewUnpublishedDoc=${isNewUnpublishedDoc}`
}

// Component for rendering an iframe preview
const IframePreview = ({document, options}) => {
  const [url, setUrl] = useState(null)
  const {isMobilePreview, context, previewUrl} = options

  // Get validation status
  const {isValidating, validation} = useValidationStatus(
    document?.published?._id ||
      document?.displayed?._rev ||
      document?.displayed?._id?.replace('drafts.', ''),
    document?.published?._type || document?.displayed?._type,
  )

  const isNewUnpublishedDoc = !document?.published?._id
  const {displayed} = document

  // Update the URL when the document prop changes
  useEffect(() => {
    setUrl(assembleProjectUrl({displayed, context, previewUrl, validation, isNewUnpublishedDoc}))
  }, [displayed, validation])

  // Render a message if there is no document to preview
  if (!displayed) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <p>There is no document to preview</p>
      </div>
    )
  }

  // Render a message if there is a problem with the URL
  if (!url) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: '10px',
        }}
      >
        <p>
          There has been a problem constructing the web front-end URL. Please reselect the preview.
        </p>
      </div>
    )
  }

  // Render the iframe preview
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            maxWidth: isMobilePreview ? '360px' : 'none',
            maxHeight: isMobilePreview ? '800px' : 'none',
            transformOrigin: 'center',
            transform: isMobilePreview ? 'scale(1.3)' : 'none', // Scale the iframe size if it's a mobile preview
          }}
        >
          <iframe
            title="Iframe-preview-noa"
            src={url}
            frameBorder="0"
            allow="clipboard-write"
            style={{width: '100%', height: '100%'}}
          />
        </div>
      </div>
    </>
  )
}

export default IframePreview
