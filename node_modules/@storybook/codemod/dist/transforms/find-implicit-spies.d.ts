import { FileInfo } from 'jscodeshift';

declare function transform(info: FileInfo): Promise<void>;
declare const parser = "tsx";

export { transform as default, parser };
