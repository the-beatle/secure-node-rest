import fs from "fs";
import path from "path";

export const save = skiTerms => {
  fs.writeFile(
    path.join(__dirname, "..", "data", "skiTerms.json"),
    JSON.stringify(skiTerms, null, 2),
    error => {
      if (error) {
        throw error;
      }
    }
  );
};

export const logger = (req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  if (Object.keys(req.body).length) {
    console.log(req.body);
  }
  next();
};
