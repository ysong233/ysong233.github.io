---
layout: post
title: Improving Deep Neural Network Hyperparameter Course Notes
date: 2020-10-06 18:18:23 +0900
category: Deep Learning
---



# Improving Deep Neural Network Hyperparameter Notes

## Train/Dev/test Datasets

We can not know exactly right values of NN parameters for the first attempt.

> Idea<>Code<>Experiment (Iterative Process)

Structured Data: Advertisements, Search Results..

One area often can not change to other areas 

Training Set: dor training

Development Set:(Valid Set)  which model performs best

Test Set: evaluation, unbaised

In general, 70/30 Training/Test, 60/20/20 for three sets

But, for 1 million data (larger dataset), val,test can have less percentage(98/1/1, 99.5/.4/.1)

Dev and Test must comes from similar distribution od Training, however, if unbiased is unnecessary, test might not be necessary.

## Bias/Variance

HIgh Bias: High Training Error

HIgh Variance: High Test Error, Too much flexibility, overfitting

For high dimension, some part may be high bias, some may high variance

## Basic Recipe 

High Bias: Bigger Network (Train longer, More hidden neurons, more layers, better NN structure)

(Trade-off)

High Variance: (More data, regularization, better NN structure)

## Regularization

P-problem: the question can be solved in Polynomial time

NP-problem: a solution to the question can be verified correct/not in polynomial time

NP-hard problem: All NP problem can be reduced to one problem , that problem is called NP-hard

If an NP-hard problem is also NP, it's NP-complet.

Polynomial time: O(n^m) m is a constant. Time grows with input data number.

==Lagrange Multiplier==： [如何理解拉格朗日乘子法？](https://www.zhihu.com/question/38586401)







