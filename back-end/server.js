const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/api/items", (req, res) => {
  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "Description for Item 1",
      image: "https://picsum.photos/id/9/100",
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description for Item 2",
      image: "https://picsum.photos/id/21/100",
    },
  ];

  setTimeout(() => {
    res.json(items);
  }, 1000);
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
