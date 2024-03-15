type SVGProps = React.SVGProps<SVGSVGElement>

export const Heart = (props: SVGProps) => (
    <svg aria-label="Like" height="19" role="img" viewBox="0 0 24 22" width="20" {...props}>
        <path
            d="M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z"
            stroke="currentColor"
            strokeWidth="2"
        ></path>
    </svg>
)

export const Comment = (props: SVGProps) => (
    <svg aria-label="Comment" color="" fill="" height="20" role="img" viewBox="0 0 24 24" width="20" {...props}>
        <title>Comment</title>
        <path
            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
    </svg>
)

export const Repost = (props: SVGProps) => (
    <svg
        {...props}
        aria-label="Repost"
        role="img"
        viewBox="0 0 24 24"
        style={{ fill: 'currentColor', height: '20px', width: '20px' }}
    >
        <title>Repost</title>
        <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
    </svg>
)

export const Share = (props: SVGProps) => (
    <svg
        aria-label="Share"
        color=""
        fill="rgb(243, 245, 247)"
        height="20"
        role="img"
        viewBox="0 0 24 24"
        width="20"
        {...props}
    >
        <title>Share</title>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
        ></line>
        <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        ></polygon>
    </svg>
)

export const Loader = (props: SVGProps) => (
    <svg aria-label="Loading..." role="img" viewBox="0 0 100 100" {...props}>
        <rect
            fill="currentColor"
            height="10"
            opacity="0"
            rx="5"
            ry="5"
            transform="rotate(-90 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="currentColor"
            height="10"
            opacity="0.125"
            rx="5"
            ry="5"
            transform="rotate(-45 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="currentColor"
            height="10"
            opacity="0.25"
            rx="5"
            ry="5"
            transform="rotate(0 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="currentColor"
            height="10"
            opacity="0.375"
            rx="5"
            ry="5"
            transform="rotate(45 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="currentColor"
            height="10"
            opacity="0.5"
            rx="5"
            ry="5"
            transform="rotate(90 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="currentColor"
            height="10"
            opacity="0.625"
            rx="5"
            ry="5"
            transform="rotate(135 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="currentColor"
            height="10"
            opacity="0.75"
            rx="5"
            ry="5"
            transform="rotate(180 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            fill="currentColor"
            height="10"
            opacity="0.875"
            rx="5"
            ry="5"
            transform="rotate(225 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
    </svg>
)
