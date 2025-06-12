import express from "express";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.status(200).json({
    descriprion: "pc",
    price: 1000,
  });
});

router.get("/", (req, res) => {
  res.status(200).json([
    {
      descriprion: "pc",
      price: 1000,
    },
  ]);
});

router.post("/", (req, res) => {
  res.status(201).json(req.body);
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    ...req.body,
    id: Number(req.params.id),
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json(req.params.id);
});

export default router;
