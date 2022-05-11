const app = require("./app");
const port = 3000

// start BE server
app.listen(port, () => {
    console.log(`Server listening on Port = ${port}`);
});