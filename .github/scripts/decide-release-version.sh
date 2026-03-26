#!/usr/bin/env bash
set -euo pipefail

if [ -z "${GITHUB_OUTPUT:-}" ]; then
  echo "GITHUB_OUTPUT is not set. This script must run inside a GitHub Actions step."
  exit 1
fi

git fetch --tags --force

LATEST_TAG=$(git tag -l 'v*' --sort=-v:refname | head -n 1)
LATEST_VERSION=${LATEST_TAG#v}
PROJECT_VERSION=$(node -p "require('./package.json').version")

if [ -z "$LATEST_TAG" ]; then
  echo "No existing release tag found. Releasing current project version: $PROJECT_VERSION"
  echo "release=true" >> "$GITHUB_OUTPUT"
  echo "bump=false" >> "$GITHUB_OUTPUT"
  echo "new_version=$PROJECT_VERSION" >> "$GITHUB_OUTPUT"
  exit 0
fi

COMPARISON=$(node -e "
  const latest = process.argv[1];
  const project = process.argv[2];
  const parse = (v) => {
    const m = /^([0-9]+)\\.([0-9]+)\\.([0-9]+)$/.exec(v);
    if (!m) return null;
    return [Number(m[1]), Number(m[2]), Number(m[3])];
  };
  const a = parse(latest);
  const b = parse(project);
  if (!a || !b) {
    console.log('invalid');
    process.exit(0);
  }
  for (let i = 0; i < 3; i += 1) {
    if (b[i] > a[i]) { console.log('project_gt_latest'); process.exit(0); }
    if (b[i] < a[i]) { console.log('project_lt_latest'); process.exit(0); }
  }
  console.log('equal');
" "$LATEST_VERSION" "$PROJECT_VERSION")

if [ "$COMPARISON" = "project_gt_latest" ]; then
  echo "Project version ($PROJECT_VERSION) is ahead of latest release ($LATEST_VERSION). Releasing project version without bump."
  echo "release=true" >> "$GITHUB_OUTPUT"
  echo "bump=false" >> "$GITHUB_OUTPUT"
  echo "new_version=$PROJECT_VERSION" >> "$GITHUB_OUTPUT"
elif [ "$COMPARISON" = "equal" ]; then
  echo "Project version matches latest release ($LATEST_VERSION). Will bump patch before release."
  echo "release=true" >> "$GITHUB_OUTPUT"
  echo "bump=true" >> "$GITHUB_OUTPUT"
elif [ "$COMPARISON" = "project_lt_latest" ]; then
  echo "Project version ($PROJECT_VERSION) is behind latest release ($LATEST_VERSION). Failing workflow."
  exit 1
else
  echo "Invalid semver. Expected x.y.z format. Project: $PROJECT_VERSION, Latest: $LATEST_VERSION"
  exit 1
fi
