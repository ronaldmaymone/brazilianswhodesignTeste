import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("2PACX-1vTGWvhLSskB3J_Re10p6VPYmF4j8PNE_1FPsOEASlsWT5eBUphI1iNVhMotIsdnjnVZHUX64ViIWg7r");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
