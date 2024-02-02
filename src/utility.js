function getImageUrls(imageUrls) { 
  console.log("Generating image URL");
  return `https://randomuser.me/api/portraits/${imageUrls}/44.jpg`;
}

export { getImageUrls };
