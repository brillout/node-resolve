console.log('=== Fails (as expected)')
console.log("require.resolve('vike-react/config')")
try {
  require.resolve('vike-react/config')
} catch (err) {
  console.log(err)
}
console.log()

console.log('=== Succeeds')
console.log("import.meta.resolve('vike-react/config')")
console.log(import.meta.resolve('vike-react/config'))
console.log()

console.log('=== Should fail')
console.log("> If it doesn't fail then it means that the parent parameter isn't supported: try again with `node --experimental-import-meta-resolve test.mjs`")
console.log("import.meta.resolve('vike-react/config', new URL('../', import.meta.url))")
console.log(import.meta.resolve('vike-react/config', new URL('../', import.meta.url)))
