import { Addon_DecoratorFunction } from 'storybook/internal/types';

declare const decorators: Addon_DecoratorFunction[];
declare const parameters: {
    backgrounds: {
        grid: {
            cellSize: number;
            opacity: number;
            cellAmount: number;
        };
        values: {
            name: string;
            value: string;
        }[];
    };
};
declare const initialGlobals: {
    backgrounds: any;
};

export { decorators, initialGlobals, parameters };
