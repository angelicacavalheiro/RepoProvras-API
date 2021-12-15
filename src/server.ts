import app, { init } from "./app";

const port = process.env.PORT || 4000;
console.log(process.env.PORT)
init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});