import { Request, Response } from "express";
import ErrorWithStatus from "../../error-with-status.js";
import * as productsService from "./products.service.js";
import z from "zod";

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const schema = z.object({
    params: z.object({
      id: z.preprocess((val) => Number(val), z.number().positive()),
    }),
  });

  const isValidData = await schema.safeParseAsync({
    params: req.params,
  });

  if (!isValidData.success) {
    throw new ErrorWithStatus(422, isValidData.error.issues[0].message);
  }

  const product = await productsService.getProductById(Number(req.params.id));

  res.status(200).json(product);
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const products = await productsService.getAllProducts();

  res.status(200).json(products);
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const schema = z.object({
    body: z.object({
      name: z.string(),
      description: z.string(),
      price: z.number().positive(),
      inStock: z.boolean(),
    }),
  });

  const isValidData = await schema.safeParseAsync({
    body: req.body,
  });

  if (!isValidData.success) {
    throw new ErrorWithStatus(422, isValidData.error.issues[0].message);
  }

  const product = await productsService.createProduct(req.body);

  res.status(201).json(product);
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
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
    throw new ErrorWithStatus(422, isValidData.error.issues[0].message);
  }

  const product = await productsService.updateProduct({
    ...req.body,
    id: Number(req.params.id),
  });

  res.status(200).json(product);
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const schema = z.object({
    params: z.object({
      id: z.preprocess((val) => Number(val), z.number().positive()),
    }),
  });

  const isValidData = await schema.safeParseAsync({
    params: req.params,
  });

  if (!isValidData.success) {
    throw new ErrorWithStatus(422, isValidData.error.issues[0].message);
  }

  const result = await productsService.deleteProduct(Number(req.params.id));

  res.status(200).json(result);
};
