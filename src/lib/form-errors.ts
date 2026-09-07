/**
 * Turns whatever TanStack Form put in `field.state.meta.errors` into one line
 * of text. The array holds standard-schema issues, plain strings, or nothing,
 * depending on which validator produced them.
 */
export function fieldErrors(errors: Array<unknown>): string {
  return errors
    .map((error) => {
      if (!error) return ''
      if (typeof error === 'string') return error
      const message = (error as { message?: unknown }).message
      return typeof message === 'string' ? message : ''
    })
    .filter(Boolean)
    .join(', ')
}
