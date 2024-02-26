let dataBlogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let techCheckbox = [
    ...document.querySelectorAll("input[name='tech-icon']:checked"),
  ];

  let tech = techCheckbox.map((item) => item.value);
  let valueStartDate = new Date(startDate);
  let valueEndDate = new Date(endDate);

  // let checkboxReactJS = document.getElementById("checkbox-reactjs").checked;
  // let checkboxNodeJS = document.getElementById("checkbox-nodejs").checked;
  // let checkboxJava = document.getElementById("checkbox-java").checked;
  // let checkboxJavascript = document.getElementById(
  //   "checkbox-javascript"
  // ).checked;

  let dataBlog = {
    title,
    valueStartDate,
    valueEndDate,
    description,
    tech,
    // checkboxReactJS,
    // checkboxNodeJS,
    // checkboxJava,
    // checkboxJavascript,
  };

  dataBlogs.push(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("cards").innerHTML = "";

  for (let index = 0; index < dataBlogs.length; index++) {
    // let icons = ``;
    // if (dataBlogs[index].checkboxReactJS) {
    //   icons += `<i class="fa-brands fa-react"></i>`;
    // }

    // if (dataBlogs[index].checkboxNodeJS) {
    //   icons += `<i class="fa-brands fa-node-js"></i>`;
    // }

    // if (dataBlogs[index].checkboxJava) {
    //   icons += `<i class="fa-brands fa-java"></i>`;
    // }

    // if (dataBlogs[index].checkboxJavascript) {
    //   icons += `<i class="fa-brands fa-js"></i>`;
    // }

    // <a href="./blog-details.html?id=${index}">
    //   </a>
    document.getElementById("cards").innerHTML += `
    <div class="cards_item">
      <div class="card">
          <!-- card image -->
          <div class="card_image">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>

          <!-- card content -->
          <div class="card_content">
            <h2 class="card_title">${dataBlogs[index].title}</h2>
            <p class="card_duration">duration : ${getFullDate(
              dataBlogs[index].valueStartDate,
              dataBlogs[index].valueEndDate
            )}</p>
            <p class="card_description">${dataBlogs[index].description}</p>
          </div>

          <!-- card icon -->
          <div class="card_icon">${dataBlogs[index].tech
            .map((item) => `<i class='${item}'></i>`)
            .join("")}
          </div>

          <!-- card button -->
          <div class="card_button">
            <button>edit</button>
            <button>delete</button>
          </div>
      </div>
    </div>
    `;
  }
}

function getFullDate(startDate, endDate) {
  let nowDate = new Date();
  let now = {
    hours: 24 - nowDate.getHours(),
    minutes: 60 - nowDate.getMinutes(),
    seconds: 60 - nowDate.getSeconds(),
  };

  let start = {
    years: startDate.getFullYear(),
    months: startDate.getMonth(),
    days: startDate.getDate(),
  };

  let end = {
    years: endDate.getFullYear(),
    months: endDate.getMonth(),
    days: endDate.getDate(),
  };

  let distance = {
    years: end.years - start.years,
    months: end.months - start.months,
    days: end.days - start.days,
  };

  if (distance.years > 0) {
    return `${distance.years} years`;
  } else if (distance.months > 0) {
    return `${distance.months} months`;
  } else if (distance.days > 0) {
    return `${distance.days} days`;
  } else if (now.hours > 0) {
    return `${now.hours} hours ${now.minutes} minutes ${now.seconds} seconds`;
  } else if (now.minutes > 0) {
    return `${now.minutes} minutes`;
  } else if (now.seconds > 0) {
    return `${now.seconds} seconds`;
  } else {
    return `timeout`;
  }
}

function renderDetailBlog(id) {
  console.log("id", id);

  const title = document.getElementById("title-h1");
  const data = dataBlogs[id];

  console.log(data);

  title.innerText = data.title;
}

function renderBlogList() {}
