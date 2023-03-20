
var videos = [];

$("#farm-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_farm_idx = 0;
    current_bear_idx = 0;

    farmVideo = document.getElementById('farm-video');
    bearVideo = document.getElementById('bear-video');

    farmThumbnails = [
        document.getElementById('original'),
        document.getElementById('autumn'),
        document.getElementById('desert-sand'),
        document.getElementById('midnight'),
        document.getElementById('snow'),
        document.getElementById('storm'),
        document.getElementById('sunset'),
      ];
      for (var i = 0; i < farmThumbnails.length; i++) {
        farmThumbnails[i].addEventListener('click', change_farm_index.bind(this, i));
      }
      change_farm_index(current_farm_idx);


      bearThumbnails = [
        document.getElementById('original-bear'),
        document.getElementById('grizzly'),
        document.getElementById('polar'),
        document.getElementById('panda'),
      ];
      for (var i = 0; i < bearThumbnails.length; i++) {
        bearThumbnails[i].addEventListener('click', change_bear_index.bind(this, i));
      }
      change_bear_index(current_bear_idx);

  });
  
function change_farm_index (idx) {
    farmThumbnails[idx].classList.add("active-btn");
    if (current_farm_idx != idx) {
        farmThumbnails[current_farm_idx].classList.remove("active-btn");
    }
    current_farm_idx = idx;
    farmVideo.src = "data/videos/farm/farm-" + farmThumbnails[idx].id + ".mp4";
    farmVideo.load();
}

function change_bear_index (idx) {
    bearThumbnails[idx].classList.add("active-btn");
    if (current_bear_idx != idx) {
        bearThumbnails[current_bear_idx].classList.remove("active-btn");
    }
    current_bear_idx = idx;
    bearVideo.src = "data/videos/bear/bear-" + bearThumbnails[idx].id + ".mp4";
    bearVideo.load();
}