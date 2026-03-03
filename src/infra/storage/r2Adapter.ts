/* eslint-disable */
// Minimal R2 storage adapter stub for BLD-027
// This file is a runtime stub and avoids importing external SDKs to keep CI green.

export async function uploadSignedUrl(key: string, expiresSeconds = 900) {
  // TODO: implement using @aws-sdk/s3-request-presigner and S3Client configured for R2
  return { url: `https://example.r2.local/${key}` };
}

export async function downloadSignedUrl(key: string, expiresSeconds = 300) {
  // TODO: implement using presigned GET URL
  return { url: `https://example.r2.local/${key}` };
}

export async function deleteObject(key: string) {
  // TODO: call R2 delete object API
  return { ok: true };
}
