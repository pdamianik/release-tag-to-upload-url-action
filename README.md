# Release tag to upload url

[![.github/workflows/tests](https://github.com/pdamianik/release-tag-to-upload-url-action/workflows/.github/workflows/test.yml/badge.svg?branch=v1.0.1)](https://github.com/pdamianik/release-tag-to-upload-url-action/actions/runs/182286716)

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
