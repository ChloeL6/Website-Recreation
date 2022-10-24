window.addEventListener("load", function () {
  const h1Element = document.querySelector("h1");
  h1Element.remove();

  let body = document.body;

  const h1 = document.createElement("h1");
  h1.append("Webpage Recreation Practice");
  body.after(h1);

  const p = document.createElement("p");
  p.append("The HTML of this webpage was created with JavaScript");
  h1.after(p);
  
  const img = document.createElement("img");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style","with:50%");
  p.after(img);

  const newH1 = document.createElement("h1");
  h1.append("Facts about Multicolored Tanager");
  img.after(h1);

  


});


