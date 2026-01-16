import fs from "fs";
import FormData from "form-data";
import rfs from "recursive-fs";
import basePathConverter from "base-path-converter";
import got from "got";

const JWT = process.env.PINATA_JWT;
if (!JWT) throw new Error("Missing PINATA_JWT env var");

const src = process.argv[2] || "course-metadata"; // folder that contains 0.json...4999.json
const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

async function pinDirectory() {
  const { files } = await rfs.read(src);
  const data = new FormData();

  for (const file of files) {
    data.append("file", fs.createReadStream(file), {
      filepath: basePathConverter(src, file), // preserves folder paths
    });
  }

  const res = await got(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${JWT}` },
    body: data,
  });

  console.log(res.body); // includes IpfsHash = ROOT folder CID
}

pinDirectory().catch(console.error);
