// Minimal R2 storage adapter stub for BLD-027
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const R2_ENDPOINT = process.env.R2_ENDPOINT;
const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET = process.env.R2_BUCKET;

const client = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: R2_ACCESS_KEY || '',
    secretAccessKey: R2_SECRET || ''
  }
});

export async function uploadSignedUrl(key: string, expiresSeconds = 900) {
  // In a full implementation, use @aws-sdk/s3-request-presigner to create presigned PUT URL
  return { url: `https://example.r2.local/${key}` };
}

export async function downloadSignedUrl(key: string, expiresSeconds = 300) {
  // In a full implementation, use presigned GET URL
  return { url: `https://example.r2.local/${key}` };
}

export async function deleteObject(key: string) {
  // In production, call client.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: key }));
  return { ok: true };
}

