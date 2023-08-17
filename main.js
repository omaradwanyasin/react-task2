const userid = document.getElementById("userid");
const id = document.getElementById("id");
const title = document.getElementById("title");
const body = document.getElementById("body");
const input = document.getElementsByTagName("input");
const btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", (event) => {
  getdata(input[0].value);
});

async function getdata(input) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${input}`
  );
  const data = await response.json();
  userid.innerHTML = `userid: ${data["userId"]}`;
  id.innerHTML = `id: ${data["id"]}`;
  title.innerHTML = `title: ${data["title"]}`;
  body.innerHTML = `body: ${data["body"]}`;
}
