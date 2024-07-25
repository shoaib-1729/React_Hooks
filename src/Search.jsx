import {forwardRef} from "react"
const Search = (props, ref) => {

    // useEffect(() => {
    //     // set focus
    //     if(focus){
    //         inputRef.current.focus();
    //         // make the focus false
    //         setFocus(false)
    //     }
    // }, [focus])

    return(
        <div>
            <input
            ref={ref}
            placeholder="Enter Search Term"
            aria-label="searchInput" />
        </div>
    )
}

export default forwardRef(Search);