var slideImgInner = document.querySelector('.slideImgInner'),
    slideImg = document.querySelectorAll('.slideImg'),
    currentIdx = 0,
    slideCount = slideImg.length,
    leftBtn = document.querySelector('.leftBtn'),
    rightBtn = document.querySelector('.rightBtn'),
    autoSlideInterval = 3000, // 자동 슬라이드 간격 (3초)
    autoSlide;

function showSlide(index) {
    slideImg.forEach(function(slide, i) {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIdx = (currentIdx + 1) % slideCount;
    showSlide(currentIdx);
}

function prevSlide() {
    currentIdx = (currentIdx - 1 + slideCount) % slideCount;
    showSlide(currentIdx);
}

leftBtn.addEventListener('click', function() {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

rightBtn.addEventListener('click', function() {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, autoSlideInterval);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// 초기 슬라이드 설정
showSlide(currentIdx);

// 자동 슬라이드 시작
startAutoSlide();

// 슬라이드에 마우스를 올리면 자동 슬라이드 중지
slideImgInner.addEventListener('mouseover', stopAutoSlide);

// 슬라이드에서 마우스를 떼면 자동 슬라이드 재시작
slideImgInner.addEventListener('mouseout', startAutoSlide);
