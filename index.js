const express = require("express");
const axios = require("axios");

const { kategori } = require("./helpers");

const app = express();

const laheluURL = "https://lahelu.com/api/post/";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dataConvertedHandler = (data) => {
  const dataConverted = data?.postInfos?.map((item) => {
    const categoryFind = kategori
      .find((category) => category?.id === item?.category)
      ?.name.toLowerCase();

    if (categoryFind !== undefined) {
      return {
        postID: item?.postID,
        title: item?.title.toLowerCase(),
        sourceMeme: `https://lahelu.com/post/${item?.postID}`,
        image: `https://cdn.lahelu.com/${item?.media}`,
        category: item?.category,
        categoryLink: `/category/${categoryFind}`,
        categoryName: categoryFind,
      };
    }
  });

  const results = {
    hasMore: data?.hasMore,
    page: data?.page,
    postInfos: dataConverted?.filter((item) => {
      return item !== undefined;
    }),
  };
  return results;
};

app.post("/", (req, res) => {
  const { page = 0 } = req.body;
  axios.get(`${laheluURL}get-feed?feed=2&page=${page}`).then((response) => {
    const { data, status, statusText } = response;

    const results = dataConvertedHandler(data);
    res?.send({
      status,
      data: results,
      message: statusText,
    });
  });
});

app.post("/category", (req, res) => {
  const { page = 0, categoryID = 0 } = req?.body;
  const userRequest = {
    page,
    categoryID,
  };

  const findCategory = kategori?.find(
    (item) => item?.id === userRequest?.categoryID
  );

  axios
    .get(
      `https://lahelu.com/api/post/get-category-posts?category=${findCategory?.id}&page=${page}`
    )
    .then((response) => {
      const { data, status, statusText } = response;

      const results = dataConvertedHandler(data);
      res?.send({
        status,
        data: results,
        message: statusText,
      });
    });
});

app.listen(8006);
