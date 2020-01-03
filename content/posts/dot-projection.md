---
title: Dot products and projections
date: 2019-05-12 17:36:20
tags:
  - Linear Algebra
excerpt: Why are they related?
---

Last year, I watched [3Blue1Brown's video](https://www.youtube.com/watch?v=LyGKycYT2v0&t=675s) of dot products, but I only had a vague idea about their connection to projections. However, dot products showed up again and again in my math courses, so I decided to rewatch it. To my relief, it makes much more sense after [MATH223](https://www.mcgill.ca/study/2018-2019/courses/math-223), and the connection is indeed "truly awesome" as 3B1B said in the video.

Now, I'm going to reconstruct the whole idea to deepen my understanding. I created images with the help of [Mathcha](https://www.mathcha.io/), an online math editor.

---

Multiplying a $\displaystyle 1\times 2$ matrix $\displaystyle \begin{bmatrix} u_{x} & u_{y} \end{bmatrix}$ with a 2D($\displaystyle 2\times 1$) vector $\displaystyle \begin{bmatrix} x\\ y \end{bmatrix}$ gives us a $\displaystyle 1\times 1$ scalar value $\displaystyle s\ =\ u_{x} x\ +u_{y} y.$We interpret this as "transforming any 2D vector to a point on the 1D number line". Although this numerical value is just from the familiar matrix-vector multiplication, its geometric meaning is exciting.

**Questions**

- What does multiplying by $\displaystyle \begin{bmatrix} u_{x} & u_{y} \end{bmatrix}$ mean geometrically?
- How is this related to taking the dot product with the vector $\displaystyle \begin{bmatrix} u_{x}\\ u_{y} \end{bmatrix}$?

![Imgur](https://i.imgur.com/exMKCKO.png)

Let $\displaystyle \vec{i} ,\ \vec{j}$ be unit vectors in $\displaystyle \mathbb{R}^{2}$, and let $\displaystyle \vec{u} \ =\begin{bmatrix} u_{x}\\ u_{y} \end{bmatrix} \  $be a unit vector on line $\displaystyle L$.

![Imgur](https://i.imgur.com/gJpdM5h.png)

But $\displaystyle \| \ proj_{\vec{i}} \ \vec{u} \ \| $ is just the x-coordinate of $\displaystyle \vec{u} ,\ u_{x}$. Now, if we want to know the orthogonal projection of any vector in $\displaystyle \mathbb{R}^{2}$ onto line $\displaystyle L$, we only need to find where $\displaystyle \vec{i} \ ,\ \vec{j} \ $ land.

**Note**: The projection outputs a **scalar**, the orange dot on the number line, not a 2D vector lying on the line. What we get is the <u>component</u> of a vector in the direction $\displaystyle \vec{u}$.

Define the transformation $\displaystyle T:\ \mathbb{R}^{2}\rightarrow \mathbb{R}$ as

$$
\begin{equation*}
T(\begin{bmatrix}
x\\
y
\end{bmatrix}) \ =\ \begin{bmatrix}
u_{x} & u_{y}
\end{bmatrix}\begin{bmatrix}
x\\
y
\end{bmatrix}
\end{equation*}
$$

which is the orthogonal projection onto line $\displaystyle L$.

First, is it linear? Let $\displaystyle \vec{v} ,\ \vec{w} \ \in \mathbb{R}^{2} ,\ c\ \in \mathbb{R} .$

$$
\begin{aligned}
T\left(\vec{0}\right) \  & =\ \begin{bmatrix}
u_{x} & u_{y}
\end{bmatrix}\begin{bmatrix}
0\\
0
\end{bmatrix} \ =\ 0\\
 & \\
T\left( c\vec{v} +\vec{w}\right) & =\ \begin{bmatrix}
u_{x} & u_{y}
\end{bmatrix}\begin{bmatrix}
cv_{x} +w_{x}\\
cv_{y} +w_{y}
\end{bmatrix}\\
 & =\ u_{x}( cv_{x} +w_{x}) \ +\ u_{y}( cv_{y} +w_{y})\\
 & =\ cv_{x} u_{x} \ +\ cv_{y} u_{y} +\ u_{x} w_{x} \ +u_{y} w_{y} \ (1)\\
 & \\
cT\left(\vec{v}\right) +T\left(\vec{w}\right) & =c\ \begin{bmatrix}
u_{x} & u_{y}
\end{bmatrix}\begin{bmatrix}
v_{x}\\
v_{y}
\end{bmatrix} \ +\ \begin{bmatrix}
u_{x} & u_{y}
\end{bmatrix}\begin{bmatrix}

w_{x}\\
w_{y}
\end{bmatrix}\\
 & =\ c( u_{x} v_{x} +u_{y} v_{y}) \ +\ ( u_{x} w_{x} +u_{y} w_{y)} \ (2)
\end{aligned}
$$

It is easy to see that (1) = (2), so it is linear. For any vector $\displaystyle \begin{bmatrix} x\\ y \end{bmatrix} \in \mathbb{R}^{2} ,\ $

$$
\begin{aligned}
T\left(\begin{bmatrix}
x\\
y
\end{bmatrix}\right) & =T\left( x\vec{i} \ +y\vec{j}\right)\\
 & =\ xT\left(\vec{i}\right) +yT\left(\vec{j}\right)\\
 & =\ xu_{x} \ +\ yu_{y}
\end{aligned}
$$

which is the same as taking the dot product $\displaystyle \begin{bmatrix} x\\ y \end{bmatrix} \cdot \begin{bmatrix} u_{x}\\ u_{y} \end{bmatrix}$.

What if $\displaystyle \vec{u}$ is not the unit vector? Then the unit vector will be $\displaystyle \vec{u}\frac{1}{||\ \vec{u} \ ||}$. So our matrix encoding the projection is now $\displaystyle \begin{bmatrix} \frac{u_{x}}{||\ \vec{u} \ ||} & \frac{u_{y}}{||\ \vec{u} \ ||} \end{bmatrix}$.

$$
\begin{aligned}
T\left(\begin{bmatrix}
x\\
y
\end{bmatrix}\right) \  & =\frac{xu_{x}}{||\ \vec{u} \ ||} \ +\ \frac{yu_{y}}{||\ \vec{u} \ ||}\\
\ ||\ \vec{u} \ ||\ T\left(\begin{bmatrix}
x\\
y
\end{bmatrix}\right) \  & =xu_{x} \ +\ yu_{y}
\end{aligned}
$$

The left hand is multiplying the projection of $\displaystyle \begin{bmatrix} x\\ y \end{bmatrix}$ onto $\displaystyle L$ by the length of $\displaystyle \vec{u}$, and the right hand side is $\displaystyle \begin{bmatrix} x\\ y \end{bmatrix} \cdot \begin{bmatrix} u_{x}\\ u_{y} \end{bmatrix}$

---

It is time to answer our questions:

- Geometrically, multiplying by $\displaystyle \begin{bmatrix} u_{x} & u_{y} \end{bmatrix}$ is the same as finding the component of any vector in direction $\displaystyle \vec{u} \ =\begin{bmatrix} u_{x}\\ u_{y} \end{bmatrix}$ and scaling by $\displaystyle \| \vec{u} \| $. The lengthy version: projecting one vector onto the other one and multiplying by the length of the one being projected onto.
- Applying this transformation gives us the same result as taking the dot product with $\displaystyle \vec{u}$.

This association is what he mentioned in the video as "duality", a fascinating concept in math, so it's definitely worth watching. Thanks again for the inspiration.
