window.onload = function() {



    fetch('https://api.jsonbin.io/v3/qs/672516b5ad19ca34f8c248ae')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let posts = json.record.posts;
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