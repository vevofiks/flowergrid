/**
 * Extracts plain text from Editor.js output data or returns the string if it's already text.
 * @param tldr - The TLDR content (string or Editor.js OutputData)
 * @returns extracted plain text
 */
export function extractTldrText(tldr: any): string {
    if (!tldr) return '';
    if (typeof tldr === 'string') return tldr;

    if (tldr.blocks && Array.isArray(tldr.blocks)) {
        return tldr.blocks.map((block: any) => {
            if (block.type === 'paragraph' || block.type === 'header') {
                return block.data.text;
            }
            if (block.type === 'list') {
                return block.data.items.join(' ');
            }
            return '';
        }).join(' ').replace(/<[^>]*>?/gm, ''); // Strip HTML tags just in case
    }

    return '';
}

/**
 * Extracts all image URLs from Editor.js output data
 * @param content - Editor.js OutputData
 * @returns Array of image URLs
 */
export function extractImageUrls(content: any): string[] {
    if (!content || !content.blocks || !Array.isArray(content.blocks)) return [];

    return content.blocks
        .filter((block: any) => block.type === 'image' && block.data?.file?.url)
        .map((block: any) => block.data.file.url);
}
