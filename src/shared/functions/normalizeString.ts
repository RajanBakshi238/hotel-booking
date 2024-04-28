export function normalizeString(text: string): string {
  return text.replace(/[^\x20-\x7E]/g, '');
}

export function lowerCaseString(word: string) {
  return word.charAt(0).toLowerCase() + word.slice(1);
}

export function formatEmail(email: string){
    return lowerCaseString(normalizeString(email))
}
