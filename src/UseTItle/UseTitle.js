import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Kidspace `;
    }, [title])
}

export default useTitle;