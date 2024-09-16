const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const postingAddInterval = setInterval(addPost, 5000);

  showPost();

  function showPost(){
    const posts = document.querySelector(".name");
    const postings = freelancers.map((post) => {
        const element = document.createElement("li");
        element.classList.add(post.name, post.price, post.occupation);
        return element;
    });
    posts.replaceChildren(...postings);
  }