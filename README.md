<h1 align="center">Beyond Packages Rename action <img style="width:28px;height:28px;" src="https://user-images.githubusercontent.com/55245802/175317613-21f8f2d1-b33e-4b34-ae50-bd6cc7f61ba8.png"></img></h1> 

<p align="center">
<img src="https://github.com/sfelli/byd-package-rename/actions/workflows/main.yml/badge.svg"></img>
<p>

<h3 align="center">This action rename packages with a specific prefix name.For example to publish packages to npm and github registry on CI/CD</h3>
<p align="center" >
<img style="width:70%" src="https://user-images.githubusercontent.com/55245802/175319469-c1b5855e-0d54-4d9b-bb19-0e0e76929b37.png"></img>
<p>
  
## Inputs

### `packages-path`

`Optional` The pachages path. `Default` : `"./projects/**/package.json"`

### `old-prefix`

`Optional` The old prefix package. `Default` : `sixense`

### `new-prefix` 
`Optional` The new prefix package. `Default` : `sxd-platform`
  
### `publish-registry`

`Optional` The publish npm registry. `Default` : `"https://npm.pkg.github.com/"`
  
## Outputs

### `renamed packages`

The renamed packages with new prefix.

## Example usage

```yaml
uses: actions/byd-package-rename@main
with:
  packages-path: './libs/package.json'.
  old-prefix: 'stend'
  new-prefix: 'stend-platform'
  publish-registry: 'https://npm.pkg.github.com/'

```
