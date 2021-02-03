const app = require("./src/app");
const port =  process.env.API_PORT || 5555;

app.set("port", port);
app.listen(port);

console.log(`Server us listening on ${port}`);