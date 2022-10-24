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
  newH1.append("Facts about Multicolored Tanager");
  img.after(newH1);


  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  li1.append("It is endemic to the mountains of Columbia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
  const ul = document.createElement("ul");
  ul.prepend(li1);
  ul.append(li2);
  newH1.after(ul);

  const h2 = document.createElement("h2");
  h2.append("Source");
  ul.after(h2);

  const a = document.createElement("a");
  a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  
  const textNode = document.createTextNode("Wikipedia");
  a.appendChild(textNode);
  h2.after(a);

});


