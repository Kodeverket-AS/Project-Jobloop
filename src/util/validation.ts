/**
 * Ensures a value (e.g., an environment variable) is defined.
 *
 * Commonly used to validate `process.env.*` at app startup. If the value is
 * `undefined`, an error is thrown with the provided message; otherwise the
 * value is returned with a narrowed type.
 *
 * @returns {T} The validated (non-undefined) value.
 * @throws {Error} If `v` is `undefined`.
 *
 * @example
 * const DATABASE_URL = assertValue(process.env.DATABASE_URL, "Missing env: DATABASE_URL");
 */
export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}