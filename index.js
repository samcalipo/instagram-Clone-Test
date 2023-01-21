const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let num0 = posts[0].likes;
let num1 = posts[1].likes;
let num2 = posts[2].likes;

const postContainerClass = document.querySelector(".post-container");
renderPosts();
const iconImg0 = document.querySelector(".icon-img0");
const iconImg1 = document.querySelector(".icon-img1");
const iconImg2 = document.querySelector(".icon-img2");

const num0El = document.querySelector(".num0");
const num1El = document.querySelector(".num1");
const num2El = document.querySelector(".num2");


iconImg0.addEventListener("click", function() {
    num0++;
    num0El.textContent = num0 + " likes";
    
});
iconImg1.addEventListener("click", function() {
    num1++;
    num1El.textContent = num1 + " likes";
});
iconImg2.addEventListener("click", function() {
    num2++;
    num2El.textContent = num2 + " likes";
});

function renderPosts(){
    for (let i = 0; i < posts.length; i++){
        postContainerClass.innerHTML += `
            <div class="post-container">
                <div class="post-header-container">
                    <img class="user-avatar-img" 
                        src="${posts[i].post}" 
                        alt="${posts[i].name}">
                    <div>
                        <p class="post-username bold-text">${posts[i].name}</p>
                        <p class="post-user-location">${posts[i].location}</p>
                    </div>
                </div>
                
                <img class="post-main-image"src="${posts[i].post}" alt="self portrait of ${posts[i].name}">
                
                <div class="post-footer">
                    <div class="icons-container">
                        <img class="icon-img${i}" src="images/icon-heart.png" alt="like button">
                        <img class="icon-img" src="images/icon-comment.png" alt="comment button">
                        <img class="icon-img" src="images/icon-dm.png" alt="dm button">
                    </div>
                    <p class="bold-text num${i}">${posts[i].likes} likes</p>
                    <p><span class="bold-text">vincey1853</span>${posts[i].comment}</p>
                </div>
                
            </div> 
        `
        ;
    }
}

/*
<div class="post-container">
                <div class="post-header-container">
                    <img class="user-avatar-img" 
                        src="images/avatar-vangogh.jpg" 
                        alt="vangogh-avatar">
                    <div>
                        <p class="post-username bold-text">Vincent Van Gogh </p>
                        <p class="post-user-location">Zudert, Netherlands</p>
                    </div>
                </div>
                
                <img class="post-main-image"src="images/post-vangogh.jpg" alt="self portrait of Vincent Van Gogh">
                
                <div class="post-footer">
                    <div class="icons-container">
                        <img src="images/icon-heart.png" alt="like button">
                        <img src="images/icon-comment.png" alt="comment button">
                        <img src="images/icon-dm.png" alt="dm button">
                    </div>
                    <p class="bold-text">21,492 likes</p>
                    <p><span class="bold-text">vincey1853</span> just took a few mushroom lol </p>
                </div>
                
            </div> */
            