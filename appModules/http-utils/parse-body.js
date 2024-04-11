
function parseBody(req) {
  return new Promise((resolve, reject) => {
     let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      resolve(body);
    });
    req.on("error", (e) => {
        reject(e);
      });
  })
   
  }
  module.exports = parseBody;