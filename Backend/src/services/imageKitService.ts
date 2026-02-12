import ImageKit, { toFile } from "@imagekit/nodejs";

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export default async function uploadFileToImageKit(buffer: Buffer, filename: string) {
  const response: ImageKit.FileUploadResponse = await client.files.upload({
    file: await toFile(Buffer.from(buffer), "file"),
    fileName: filename,
  });

  return response;
}
