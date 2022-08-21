console.log("Enjoy adfree music");
let music = new Audio("");
// music.play();

// Creating songs array

const songs = [
  {
    id: "1",
    songName: `Ashq Na Ho
<div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/1.jpg",
  },

  {
    id: "2",
    songName: `Khairiyat
<div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/2.jpg",
  },

  {
    id: "3",
    songName: `Desh Mere
<div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/3.jpg",
  },
  {
    id: "4",
    songName: `Dhoka
<div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/4.jpg",
  },
  {
    id: "5",
    songName: `Tera Yaar Hoon Main
<div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/5.jpg",
  },
  {
    id: "6",
    songName: `Chunar
<div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/6.jpg",
  },
  {
    id: "7",
    songName: `Galti Se Mistake
  <div class="subtitle">Arijit Singh </div>`,
    poster: "img/thumbnail/Arijit/7.jpg",
  },
  {
    id: "8",
    songName: `Hamari Adhuri Kahani
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/8.jpg",
  },
  {
    id: "9",
    songName: `Neki Ki Raah
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/9.jpg",
  },
  {
    id: "10",
    songName: `Humdard
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/10.jpg",
  },
  {
    id: "11",
    songName: `Mere Yaaraa
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/11.jpg",
  },
  {
    id: "12",
    songName: `Nashe Si Chadh Gayi
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/12.jpg",
  },

  {
    id: "13",
    songName: `Ae Watan
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/13.jpg",
  },
  {
    id: "14",
    songName: `Agar Tum Sath Ho
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/14.jpg",
  },
  {
    id: "15",
    songName: `Pachtaoge
  <div class="subtitle">Arijit Singh</div>`,
    poster: "img/thumbnail/Arijit/15.jpg",
  }
  
];

Array.from(document.getElementsByClassName("songslist")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
);


// Search bar

let search_results = document.getElementsByClassName("search_results")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;
  // console.log(songName);
  let card = document.createElement("a");
  card.href = '#'+id;
  console.log(card.href);
  card.classList.add("card");
  card.innerHTML = ` 
  <img src="${poster}" alt=""/>
  <div class="song_name">
     ${songName}
  </div></a>`;
  search_results.appendChild(card);
  //targeting the input tag where user is gonna type the song name
  let input = document.getElementsByTagName('input')[0];

  //keyup : when keys are pressed they are being matched 
  input.addEventListener('keyup',() =>{
     let input_value = input.value.toUpperCase();
     let items = search_results.getElementsByTagName('a');

     for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('song_name')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)>-1) {
          items[index].style.display = "flex";
        } else {
          items[index].style.display = "none";
        }
        if(input.value==0){
          search_results.style.display="none";
        }
        else{
          search_results.style.display="block";
        }
      
     }
  })
});

// Search bar end




let playMusic = document.getElementById("playBtnMasterPlayer");
let heartanimation = document.getElementsByClassName("heart")[0];
let waveanimation = document.getElementsByClassName("now ")[0];
playMusic.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    playMusic.classList.remove("fa-circle-play");
    playMusic.classList.add("fa-circle-pause");
    heartanimation.style.animation = "animateHeart 1.8s ease-out infinite";
    // waveanimation.style.animation = 'animatewave .8s ease-out infinite ';
    waveanimation.classList.remove("paused");

    document.getElementById(`${index}`).classList.remove("fa-play");
    document.getElementById(`${index}`).classList.add("fa-pause");
    // console.log(index);
  } else {
    music.pause();
    playMusic.classList.add("fa-circle-play");
    playMusic.classList.remove("fa-circle-pause");

    heartanimation.style.animation = "";
    // waveanimation.style.animation = '';

    waveanimation.classList.add("paused");

    document.getElementById(`${index}`).classList.add("fa-play");
    document.getElementById(`${index}`).classList.remove("fa-pause");
  }
});
if (music.paused || music.currentTime <= 0) {
  waveanimation.classList.add("paused");
}

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playbtn")).forEach((element) => {
    element.classList.add("fa-play");
    element.classList.remove("fa-pause");
  });
};
const makeAllBackgrounds = () => {
  Array.from(document.getElementsByClassName("songslist")).forEach(
    (element) => {
      element.style.background = "rgb(0,0,0,0)";
    }
  );
};

let index = 0;
let masterplayer_thumbnail = document.getElementById("masterplayer_thumbnail");
let sname = document.getElementById("sname");
// let clicked= true;
let download_music = document.getElementById("downloadbtn");
Array.from(document.getElementsByClassName("playbtn")).forEach((element) => {
  // console.log(element.id);
  element.addEventListener("click", (e) => {
    index = e.target.id;

    //download music here you get id. mp3 for name set setAttribute('download', songName) in song_title.forEach((ele) => {
    download_music.href = `audio/Arijit/${index}.mp3`;
    // console.log(downloadbtn.href);
    makeAllPlays();

    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    music.src = `audio/Arijit/${index}.mp3`;
    masterplayer_thumbnail.src = `img/thumbnail/Arijit/${index}.jpg`;
    music.play();

    let song_title = songs.filter((ele) => {
      return ele.id == index;
    });

    song_title.forEach((ele) => {
      let { songName } = ele;
      sname.innerHTML = songName;
      let x = songName.textContent;
      // console.log(removeTags(songName));

      /*songName contains a string having song name, singer and also html elements 
       while downloading song, we will format songName with the help of removeTags()
       */
      function removeTags(str) {
        if (str === null || str === "") return false;
        else str = str.toString();

        // Regular expression to identify HTML tags in
        // the input string. Replacing the identified
        // HTML tag with a null string.
        return str.replace(/(<([^>]+)>)/gi, "");
      }

      // setting download attribute will give the name to song being downloaded
      download_music.setAttribute("download", removeTags(songName));
    });
    playMusic.classList.remove("fa-circle-play");
    playMusic.classList.add("fa-circle-pause");
    heartanimation.style.animation = "animateHeart 1.8s ease-out infinite";

    waveanimation.classList.remove("paused");
    // music.addEventListener("ended", () => {
    //   playMusic.classList.add("fa-circle-play");
    //   playMusic.classList.remove("fa-circle-pause");

    //   heartanimation.style.animation = "";

    //   waveanimation.classList.add("paused");
    // });
    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName('songslist'))[`${index-1}`].style.background= "rgba(0, 0, 0, 0.3)";
  });
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index == 0) {
    index = songs.length;
  }
  if (index < 0) {
    index = Array.from(document.getElementsByClassName("songslist")).length;
  }
  //  console.log(index);
  music.src = `audio/Arijit/${index}.mp3`;
  masterplayer_thumbnail.src = `img/thumbnail/Arijit/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    sname.innerHTML = songName;
  });
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("fa-play");
  document.getElementById(`${index}`).classList.add("fa-pause");
  playMusic.classList.remove("fa-circle-play");
  playMusic.classList.add("fa-circle-pause");
  heartanimation.style.animation = "animateHeart 1.8s ease-out infinite";

  waveanimation.classList.remove("paused");
});

let playNext = next.addEventListener("click", () => {
  index -= 0;
  index += 1;

  if (index > Array.from(document.getElementsByClassName("songslist")).length) {
    index = 1;
  }
  //  console.log(index);
  music.src = `audio/Arijit/${index}.mp3`;
  masterplayer_thumbnail.src = `img/thumbnail/Arijit/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    sname.innerHTML = songName;
  });
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("fa-play");
  document.getElementById(`${index}`).classList.add("fa-pause");
  playMusic.classList.remove("fa-circle-play");
  playMusic.classList.add("fa-circle-pause");
  heartanimation.style.animation = "animateHeart 1.8s ease-out infinite";

  waveanimation.classList.remove("paused");
});

// horizontal scrolling buttons for latest bollywood
let left_scroll1 = document.getElementById("left_scroll1");
let right_scroll1 = document.getElementById("right_scroll1");
let pop_songs = document.getElementsByClassName("pop_songs")[0];
left_scroll1.addEventListener("click", () => {
  pop_songs.scrollLeft -= 330;
});
right_scroll1.addEventListener("click", () => {
  pop_songs.scrollLeft += 330;
});

// horizontal scrolling buttons for popular artists
let left_scroll2 = document.getElementById("left_scroll2");
let right_scroll2 = document.getElementById("right_scroll2");
let pop_artists = document.getElementsByClassName("item")[0];
left_scroll2.addEventListener("click", () => {
  pop_artists.scrollLeft -= 330;
});

right_scroll2.addEventListener("click", () => {
  pop_artists.scrollLeft += 330;
});



// duration meter
let current_time = document.getElementById("current_time");
let total_duration = document.getElementById("total_duration");
let progress = document.getElementById("progress");
const progress_div = document.getElementById("progress_div");

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  total_duration.innerText = `${min}:${sec}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  if (min2 < 10) {
    min2 = `0${min2}`;
  }
  current_time.innerText = `${min2}:${sec2}`;

  let progress_time = (music_curr / music_dur) * 100;
  progress.style.width = `${progress_time}%`;
});

//Seek music bar

progress_div.addEventListener("click", (event) => {
  // console.log(event);
  let seek_progress =
    (event.offsetX / event.target.clientWidth) * music.duration;

  music.currentTime = seek_progress;
});

//volume control
music.volume = 0.5;
let vol = document.getElementById("vol");
let volDiv = document.getElementById("volDiv");
let volumeIcon = document.getElementById("volumeIcon");

volDiv.addEventListener("click", (event) => {
  // console.log(event);
  const seek_volume = event.offsetX / event.target.clientWidth;
  // console.log(seek_volume);
  music.volume = seek_volume;
  vol.style.width = `${music.volume * 100}%`;

  if (music.volume == 0) {
    volumeIcon.classList.add("bi-volume-mute-fill");
    volumeIcon.classList.remove("bi-volume-off-fill");
    volumeIcon.classList.remove("bi-volume-down-fill");
    volumeIcon.classList.remove("bi-volume-up-fill");
  }
  if (music.volume > 0 && music.volume < 0.3) {
    volumeIcon.classList.remove("bi-volume-mute-fill");
    volumeIcon.classList.add("bi-volume-off-fill");
    volumeIcon.classList.remove("bi-volume-down-fill");
    volumeIcon.classList.remove("bi-volume-up-fill");
  }
  if (music.volume > 0.3 && music.volume < 0.7) {
    volumeIcon.classList.remove("bi-volume-mute-fill");
    volumeIcon.classList.remove("bi-volume-off-fill");
    volumeIcon.classList.add("bi-volume-down-fill");
    volumeIcon.classList.remove("bi-volume-up-fill");
  }
  if (music.volume > 0.7) {
    volumeIcon.classList.remove("bi-volume-mute-fill");
    volumeIcon.classList.remove("bi-volume-off-fill");
    volumeIcon.classList.remove("bi-volume-down-fill");
    volumeIcon.classList.add("bi-volume-up-fill");
  }
});
// console.log(music.volume);

volumeIcon.addEventListener("click", () => {
  toggleVolume();
});
//toggle volume button function
function toggleVolume() {
  if (music.volume != 0) {
    music.volume = 0;
    vol.style.width = `${music.volume * 100}%`;
    volumeIcon.classList.add("bi-volume-mute-fill");
    volumeIcon.classList.remove("bi-volume-off-fill");
    volumeIcon.classList.remove("bi-volume-down-fill");
    volumeIcon.classList.remove("bi-volume-up-fill");
  } else {
    music.volume = 0.5;
    vol.style.width = `${music.volume * 100}%`;

    volumeIcon.classList.remove("bi-volume-mute-fill");
    volumeIcon.classList.remove("bi-volume-off-fill");
    volumeIcon.classList.add("bi-volume-down-fill");
    volumeIcon.classList.remove("bi-volume-up-fill");
  }
}

//  button to change music track -- repeatAll or repeat1 or shuffle
// initially  shuffle will be displayed hence name is given shuffle
let shuffle = document.getElementById("shuffle");

shuffle.addEventListener("click", () => {
  let x = shuffle.innerHTML;
  
  switch (x) {
    case "shuffle":
      shuffle.classList.add("fa-repeat");
      shuffle.classList.remove("fa-shuffle");
      shuffle.classList.remove("fa-arrow-rotate-right");
      shuffle.innerHTML = "repeatall";
      break;
    case "repeatall":
      shuffle.classList.remove("fa-repeat");
      shuffle.classList.remove("fa-shuffle");
      shuffle.classList.add("fa-arrow-rotate-right");
      shuffle.innerHTML = "repeat1";
      break;
    case "repeat1":
      shuffle.classList.remove("fa-repeat");
      shuffle.classList.add("fa-shuffle");
      shuffle.classList.remove("fa-arrow-rotate-right");
      shuffle.innerHTML = "shuffle";
      break;
  }
  console.log(x);
});




//function to repeat all songs
const repeatAll = () => {
  
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }

  //download music here you get id. mp3 for name set setAttribute('download', songName) in song_title.forEach((ele) => {
  download_music.href = `audio/Arijit/${index}.mp3`;
  // console.log(downloadbtn.href);
  makeAllPlays();

  music.src = `audio/Arijit/${index}.mp3`;
  masterplayer_thumbnail.src = `img/thumbnail/Arijit/${index}.jpg`;
  music.play();

  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    sname.innerHTML = songName;
    let x = songName.textContent;
    // console.log(removeTags(songName));

    /*songName contains a string having song name, singer and also html elements 
     while downloading song, we will format songName with the help of removeTags()
     */
    function removeTags(str) {
      if (str === null || str === "") return false;
      else str = str.toString();

      // Regular expression to identify HTML tags in
      // the input string. Replacing the identified
      // HTML tag with a null string.
      return str.replace(/(<([^>]+)>)/gi, "");
    }

    // setting download attribute will give the name to song being downloaded
    download_music.setAttribute("download", removeTags(songName));
  });

  playMusic.classList.remove("fa-circle-play");
  playMusic.classList.add("fa-circle-pause");
  heartanimation.style.animation = "animateHeart 1.8s ease-out infinite";
  waveanimation.classList.remove("paused");
};


//function to repeat One song
const repeatOne = () => {
   index;
  

  //download music here you get id. mp3 for name set setAttribute('download', songName) in song_title.forEach((ele) => {
  download_music.href = `audio/Arijit/${index}.mp3`;
  // console.log(downloadbtn.href);
  makeAllPlays();

  music.src = `audio/Arijit/${index}.mp3`;
  masterplayer_thumbnail.src = `img/thumbnail/Arijit/${index}.jpg`;
  music.play();

  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    sname.innerHTML = songName;
    let x = songName.textContent;
    // console.log(removeTags(songName));

    /*songName contains a string having song name, singer and also html elements 
     while downloading song, we will format songName with the help of removeTags()
     */
    function removeTags(str) {
      if (str === null || str === "") return false;
      else str = str.toString();

      // Regular expression to identify HTML tags in
      // the input string. Replacing the identified
      // HTML tag with a null string.
      return str.replace(/(<([^>]+)>)/gi, "");
    }

    // setting download attribute will give the name to song being downloaded
    download_music.setAttribute("download", removeTags(songName));
  });

  playMusic.classList.remove("fa-circle-play");
  playMusic.classList.add("fa-circle-pause");
  heartanimation.style.animation = "animateHeart 1.8s ease-out infinite";
  waveanimation.classList.remove("paused");
};


//function to Shuffle songs
const shuffleAll = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor((Math.random()*songs.length)+1);

  }


  //download music here you get id. mp3 for name set setAttribute('download', songName) in song_title.forEach((ele) => {
  download_music.href = `audio/Arijit/${index}.mp3`;
  // console.log(downloadbtn.href);
  makeAllPlays();

  music.src = `audio/Arijit/${index}.mp3`;
  masterplayer_thumbnail.src = `img/thumbnail/Arijit/${index}.jpg`;
  music.play();

  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach((ele) => {
    let { songName } = ele;
    sname.innerHTML = songName;
    let x = songName.textContent;
    // console.log(removeTags(songName));

    /*songName contains a string having song name, singer and also html elements 
     while downloading song, we will format songName with the help of removeTags()
     */
    function removeTags(str) {
      if (str === null || str === "") return false;
      else str = str.toString();

      // Regular expression to identify HTML tags in
      // the input string. Replacing the identified
      // HTML tag with a null string.
      return str.replace(/(<([^>]+)>)/gi, "");
    }

    // setting download attribute will give the name to song being downloaded
    download_music.setAttribute("download", removeTags(songName));
  });

  playMusic.classList.remove("fa-circle-play");
  playMusic.classList.add("fa-circle-pause");
  heartanimation.style.animation = "animateHeart 1.8s ease-out infinite";
  waveanimation.classList.remove("paused");
};


//AutoPlay next song depending upon the shuffle button
music.addEventListener('ended', ()=>{

   let x= shuffle.innerHTML;

   switch (x) {
    
    case 'repeatall':

       repeatAll();
      
      break;
    case 'repeat1':

       repeatOne();
      
      break;
    case 'shuffle':

       shuffleAll();
      
      break;
   
    
   }
   console.log(x);

  
})
