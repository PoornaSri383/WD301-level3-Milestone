

// callbacks

const fetchUserDetails = (userID, callback) => {
  console.log("fetching user details");
  setTimeout(() => {
    callback("https://image.com/${userID}");
  }, 500);
};

const downloadImage = (imageURL, callback) => {
    console.log("Downloading image");
    setTimeout(() => {
        callback("Image data for ${imageURL}");
    }, 500);
  };

  const render = (image) => {
    console.log("render image");
  }

  fetchUserDetails("poorna", (imageURL) => {
    downloadImage(imageURL, (ImageData) => {
        render(ImageData);
    })
  })