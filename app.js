//importat a config sevidor
const { app, porta } = require("./config/servidor");

//execultaro servidor
app.listen(porta, () => {
  console.log("http://localhost:" + porta);
});
