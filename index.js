const React = require("react");
const MagicGrid = require("magic-grid");

const useMagicGrid = (props) => {
    const gridRef = React.useRef(null);
    const { container } = props;

    React.useEffect(() => {
        if (!container) {
            throw new Error("Container name is required");
        }

        if (!gridRef.current) {
            gridRef.current = new MagicGrid({ ...props, items: props.items || 1, static: false });
            gridRef.current.listen();
        }
    });

    return gridRef.current;
};

module.exports = {
    useMagicGrid
}