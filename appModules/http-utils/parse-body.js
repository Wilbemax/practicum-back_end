function parseBody(req) {
  return new Promise((resolve, reject) => {
     let body = "";
     req.on("data", (chunk) => {
       body += chunk.toString();
     });
     req.on("end", () => {
       try {
         const parsedBody = JSON.parse(body);
         resolve(parsedBody);
       } catch (e) {
         reject(e);
       }
     });
     req.on("error", (e) => {
       reject(e);
     });
  });
 }
 
 module.exports = parseBody;
 