export function isAssetDefined(asset) {
  if(asset) {
    if(asset.filename) {
      return true
    }
  }
  return false
}