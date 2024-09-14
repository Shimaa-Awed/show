// toggle light mode& dark mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

// show list with hover

{
  const changecolor = document.getElementById("changecolor");
  const hiddenUl = document.getElementById("hiddenul");

  changecolor.addEventListener("mousemove", (eo) => {
    hiddenUl.style.display = "block";
  });

  changecolor.addEventListener("mouseout", (eo) => {
    hiddenUl.style.display = "none";
  });
}

// change background color header
{
  const myHeader = document.querySelector(".myheader");
  const headerBg = document.getElementById("headerbg");
  headerBg.addEventListener("click", (eo) => {
    const random = Math.round(Math.random() * 360);
    myHeader.style.backgroundColor = `hsl(${random},44%,55%)`;

    const websiteTitle = document.querySelector(" header > h1");
    websiteTitle.style.backgroundColor = `hsl(${random},44%,55%)`;

    const dark = document.getElementById("dark");

    dark.style.backgroundColor = `hsl(${random},94%,55%)`;
  });
}

// change background h1 with click

{
  const titleBg = document.getElementById("titlebg");
  const titleAll = document.querySelectorAll("h1:not(#body > header > h1)");

  titleBg.addEventListener("click", (eo) => {
    const random = Math.round(Math.random() * 360);

    titleAll.forEach((item) => {
      item.style.backgroundColor = `hsl(${random},94%,55%)`;
    });
  });
}

// change h1 with click

{
  const changeColor = () => {
    return Math.round(Math.random() * 360);
  };
  const titleColor = document.getElementById("titlecolor");
  titleColor.addEventListener("click", (eo) => {
    const titleAll = document.querySelectorAll("h1:not(#body > header > h1)");

    titleAll.forEach((item) => {
      item.style.color = `hsl(${changeColor()},94%,55%)`;
    });
  });
}

// change sections background with click on section bg
// {const sectionBg = document.getElementById("sectionbg");

// const arrColor = ["#999", "#5f9ea0", "#d89218,", "#7625cd", "#5r8ea0"];
// let i = 0;
// sectionBg.addEventListener("click", (eo) => {
//   const sec = document.querySelectorAll("#sec");

//   sec.forEach((item) => {
//     item.style.backgroundColor = arrColor[i];
//   });

//   i < arrColor.length - 1?  i++:i = 0;
// });}

// change sections background with click on section bg rondom number
// {const sectionBg = document.getElementById("sectionbg");

// const arrColor = ["#999", "#5f9ea0", "#d89218,", "#7625cd", "#5r8ea0"];

// sectionBg.addEventListener("click", (eo) => {
//   const random = Math.floor(Math.random() * arrColor.length);
//   const sec = document.querySelectorAll("#sec");

//   sec.forEach((item) => {
//     item.style.backgroundColor = arrColor[random];
//   });
// });}
// change back ground section
{
  const sectionBg = document.getElementById("sectionbg");

  const arrColor = ["#999", "#5f9ea0", "#d89218,", "#7625cd", "#5r8ea0"];

  sectionBg.addEventListener("click", (eo) => {
    const sec = document.querySelectorAll("#sec");
    const random = Math.round(Math.random() * 255);

    for (let i = 0; i < sec.length; i++) {
      const item = sec[i];
      item.style.backgroundColor = `rgb(${random},194,124)`;
    }
  });
}

// auto writing by setintervel
{
  let counter = 1;
  const website = document.getElementById("website");

  const autoWriting = () => {
    const title = "Courses4Arab";
    website.innerText = title.slice(0, counter);
    counter++;
    if (title.length < counter) {
      clearInterval(stop);
    }
  };
  const stop = setInterval(autoWriting, 300);
}
// random video

{
  const buttonClass = document.querySelector(".buttonClass");
  const containerifrem = document.getElementById("containerifrem");
  let i = 0;

  buttonClass.addEventListener("click", (eo) => {
    const videoArr = [
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/rZxG6xkA0UU?si=Bv3LUUwPkHQslRsi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/ddmU2zlsYJA?si=94PZVnaBOjJA4yWL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/tvGkYJ87YTo?si=zR1nRW28Vyt5Dk_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/wAbjtMJ6KUk?si=I_ebeB7gCPNMXpIO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/f41xcB07Z_M?si=mXTsQA3fWt5u5FN7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    ];

    containerifrem.innerHTML = videoArr[i];
    i++;

    if (i === videoArr.length) {
      i = 0;
    }
  });
}
// section quote

{
  const quoteButton = document.getElementById("rondom-quote");
  const parentQuote = document.getElementById("parent-quote");

  let e = 0;
  quoteButton.addEventListener("click", (eo) => {
    const qutoArr = [
      ` <blockquote class="sidekick" lang="ar"> يقين بالله بكرا هتحلو<br> <cite>  شيماء عوض </cite>
</blockquote>`,

      ` <blockquote class="sidekick" lang="ar"> &#128514لا تتعلق باحد فانت لست قرد وهم ليسو اشجار<br> <cite>  شيماء عوض </cite>
</blockquote>`,

      ` <blockquote class="sidekick" lang="ar">اهدا كدا ي صحبي وخليكRalex<br> <cite>  شيماء عوض </cite>
</blockquote>`,
    ];

    parentQuote.innerHTML = qutoArr[e];
    e++;

    if (e === qutoArr.length) {
      e = 0;
    }
  });
}

// random heart
{
  const rondomHeart = document.getElementById("rondom-heart");
  const containerheart = document.getElementById("containerheart"); // تعريف المتغير
  const randomheartAndMoon = () => {
    const parentHeart = document.createElement("div");
    containerheart.append(parentHeart);

    const craeterandom = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "&#129505";

      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`;

      const moon = document.createElement("div");
      moon.classList.add("heart");
      moon.innerHTML = "&#128514;";

      moon.style.left = `${Math.random() * 100}%`;
      moon.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`;

      parentHeart.append(heart);
      parentHeart.append(moon);
    }, 50);

    setTimeout(() => {
      clearInterval(craeterandom);
    }, 5000);

    setTimeout(() => {
      parentHeart.remove();
    }, 4000);
  };
  rondomHeart.addEventListener("click", (eo) => {
    randomheartAndMoon();
  });
}

// click accordion

const plusAll = document.querySelectorAll(".plus");
plusAll.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];

    console.log(content);
    content.style.display = "block";
  });
});

plusAll.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];

    content.classList.toggle("activetr");
    if (content.classList.contains("activetr")) {
      content.style.height = `${content.scrollHeight}px`;
    } else {
      content.style.height = `0`;
    }
    //  toggle + & -
    item.classList.toggle("hide-plus");
    if (item.classList.contains("hide-plus")) {
      item.innerText = "-";
      item.style.transform = "translateY(-11px)";
    } else {
      item.innerText = "+";
      item.style.transform = "translateY(0)";
    }
  });
});

// digatal oclock

{
  const digatalClock = () => {
    const con = document.querySelector(".clockcontainer");
    const now = new Date();

    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = "am";
    let date = now.toTimeString();

    if (hours > 12) {
      hours = hours - 12;
      ampm = "pm";
    }
    if (sec < 10) {
      sec = `0 ${sec}`;
    }

    if (min < 10) {
      min = `0 ${min}`;
    }

    if (hours < 10) {
      hours = `0 ${hours}`;
    }
    if (hours == 0) {
      hours = "12";
    }
    const clock = `


<div class="date">
${date}
  </div>
  <div class="time">
    ${hours}:${min}:${sec} ${ampm}
  </div>


`;
    con.innerHTML = clock;
  };

  setInterval(digatalClock, 1000);
}

// slider img
// const arrpic =[

//  ` <img  src="/imgs/2.png" class="slider" alt="#" />`,
//   `<img src="/imgs/1.png" class="slider" alt="#" />`,
// `  <img src="/imgs/3.png" class="slider" alt="#" />`,
//   `<img src="/imgs/4.png" class="slider" alt="#" />`,
//  ` <img src="/imgs/5.png" class="slider" alt="#" />`
// ]

// let i = 0;
// const slidercontainer = document.getElementById("slidercontainer");
// const pre = document.getElementById("pre");
// const next = document.getElementById("next");
// slidercontainer.innerHTML += arrpic[i];
// pre.setAttribute=("disabled","")
// slidercontainer.innerHTML+= ` <p>slider #${i+1} of 5</p>`

// next.addEventListener("click",(eo) => {
//   i++
//   slidercontainer.innerHTML += arrpic[i];
//   slidercontainer.innerHTML +=  ` <p>slider #${i+1} of 5</p>`;

// })

const arrpic = [
  `<img src="imgs/2.png" class="slider" alt="#" />`,
  `<img src="/imgs/1.png" class="slider" alt="#" />`,
  `<img src="/imgs/3.png" class="slider" alt="#" />`,
  `<img src="/imgs/4.png" class="slider" alt="#" />`,
  `<img src="/imgs/5.png" class="slider" alt="#" />`,
];

let i = 0;
const slidercontainer = document.getElementById("slidercontainer");
const pre = document.getElementById("pre");
const next = document.getElementById("next");

slidercontainer.innerHTML = arrpic[i];
pre.disabled = true;
slidercontainer.innerHTML += `<p>slider #${i + 1} of 5</p>`;

next.addEventListener("click", () => {
  i++;
  slidercontainer.innerHTML = "";
  slidercontainer.innerHTML = arrpic[i];
  slidercontainer.innerHTML += `<p>slider #${i + 1} of 5</p>`;

  if (i === arrpic.length - 1) {
    next.disabled = true;
  }

  pre.disabled = false;
});

pre.addEventListener("click", () => {
  i++;
  slidercontainer.innerHTML = "";
  slidercontainer.innerHTML = arrpic[i];
  slidercontainer.innerHTML += `<p>slider #${i + 1} of 5</p>`;

  if (i === 0) {
    pre.disabled = true;
  }

  next.disabled = false;
});
