import React from "react"
import ContentLoader from "react-content-loader"

const ImagePlaceholder = (props) => (
    <ContentLoader
        speed={5}
        width={400}
        height={400}
        viewBox="0 0 400 400"
        backgroundColor="#3e3c3c"
        foregroundColor="#868383"
        {...props}
    >
        <rect x="57" y="9" rx="5" ry="5" width="250" height="316" />
    </ContentLoader>
)

export default ImagePlaceholder

