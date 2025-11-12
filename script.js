// 取得按鈕元素
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 滾動事件監聽器：控制按鈕的顯示/隱藏
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // 當垂直滾動距離超過 20 像素時顯示按鈕
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// 點擊事件監聽器：實現平滑滾動到頂部
scrollToTopBtn.addEventListener("click", function() {
    // 實現平滑滾動效果
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 啟用平滑滾動
    });
});