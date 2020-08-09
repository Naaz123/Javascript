    function addElement(str='',article=''){
        // create a new div element 
        if(str != ""){
            let newContainer = document.createElement("div");
                let newRow = document.createElement("div");
                newRow.setAttribute("class","row ");
                // newRow.setAttribute("style","width");
                    let newColumn = document.createElement("div");
                    newColumn.setAttribute("class","col-12 ");
                        let newDiv = document.createElement("div");
                        newDiv.setAttribute("class","btn btn-link");
                        newDiv.setAttribute("data-toggle","collapse");
                        newDiv.setAttribute("data-target",'.'+str);
                            let tag = document.createTextNode(str.toUpperCase());
                            newDiv.append(tag);
                    newColumn.append(newDiv);
                newRow.append(newColumn);
            newContainer.append(newRow);

            let newBr = document.createElement("br");
            
            let currentDiv = document.getElementById("articles");
            currentDiv.append(newContainer);
            currentDiv.append(newBr);     
            
        }
        else if(article != ""){ 
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class",article.section+" collapse");

                let newCard = document.createElement("div");
                newCard.setAttribute("class","card");

                    let newContainer = document.createElement("div");
                        let newRow = document.createElement("div");
                        newRow.setAttribute("class","row ");
                            let newColumn1 = document.createElement("div");
                            newColumn1.setAttribute("class","col-6 ");

                                    let newCardBody = document.createElement("div");
                                    newCardBody.setAttribute("class","card-body");
                        
                                        let newTag = document.createElement("p");
                                        newTag.setAttribute("id","heading");
                                        var tag = document.createTextNode(article.section);
                                        newTag.append(tag);
                                        newCardBody.append(newTag);
                                        
                                        let newDate = document.createElement("p");
                                        newDate.setAttribute("id","created_date");
                                        var date = document.createTextNode(article.created_date);
                                        newDate.append(date);
                                        newCardBody.append(newDate);

                                        let newTitle = document.createElement("p");
                                        newTitle.setAttribute("id","title");
                                        var title = document.createTextNode(article.title+" ");
                                        newTitle.append(title); 
                                        let newBline = document.createElement("span");
                                        newBline.setAttribute("id","by_line");
                                        var bline = document.createTextNode(article.byline);
                                        newBline.append(bline);
                                        newTitle.append(newBline);
                                        newCardBody.append(newTitle);

                                        let newAbstract = document.createElement("p");
                                        newAbstract.setAttribute("id","abstract");
                                        var abstract = document.createTextNode(article.abstract);
                                        newAbstract.append(abstract);
                                        newCardBody.append(newAbstract);

                                        let newUrl = document.createElement("a");
                                        newUrl.setAttribute("href",article.short_url);
                                        var sUrl = document.createTextNode("Continue Reading");
                                        newUrl.append(sUrl);
                                        newCardBody.append(newUrl);

                            newColumn1.append(newCardBody);

                            let newColumn2 = document.createElement("div");
                            newColumn2.setAttribute("class","col-6 ");
                                let newCardImg = document.createElement("div");
                                newCardImg.setAttribute("class","card-img");
                                    let newImg = document.createElement("img");
                                    newImg.setAttribute("src",article.multimedia[2].url);
                                newCardImg.append(newImg)
                            newColumn2.append(newCardImg);

                        newRow.append(newColumn1);
                        newRow.append(newColumn2);

                    newContainer.append(newRow);

                newCard.append(newContainer);

            newDiv.append(newCard);
            let newHr = document.createElement("hr");
            newDiv.append(newHr);            

            let currentDiv = document.getElementById('articles');
            currentDiv.appendChild(newDiv);
            
        }
    }
    
    const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4vgF7wcd2xqCo4Z56elcHxH7UVrIaNtf';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        let articles = data.results;
        var temp = []
        articles.map(function(article){
            temp.push(article.section);
        })
        uniqueSectionList = [... new Set(temp)]
        uniqueSectionList.map(function(section){
            addElement(section,'');

                articles.map(function(article){
                    if(article.section == section){
                        addElement('',article);
                    }
                })

        })
        
    })
    