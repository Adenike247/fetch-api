let getPhotos;
fetch("https://api.pexels.com/v1/curated?per_page=12")
  .then((response) => response.json())
  .then((data) => {
    getPhotos = data.photos;
    let picture_data = "";
    getPhotos.map((photo) => {
      console.log(photo);
      picture_data += `
      <div >
    <img class="photographer_img" src= ${photo.src.portrait} alt="">
          <p class="photographer_name">${photo.photographer}</p>

      </div>
    
        `;
    });
    document.getElementById("photos").innerHTML = picture_data;
    // return data.photos;
  });
