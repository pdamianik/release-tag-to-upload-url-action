# Release tag to upload url - DEPRECATED

[![latest-test](https://github.com/pdamianik/release-tag-to-upload-url-action/workflows/.github/workflows/test.yml/badge.svg?branch=v1.0.1)](https://github.com/pdamianik/release-tag-to-upload-url-action/actions?query=workflow%3A.github%2Fworkflows%2Ftest.yml)
[![latest-release](https://img.shields.io/github/v/release/pdamianik/release-tag-to-upload-url-action?label=latest-release)](https://github.com/pdamianik/release-tag-to-upload-url-action/releases/latest)

A js action that converts a release tag to the corresponding asset upload url

Btw. this repo has become useless because:

1. There is a native way to do it (see [The repo where this action would have been used](https://github.com/RiedleroD/DodgeToDrums/blob/26c9df7f079846c465891d96c6c5bd7c3c9013cc/.github/workflows/build.yml#L34))
2. I found a repo with exactly the same action as the one I coded in this repo (although I heavily researched to find a way to do this before I created this action; also the other repo is way older than mine, but I forgot the name and url)

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
uses: pdamianik/release-tag-to-upload-url-action@v1.0.1
with:
  tag: ${{ github.ref }}
  token: ${{ github.token }}
```

### Generally 
```yaml
uses: pdamianik/release-tag-to-upload-url-action@v1.0.1
with:
  tag: v1.0
  token: ${{ github.token }}
```
