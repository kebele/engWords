

const textInput = document.getElementById('text-input');
const buton = document.getElementById('buton');
const synth = window.speechSynthesis;

//tıkladığım yerin id sini alacak,
document.querySelector('.area').addEventListener('click', idAl);

//  MODAL KODLARI BAŞI

// get modal element
let modal = document.querySelector('#simpleModal');
//get the open model button
let modalBtn = document.getElementById('modalBtn');
//get close button
let closeBtn = document.querySelector('.closeBtn');
//let closeBtn = document.getElementsByClassName('closeBtn')[0]; 
//bu da aynı işi yapar, [0] indisli gösterime dikkat 

//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', clickOutside);



// MODAL KODLARI SONU



// o id yi konuçşma func basacak
//resmi büyütecek, yada animasyon yapacak
//2000 ms sonrada yok edecek

//burada modalı çalıştıracak



function idAl(e){
    //console.log(e.target.id);
    let x = textInput.textContent = e.target["id"];
    // console.log(e.target["id"]);
    //console.log(x);
    if(x==""){return;}
    const utterance = new SpeechSynthesisUtterance(x)
    utterance.lang = 'en-GB';
    utterance.volume = 0.9;
    utterance.rate = 0.87;
   speechSynthesis.speak(utterance);
//    document.getElementById(x).style.height="300px";
//    document.getElementById(x).style.width="250px";
   setTimeout(function(){
    document.getElementById(x).style.display= "none"
   }, 2000);
   openModal(e)
 
}

//resmin kaybolmasını sağlayan function
function resimGit(e){
    let x = e.target["id"];
    document.getElementById(x).style.display= "none"
}

//resimlerin olduğu array
let dizi = [
    {id :"bird", name :"kus", src : 'images/bird.png'},
    {id :"cat", name :"kedi", src:'images/cat.png'},
    {id :"angry", name :"sinirli", src:'images/angry.png'},
    {id :"cow", name :"inek", src:'images/cow.png'},
    {id :"lion", name :"aslan", src:'images/lion.png'},
    {id :"monkey", name :"maymun", src:'images/monkey.png'},
    {id :"plane", name :"uçak", src:'images/plane.png'},
    {id :"robot", name :"robot", src:'images/robot.png'},
    {id :"ship", name :"gemi", src:'images/ship.png'},
    {id :"umbrella", name :"şemsiye", src:'images/umbrella.png'},
    {id :"bed", name :"yatak", src:'images/bed.png'},   
    {id :"apple", name :"elma", src:'images/apple.png'},   
    {id :"apricot", name :"kayısı", src:'images/apricot.png'},   
    {id :"baby", name :"bebek", src:'images/baby.png'},   
    {id :"bag", name :"çanta", src:'images/bag.png'},   
    {id :"ball", name :"top", src:'images/ball.png'},   
    {id :"balloon", name :"balon", src:'images/ballon.png'},   
    {id :"banana", name :"muz", src:'images/banana.png'},   
    {id :"bicycle", name :"bisiklet", src:'images/bicycle.png'},  
    {id :"book", name :"kitap", src:'images/book.png'},   
    {id :"bottle", name :"şişe", src:'images/bottle.png'},   
    {id :"playing basketball", name :"basketball", src:'images/basketball.png'},
    {id :"bear", name :"ayı", src:'images/bear.png'},   
    {id :"box", name :"kutu", src:'images/box.png'},   
    {id :"boy and girl", name :"erkek ve kız çocuk", src:'images/boy_girl.png'},   
    {id :"chair", name :"sandalye", src:'images/chair.png'},   
    {id :"chicken", name :"tavuk", src:'images/chicken.png'},   
    {id :"clock", name :"saat", src:'images/clock.png'},   
    {id :"clown", name :"palyaço", src:'images/clown.png'},   
    {id :"cucumber", name :"salatalık", src:'images/cucumber.png'},   
    {id :"dog", name :"köpek", src:'images/dog.png'},   
    {id :"duck", name :"ördek", src:'images/duck.png'},   
    {id :"eagle", name :"kartal", src:'images/eagle.png'},   
    {id :"eating", name :"yemek yemek", src:'images/eating.png'},   
    {id :"elephant", name :"fil", src:'images/elephant.png'},   
    {id :"fish", name :"balık", src:'images/fish.png'},   
    {id :"playing football", name :"futbol oynamak", src:'images/football.png'},
    {id :"frog", name :"kurbaga", src:'images/frog.png'},    
    {id :"gloves", name :"eldivem", src:'images/gloves.png'},    
    {id :"green light", name :"yeşil ışık", src:'images/green_light.png'},    
    {id :"happy", name :"mutlu", src:'images/happy.png'},    
    {id :"hat", name :"sapka", src:'images/hat.png'},    
    {id :"hippopotamus", name :"su aygırı", src:'images/hippo.png'},   
    {id :"horse", name :"at", src:'images/horse.png'},    
    {id :"house", name :"ev", src:'images/house.png'},    
    {id :"hungry", name :"acıkmak", src:'images/hungry.png'},    
    {id :"ice cream", name :"dondurma", src:'images/ice_cream.png'},   
    {id :"jump", name :"zıplamak", src:'images/jumping.png'},    
    {id :"lemon", name :"limon", src:'images/lemon.png'},    
    {id :"motorbike", name :"motorsiklet", src:'images/motorbike.png'},
    {id :"pillow", name :"yastık", src:'images/pillow.png'},    
    {id :"red light", name :"kırmızı ışık", src:'images/red_light.png'},    
    {id :"rope", name :"ip", src:'images/rope.png'},    
    {id :"run", name :"koşmak", src:'images/run.png'},    
    {id :"sad", name :"üzgün", src:'images/sad.png'},    
    {id :"scissors", name :"makas", src:'images/scissors.png'},    
    {id :"shark", name :"köpek balığı", src:'images/shark.png'},    
    {id :"shoes", name :"ayakkabı", src:'images/shoes.png'},    
    {id :"sleep", name :"uyumak", src:'images/sleeping.png'},    
    {id :"snake", name :"yılan", src:'images/snake.png'},    
    {id :"socks", name :"çorap", src:'images/socks.png'},    
    {id :"strawberry", name :"çilek", src:'images/strawberry.png'},    
    {id :"swim", name :"yüzmek", src:'images/swimming.png'},    
    {id :"thirsty", name :"susamak", src:'images/thirsty.png'},    
    {id :"tired", name :"yorgun", src:'images/tired.png'},    
    {id :"t shirt", name :"tişört", src:'images/tisort.png'},    
    {id :"tree", name :"ağaç", src:'images/tree.png'},    
    {id :"winter hat", name :"bere", src:'images/w_hat.png'},    
    {id :"walk", name :"yürümek", src:'images/walking.png'},    
    {id :"watermellon", name :"karpuz", src:'images/watermellon.png'},  
    {id :"yell", name :"bağırmak", src:'images/yell.png'},    
    {id :"yellow light", name :"sarı ışık", src:'images/yellow_light.png'},     
];

shuffle(dizi);

//arraydaki resimlerin karıştırılması
function shuffle(array){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    //remain elements to shuffle
    while( 0 !== currentIndex){
        //pik a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;//index i 1 tane küçültecek

        //and swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return ;
}

//arraydeki resimlerin ekrana dizilmesi
for( x of dizi){
    document.querySelector('.resimler').innerHTML += 
    `<img class="resim "id="${x["id"]}"
     src="${x["src"]}"
     name="${x["name"]}"
     />`;
    //console.log(x["id"], x["name"], x["src"]);
};

//modal ın hazırlanması



//MODAL FUNCTIONLARI
//function to open modal
function openModal(e){
    //console.log('clicked');
    modal.style.display = 'block';
    let x = textInput.textContent = e.target["id"];
    let y = textInput.textContent = e.target["src"];
    let tur = textInput.textContent = e.target["name"];
    let turbas = document.querySelector('.turBas');
    let engbas = document.querySelector('.engBas');
    //console.log(x);
    let resimX = document.querySelector('.resimX');
    resimX.innerHTML = `<img id="${x}"
    src="${y}"/>`;
    engbas.innerHTML = `<h3>${x}</h3>`;
    turbas.innerHTML = `<h3>${tur}</h3>`;
    //console.log(turbas)
    //console.log(e.target);


}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}


