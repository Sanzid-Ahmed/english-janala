const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response.
    .then((res) => res.json()) // promise of jeson data. 
    .then((json) => displayLesson(json.data))
};

const loadLevelWord = (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevwlWord(data.data));
};

const displayLevwlWord =(words)=> {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    words.forEach(word =>{
        const card = document.createElement("div");
        card.innerHTML = `<p>Hello</p>`;

        wordContainer.append(card);
    })
};

const displayLesson = (lessons)=>{
    // 1. get the container. 
    // 2. get into evely lesson. 
    // 3. creat element. 
    // 4. append into container.
    
    // 1
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2
    for(let lesson of lessons){
        // 3. 
        console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button onclick = "loadLevelWord(${lesson.level_no})"  class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>`;
        // 4.
        levelContainer.append(btnDiv);
    }
}; 

loadLessons();
