/**
 * @param tldr 
 * @returns 
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
        }).join(' ')
        .replace(/<[^>]*>?/gm, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/\u00A0/g, ' ')
        .trim();
    }

    return '';
}

/**
 * @param content - Editor.js OutputData
 * @returns Array of image URLs
 */
export function extractImageUrls(content: any): string[] {
    if (!content || !content.blocks || !Array.isArray(content.blocks)) return [];

    return content.blocks
        .filter((block: any) => block.type === 'image' && block.data?.file?.url)
        .map((block: any) => block.data.file.url);
}
