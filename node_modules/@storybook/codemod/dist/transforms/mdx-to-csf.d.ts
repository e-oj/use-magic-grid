import { FileInfo } from 'jscodeshift';

declare function jscodeshift(info: FileInfo): Promise<string>;
declare function transform(info: FileInfo, baseName: string): Promise<{
    mdx: string;
    csf: string | null;
}>;
declare function nameToValidExport(name: string): string;

export { jscodeshift as default, nameToValidExport, transform };
