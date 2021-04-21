import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
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
  const { term , minRating, minViews, dateTimeUpload, videosLength, addPlaylistMark } = req.body;

  const newPostMessage = new PostMessage({ term , minRating, minViews, dateTimeUpload, videosLength, addPlaylistMark })

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage );
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {};

export const deletePost = async (req, res) => {};

export default router;
