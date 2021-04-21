import express from 'express';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {};

export const deletePost = async (req, res) => {};

export default router;
