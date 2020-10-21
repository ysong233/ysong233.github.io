---
layout: post
title: Using TensorRT to accelerate GPU calculation
date: 2020-10-06 18:18:23 +0900
category: GTC2020
---

TensorRT: Specially designed for Inference Step (feedforward procedure)

> Combination of different layers Vertical and Horizontal

Training: need to track the intermidiate value,

Reference: only need final result

Process:

1. Change tensorflow model to ONNX as inout
2. Choose GPU(Parse & Build the Engine)
3. De-serialize the Engine and deploy with Runtime

TensorRT can be used in Server and Edge devices, and has C++ and Python API

What is the Nvidia CUDA kernel?

Multi-Stream Concurrent Execution



