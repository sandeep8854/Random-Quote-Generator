const btnE1 = document.getElementById("btn");
const quoteE1 = document.getElementById("quote");
const authorE1 = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnE1.innerText = "Loading...";
    btnE1.disabled = true;
    quoteE1.innerText = "Updating...";
    authorE1.innerText = "Updating...";
    // console.log("clicked");
    const responce = await fetch(apiURL);
    const data = await responce.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    // console.log(data);
    // console.log(quoteContent);
    // console.log(quoteAuthor);
    quoteE1.innerText = quoteContent;
    authorE1.innerText = `~ ${quoteAuthor}`;
    btnE1.innerText = "GET A QUOTE";
    btnE1.disabled = false;
  } catch (error) {
    quoteE1.innerText = "An error happened , try again later";
    authorE1.innerText = "An error happened";
    btnE1.innerText = "GET A QUOTE";
    btnE1.disabled = false;
  }
}
getQuote(); // quote will be presents.
btnE1.addEventListener("click", getQuote);
