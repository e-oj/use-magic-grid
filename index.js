const React = require("react");
const MagicGrid = require("magic-grid");

const useMagicGrid = (props) => {
    const gridRef = React.useRef(null);
    const { container } = props;

    React.useEffect(() => {
        if (!container) {
            throw new Error("Container name or element is required");
        }

        if (!gridRef.current) {
            gridRef.current = new MagicGrid({ ...props, items: props.items || 1, static: false });
            gridRef.current.listen();
            return;
        }

        const grid = gridRef.current;
        const currentContainer = document.querySelector(grid.containerClass);
        const containerChanged = grid.container !== currentContainer;

        if (currentContainer && containerChanged){
            grid.setContainer(currentContainer);
        }
    });

    return gridRef.current;
};

module.exports = {
    useMagicGrid
}