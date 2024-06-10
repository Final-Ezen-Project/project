//장바구니
//장바쿠니 버튼을 클릭했을 경우

const basketButtons = document.querySelectorAll('.basket-button');

basketButtons.forEach(button=>{
    button.addEventListener('click',(e)=>{

        //이벤트 취소
        e.preventDefault();

        if(customerId == null){
            alert('로그인 후 진행해주삼');
            return;
        }

        const productId = e.target.dataset.productid;
        const productData = {
            customerId: customerId,
            productId: productId,
            qty: 1, //주문할 수량
        };

        $.ajax({
            type: 'POST',
            url: '/basket/register',
            contentType: 'application/json',
            data: JSON.stringify(productData),
            success: function (rsp) {
                console.log("응답 오느지 확인" + rsp);


                const message = rsp.replace(/\d+$/, '');
                const number = rsp.replace(/\D/g, '');

                //재고가 없을 경우
                if(number === '0'){
                    alert('현재 상품은 품절되었습니다.');
                    return;
                }

                //장바구니에 넣을 때 수량이 초과일 경우
                if (message === 'excess_quantity') {
                    if (confirm(`현재 상품은 최대 주문 수량이 ${number} 개 입니다. \n장바구니 페이지로 이동하시겠습니까?`)) {
                        location.href = '/basket/myBasket';
                    }
                    return;
                }

                //장바구니를 추가했을경우
                if (rsp === 'register_success') {
                    if (confirm(`장바구니에 저장했습니다. \n 장바구니 페이지로 이동하시겠습니까?`)) {
                        location.href = '/basket/myBasket';
                    }
                    return;
                }

                //더 담아넣을 경우
                if (message === 'update_success') {
                    if (confirm(`한번더 담으셨네요! \n수량이 ${number} 개가 추가되었습니다. \n장바구니 페이지로 이동하시겠습니까?`)) {
                        location.href = '/basket/myBasket';
                    }
                }


            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("에러: " + textStatus + ", " + errorThrown);
            }
        });
    });
});