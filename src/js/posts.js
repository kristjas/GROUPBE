window.onload = function() {



    fetch('https://api.npoint.io/b42e30b4f83c6842308a?fbclid=IwY2xjawGSMHVleHRuA2FlbQIxMAABHRWFCcVB9jkWyqart5QP-moNU8Dg-Zdraco_zDv5lLcaW1AF1ma14jfdZQ_aem_B3HqGcwEJyzboQXKWQlVTQ')
    // fetch('res/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let posts = json.posts;
            let divpage = document.getElementsByClassName("content-container")[0];

            

            for (let i = 0; i < posts.length; i++){

            let div = document.createElement("div");
            div.className = 'content-box';

            let div1 = document.createElement("div");
            let p = document.createElement("p");
            p.innerText=posts[i]["create-time"];
            div1.appendChild(p);
            let img = document.createElement("img");
            img.src="res/pics/me.png";
            img.alt="Profile Icon";
            img.width = 30;
            img.height = 30;
            div1.appendChild(img);
            div.appendChild(div1);

            if (posts[i].picture){
                let img1 = document.createElement("img");
                img1.src = posts[i].picture;
                img1.style.width = "100%";
            
                let p1 = document.createElement("p");
                p1.innerText=posts[i]["picture-info"];
                div.appendChild(img1);
                div.appendChild(p1);
            }

            if (posts[i].desc){
                let p2 = document.createElement("p");
                p2.innerText=posts[i].desc;
                div.appendChild(p2);
            }

            let p3 = document.createElement("p");
            p3.innerText = "🖤 " + posts[i]["like-count"];
            div.appendChild(p3);

            

            divpage.appendChild(div);

    

            }
        

        })



}