import { useRef, useEffect } from "react";
import MagicGrid from "magic-grid";

const useMagicGrid = (props) => {
    const gridsRef = useRef(null);
    const { container } = props;

    useEffect(() => {

        if (!container) {
            throw new Error("Container name is required");
        }

        if (!gridsRef.current) {
            console.log("recreating grid")
            gridsRef.current = new MagicGrid({ ...props, items: props.items || 1, static: false });
            gridsRef.current.listen();
        }
    });

    console.log("gridsRef.current is",gridsRef.current);
    return gridsRef.current;
};

export default useMagicGrid;
