
# zip-dist.ps1
$source = "dist"
$destination = "../webRelease/dist.zip"

# Make sure the release folder exists
$releaseFolder = Split-Path $destination
if (-not (Test-Path $releaseFolder)) {
    New-Item -ItemType Directory -Path $releaseFolder | Out-Null
}

# Remove existing zip if it exists
if (Test-Path $destination) {
    Remove-Item $destination
}

# Zip it
Compress-Archive -Path "$source\*" -DestinationPath $destination

Write-Host "✅ Zipped $source to $destination"
