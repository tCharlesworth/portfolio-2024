export function isAssetDefined(asset) {
  if(asset) {
    if(asset.filename) {
      return true
    }
  }
  return false
}
export function ParseStoryblokDate(sbDate) {
  // From Storyblok: "2015-06-01 12:00"
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
  // To parse function: YYYY-MM-DDTHH:mm:ss.sssZ
  return new Date(Date.parse(sbDate.replace(' ', 'T')+'Z'))
}