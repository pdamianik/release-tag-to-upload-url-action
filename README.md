# Release tag to upload url

A js action that converts a release tag to the corresponding asset upload url

## Inputs

### `tag`

**Required** The tag of the release you want to get the upload url from

### `token`

**Required** The github api auth token to extended the maximum api request count

## Outputs

### `uploadUrl`

The upload url for the release

## Example usage

### In response to a release triggered event

```yaml
uses: pdamianik/release-tag-to-upload-url-action@v1.0
with:
  tag: ${{ github.ref }}
  token: ${{ github.token }}
```

### Generally 
```yaml
uses: pdamianik/release-tag-to-upload-url-action@v1.0
with:
  tag: v1.0
  token: ${{ github.token }}
```
