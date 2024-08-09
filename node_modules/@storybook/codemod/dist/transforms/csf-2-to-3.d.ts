import { FileInfo, API } from 'jscodeshift';

declare function transform(info: FileInfo, api: API, options: {
    parser?: string;
}): Promise<string>;
declare const parser = "tsx";

export { transform as default, parser };
