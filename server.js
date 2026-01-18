const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const notes = [
  { name: "Alice", tel: "090-1111" },
  { name: "Bob", tel: "080-2222" },
  { name: "Carol", tel: "070-3333" }
];

app.get("/notes_from_b", (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
