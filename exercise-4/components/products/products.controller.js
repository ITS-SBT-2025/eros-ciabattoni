import ErrorWithStatus from "../../error-with-status.js";
import * as productsService from "./products.service.js";
import z from "zod";

export const getProductById = async (req, res) => {
  // validazione tramite ZOD
  // verifico che req.params.id sia un numero positivo
  const schema = z.object({
    params: z.object({
      id: z.preprocess((val) => Number(val), z.number().positive()),
    }),
  });

  const isValidData = await schema.safeParseAsync({
    params: req.params,
  });

  if (!isValidData.success) {
    throw new ErrorWithStatus(422, isValidData.error.issues);
  }

  const product = productsService.getProductById(Number(req.params.id));

  res.status(200).json(product);
};

export const getAllProducts = (req, res) => {
  const products = productsService.getAllProducts();

  res.status(200).json(products);
};

export const createProduct = async (req, res) => {
  // validazione tramite ZOD
  // verifico che i campi dentro req.body siano del tipo corretto
  // definisco lo schema di come mi aspetto che siano i dati
  const schema = z.object({
    body: z.object({
      name: z.string(),
      description: z.string(),
      price: z.number().positive(),
      inStock: z.boolean(),
    }),
  });

  // associo il body dello schema con il body della richiesta (req.body)
  // verifico che gli input siano corretti
  const isValidData = await schema.safeParseAsync({
    body: req.body,
  });

  if (!isValidData.success) {
    // se gli input non erano corretti, lancio l'errore
    throw new ErrorWithStatus(422, isValidData.error.issues);
  }

  const product = productsService.createProduct(req.body);

  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  // validazione tramite ZOD
  // verifico che req.params.id sia un numero positivo
  // verifico che i campi dentro req.body siano del tipo corretto
  const schema = z.object({
    params: z.object({
      id: z.preprocess((val) => Number(val), z.number().positive()),
    }),
    body: z.object({
      name: z.string(),
      description: z.string(),
      price: z.number().positive(),
      inStock: z.boolean(),
    }),
  });

  const isValidData = await schema.safeParseAsync({
    params: req.params,
    body: req.body,
  });

  if (!isValidData.success) {
    throw new ErrorWithStatus(422, isValidData.error.issues);
  }

  const product = productsService.updateProduct({
    ...req.body,
    id: Number(req.params.id),
  });

  res.status(200).json(product);
};

export const deleteProduct = async (req, res) => {
  // validazione tramite ZOD
  // verifico che req.params.id sia un numero positivo
  const schema = z.object({
    params: z.object({
      id: z.preprocess((val) => Number(val), z.number().positive()),
    }),
  });

  const isValidData = await schema.safeParseAsync({
    params: req.params,
  });

  if (!isValidData.success) {
    throw new ErrorWithStatus(422, isValidData.error.issues);
  }

  const result = productsService.deleteProduct(Number(req.params.id));

  res.status(200).json(result);
};
