export function generateTitle(title) {
  const hasKey = this.$t('route.' + title)
  if (hasKey) {
    return this.$t('route.' + title)
  }
  return title
}
