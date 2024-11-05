window.onload = function () {



    fetch('https://api.npoint.io/b42e30b4f83c6842308a?fbclid=IwY2xjawGSMHVleHRuA2FlbQIxMAABHRWFCcVB9jkWyqart5QP-moNU8Dg-Zdraco_zDv5lLcaW1AF1ma14jfdZQ_aem_B3HqGcwEJyzboQXKWQlVTQ')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let posts = json.posts;
            let divpage = document.getElementsByClassName("content-container")[0];



            for (let i = 0; i < posts.length; i++) {

                const post = posts[i];
                let div = document.createElement("div");
                div.className = 'content-box';

                // Post creation time, author and profile picture
                let postHeaderDiv = document.createElement("div");
                let p = document.createElement("p");
                p.innerText = post["create-time"];
                postHeaderDiv.appendChild(p);
                
                let imgAndAuthorDiv = document.createElement("div");
                let img = document.createElement("img");
                img.src = "res/pics/me.png";
                img.alt = "Profile Icon";
                img.width = 30;
                img.height = 30;
                imgAndAuthorDiv.appendChild(img);

                let author = document.createElement("p");
                author.innerText = post["author"];
                imgAndAuthorDiv.appendChild(author);

                postHeaderDiv.appendChild(imgAndAuthorDiv);
                div.appendChild(postHeaderDiv);

                // Post content
                if (post.picture) {
                    let img1 = document.createElement("img");
                    img1.src = post.picture;
                    img1.style.width = "100%";

                    let p1 = document.createElement("p");
                    p1.innerText = post["picture-info"];
                    div.appendChild(img1);
                    div.appendChild(p1);
                }

                if (post.desc) {
                    let p2 = document.createElement("p");
                    p2.innerText = post.desc;
                    div.appendChild(p2);
                }

                // Like count
                let p3 = document.createElement("p");
                p3.innerText = "🖤 " + post["like-count"];
                div.appendChild(p3);



                divpage.appendChild(div);



            }


        })



}