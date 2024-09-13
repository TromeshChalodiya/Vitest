import jwt from "jsonwebtoken";

// below func will test with call back function we pass in test as done
export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, "secret123", doneFn);
}

export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, "secret123", (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
  return promise;
}
