// callbacks

// const fetchUserDetails = (userID, callback) => {
//   console.log("fetching user details");
//   setTimeout(() => {
//     callback("https://image.com/${userID}");
//   }, 500);
// };

// const downloadImage = (imageURL, callback) => {
//     console.log("Downloading image");
//     setTimeout(() => {
//         callback("Image data for ${imageURL}");
//     }, 500);
//   };

//   const render = (image) => {
//     console.log("render image");
//   }

//   fetchUserDetails("poorna", (imageURL) => {
//     downloadImage(imageURL, (ImageData) => {
//         render(ImageData);
//     })
//   })

//Promises

const fetchUserDetails = (userID) => {
  console.log("fetching user details");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("https://image.com/${userID}");
    }, 500);
  });
};

const downloadImage = (imageURL) => {
  console.log("Downloading image");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Image data for ${imageURL}");
    }, 500);
  });
};

const render = (image) => {
    console.log("render image");
  }

  fetchUserDetails("poorna")
  .then((imageURL) => downloadImage(imageURL))
  .then((ImageData) => render(ImageData))
  .catch((error) => {
    console.log(error);
  })
