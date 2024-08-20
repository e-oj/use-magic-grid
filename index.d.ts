import MagicGrid, {MagicGridProps} from "magic-grid";

type useMagicGridProps = Omit<MagicGridProps, 'static'>

export function useMagicGrid(props: useMagicGridProps): MagicGrid
