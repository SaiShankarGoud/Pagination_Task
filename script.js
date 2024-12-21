
let images = [
    {title: "Mountain landscape with sunset", category: "nature", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s"},
{title: "Holding a tree in a ball - Ecology concep", category: "nature", url: "https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg"},
{title: "Abstract Autumn Leaf Vein Pattern", category: "nature", url: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"},
{title: "AI-generated Hawk", category: "nature", url: "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg"},
{title: "Abstract AI Artwork", category: "nature", url: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"},
{title: "Space Nebula", category: "nature", url: "https://cdn.esawebb.org/archives/images/screen/weic2425a.jpg"},
{title: "Snow-covered Trees in Winter", category: "nature", url: "https://images.pexels.com/photos/289998/pexels-photo-289998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
{title: "Beautiful Tree Landscape", category: "nature", url: "https://cdn.pixabay.com/photo/2022/05/23/11/26/tree-7215935_1280.jpg"},
{title: "Nature Scene with Sky and Grass", category: "nature", url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"},
{title: "Serenity in Nature", category: "nature", url: "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VyZW5pdHl8ZW58MHx8MHx8fDA%3D"},
{title: "Tree in a Forest", category: "nature", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&s"}
];

let currentPage = 0;
let imagesPerPage = 3;

function showImages() {
let gallery = document.getElementById("imagephotos");
gallery.innerHTML = "";
let start = currentPage * imagesPerPage;
let end = start + imagesPerPage;
let pageImages = images.slice(start, end);

for (let image of pageImages) {

    let card = document.createElement('div');
    card.className = 'image-card';
    card.innerHTML = `
        <img src="${image.url}" alt="${image.title}">
        <h3>${image.title}</h3>
        <p>Category: ${image.category}</p>
    `;
    gallery.appendChild(card);
}
}

document.getElementById('prev').addEventListener('click', () => {
if (currentPage > 0) {
    currentPage--;
    showImages();
}
});

document.getElementById('next').addEventListener('click', () => {
if ((currentPage + 1) * imagesPerPage < images.length) {
    currentPage++;
    showImages();
}
});

showImages();