export function validateEmail(email: string): boolean {
    /*const atPos = email.indexOf('@');
    const lastDotPos = email.lastIndexOf('.');

    if (atPos < 1) return false; // At least one character before @
    if (email.indexOf('@', atPos + 1) != -1) return false; // More than one '@'
    if (lastDotPos < atPos + 2) return false; // At least one character between '@' and '.'
    if (lastDotPos + 2 >= email.length) return false; // At least two character after the '.'

    return true;*/

    // Refacto to use regex to validate an email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
}