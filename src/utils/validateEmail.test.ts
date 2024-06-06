import {describe, expect, it} from "vitest";
import { validateEmail } from "./validateEmail";

describe('email validation function tests', () => {
    it('should validate a correct email', () => {
        expect(validateEmail('test@example.com')).toBe(true);
    })

    it('should invalidate an incorrect email with no @', () => {
        expect(validateEmail('testexample.com')).toBe(false);
    })

    it('should invalidate an incorrect email with multiple @', () => {
        expect(validateEmail('test@exa@mple.com')).toBe(false);
    })

    it('should invalidate an email without a domain', () => {
        expect(validateEmail('test@')).toBe(false);
    })

    it('should invalidate an email without character before @', () => {
        expect(validateEmail('@example.com')).toBe(false);
    })

    it('should invalidate an email without two character after dot', () => {
        expect(validateEmail('test@example.c')).toBe(false);
    })
})