import { FileInfo } from 'jscodeshift';

declare function transform(info: FileInfo): Promise<string>;
declare const parser = "tsx";

export { transform as default, parser };
