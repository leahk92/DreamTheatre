let lists = document.querySelectorAll(".item");

document.getElementById("next").onclick = function(){
    document.getElementById("slide").appendChild(lists[0]);
}

document.getElementById("prev").onclick = function(){
  document.getElementById("slide").prepend(lists[lists.length - 1]);
}

// 지피티 보완
let lists = document.querySelectorAll(".item");

document.getElementById("next").onclick = function () {
    // 최신 슬라이드 리스트를 다시 불러옵니다.
    lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
    // 최신 슬라이드 리스트를 다시 불러옵니다.
    lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
};


let lists = document.querySelectorAll(".item");