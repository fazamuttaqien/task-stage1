let dataBlogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-blog-description").value;
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
  document.getElementById("blog-card").innerHTML = "";

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

    // let bulan = 0;
    // bulan = Math.abs(dataBlogs[index].endDate - dataBlogs[index].startDate);
    // console.log(`bulan : ${bulan}`);

    document.getElementById("blog-card").innerHTML += `
    <div class="card">
      <a href="./blog-details.html?id=${index}">
        <img src="./assets/image/blog-images/image-1.jpg" alt="" />
        <p class="card-title">${dataBlogs[index].title}</p>
        <p class="card-duration">duration : 3 months</p>
        <div class="card-content">
          <p>${dataBlogs[index].description}</p>
        </div>
        <div class="card-icon">${dataBlogs[index].tech
          .map((item) => `<i class='${item}'></i>`)
          .join("")}</div>
      </a>
      <div class="card-btn">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
    `;
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
