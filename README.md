# Beyond Package Rename action

This action will rename packages name with a specific prefix name.For example to publish packages to npm and github.

## Inputs

### `packages-path`

**Optional** The pachages path. Default `"root/packages"`.

### `old-prefix`

**Required** The old prefix package prefix`.

### `new-prefix`

**Required** The new prefix package prefix`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/byd-package-rename@main
with:
  packages-path: './projects'
  old-prefix: 'sixense'
  new-prefix: 'sxd-platform'

```