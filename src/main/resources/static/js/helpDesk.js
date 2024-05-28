
const  qnaTopData = [
    "반품/교환 신청 시 <br> 주의사항이 있나요?",
    "배송 받은 상품에 <br> 문제가 있어요. <br><br> 교환/반품신청이 가능한가요?",
    "회원가입은 어떻게 하나요?",
    "매장으로 방문하여 <br> A/S 접수가 가능한가요?",
    "[국내]외국인은 탑승시 <br> 어떤 신분증이 필요한가요?",
    "A/S 절차는 어떻게 되며, <br> 시간은 얼마나 소요되나요?",
    "개명을 하였는데 <br> 이름 변경은 어떻게 하나요?",
    "만 14세 미만도 <br> 가입 가능한가요?",
    "상품은 어떻게 포장되나요?",
    "친환경 인증이란 무엇인가요?"
];

for(let i=0; i<qnaTopData.length; i++){

    let str = `<button type="button" class="topBox" data-bs-toggle="modal" data-bs-target="#myModal" id="topBox${i}">`;
    str += `<span>${qnaTopData[i]}</span>`;
    str += `</button>`;
    document.querySelector('.qnaTop').innerHTML += str;
}




const topBoxData = [
    "단순변심 및 사이즈/색상 불만에 관련된 교환/반품 신청은 배송완료 후 7일 이내(주말/공휴일 포함)에 가능합니다.<br>" +
    "단, 상품이 표기/광고내용과 다르거나 계약내용과 다른 경우 상품을 받으신 날부터 3개월 이내,<br>" +
    "또는 사실을 알게된 날(알 수 있었던 날)부터 30일 이내에 신청 가능합니다.<br><br>" +
    " \n" +
    "■ 교환/반품 시 유의사항<br>" +
    "  - 실제 상품, 용역 등을 제공받은 날로부터  7일 이내(주말/공휴일 포함) 교환/반품 가능<br>" +
    "  - 상품에 따라 TAG, 라벨 등의 훼손이나 구성품, 사은품 누락, 수선, 세탁, 폐기 후에는 반품 불가<br>" +
    "  - 설치상품(설치 이후) / 신선식품 / 특수 주문제작상품 / 순금은 단순 변심 사유로 교환/반품 불가 <br><br>" +
    "\n" +
    " ※ 상품에 따라 취소/교환/반품의 기준이 다를 수 있으며, <br>" +
    "    자세한 사항은 상품 상세설명 및 페이지 하단 [교환 및 반품 안내] 참고 부탁드립니다.",


    "상품의 파손, 불량, 오배송 등 상품이 표기/광고내용과 다르거나 계약내용과 다른 경우,<br>\n" +
    "상품을 받으신 날부터 3개월 이내, 또는 사실을 알게된 날(알 수 있었던 날)부터 30일 이내에 교환 및 반품 신청이 가능합니다. <br><br>\n" +
    "\n" +
    "주문/배송 조회 통해 직접 접수해주시거나,<br> \n" +
    "접수가 불가한 경우 고객센터로 문의주시면 빠르게 도움드리겠습니다. ",

    "회원유형은 일반회원, 사업자회원 2가지가 있습니다. <br><br><br>\n" +
    "회원가입 유형을 선택 후 아래 방법을 통해 회원가입을 할 수 있습니다. <br><br>\n" +
    "\n" +
    "○ 일반회원: 본인인증 → 약관동의 → 가입정보 입력 → 가입 완료\n  <br>" +
    "○ 사업자회원: 사업자정보확인 및 휴대폰번호인증 → 약관동의 → 가입정보 입력 → 가입 완료",

    " 오프라인 매장을 운영하는 브랜드 상품의 경우 방문하시어 A/S 접수가 가능합니다.<br>\n" +
    "다만 상품마다 관련 규정이 상이하여 방문 A/S가 불가할 수 있어 방문 전 매장측으로 가능 여부 확인 후 방문을 부탁드립니다.",


    "외국인인 경우 유효한 신분증 다음과 같습니다. <br><br>\n" +
    "\n" +
    "- 외국인등록증, 재외동포 국내 거소증, 유효기간내 여권<br>\n" +
    "- 국제운전면허증<br>\n" +
    "- 국내에서 발행한 장애인(통합)복지카드, 해외(국제)학생증, 영주권카드(그린카드)<br>\n" +
    "- 주한미군 군인신분증 해외발행 운전면허증",

    "일반적으로 판매처에서 상품을 회수 후 <br>\n" +
    "실 상품의 상태를 확인하여 A/S 가능 여부 및 발생 비용을 확인 합니다. <br> <br>\n" +
    "\n" +
    "A/S 가능한 경우, 순차적으로 A/S가 진행되며 기간은 약 2주~3주 소요될 수 있습니다 (브랜드에 따라 기간 상이) <br> <br>\n" +
    "\n" +
    "※ A/S는 상품마다 관련 규정이 상이하여, 자세한 내용은 판매처 통해 확인 부탁 드립니다.",


    "회원정보변경 메뉴에서 이름을 변경할 수 있습니다.",

    "만 14세 미만은 회원 가입이 불가능합니다.",

    "상품 보관방법별로 구분하여 포장 됩니다. (상온 / 냉장 / 냉동) <br><br>" +
    "- 상온 : 보냉제 X <br><br>" +
    "- 냉장 : 보냉제 O 아이스팩(only 물)<br><br>" +
    "- 냉동 : 보냉제 O 드라이아이스(or PCM 사용)<br><br>" +
    "* 깨지기 쉬운 상품인 경우 종이 또는 비닐 완충제를 사용합니다.",

    "■ 친환경 인증이란? <br> <br>" +
    "친환경 농산물은 인체와 생태환경에 해로운 화학비료, 농약, 제초제등을 " +
    "최대한 사용하지 않고 재배한 농작물을 일컬으며 <br>이중, 화학비료와 농약 사용량에 따라 저농약, 무농약, 유기농으로 구분됩니다.<br><br><br>" +
    " - 저농약 : 일반 농산물 대비 적은 양의 농약을 사용한 농산물<br><br>" +
    " - 무농약 : 농약은 사용하지 않되, 화학비료를 사용한 농산물<br><br>" +
    " - 유기능 : 화학비료와 농산을 일체 사용하지 않고 재배한 농산물"
];



//TOP10
document.addEventListener('DOMContentLoaded', () => {
    const topBoxButtons = document.querySelectorAll(".topBox");

    topBoxButtons.forEach(button => {
        // 버튼에 대한 이벤트 리스너 등록
        button.addEventListener('click', (e) => {
            // 클릭된 요소가 버튼이 아니라면 부모 요소로부터 버튼을 찾음
            const targetButton = e.target.closest('.topBox');
            // 버튼 안에 있는 텍스트 요소를 찾음
            const spanText = targetButton.querySelector('span').innerText;
            const boxId = targetButton.id;
            const boxIndex = parseInt(boxId.charAt(boxId.length - 1));

            document.querySelector('.modal-title').innerHTML = spanText;

            document.querySelector('.modal-body').innerHTML = topBoxData[boxIndex];
        });
    });
});





const descData = [

    {"customer" : [
            {"만 14세 미만도 가입 가능한가요?" : "만 14세 미만은 회원 가입이 불가능합니다."},


            {"회원가입은 어떻게 하나요?" :     "회원유형은 일반회원, 사업자회원 2가지가 있습니다. <br><br><br>\n" +
                    "회원가입 유형을 선택 후 아래 방법을 통해 회원가입을 할 수 있습니다. <br><br>\n" +
                    "\n" +
                    "○ 일반회원: 본인인증 → 약관동의 → 가입정보 입력 → 가입 완료\n  <br>" +
                    "○ 사업자회원: 사업자정보확인 및 휴대폰번호인증 → 약관동의 → 가입정보 입력 → 가입 완료"},


            {"개명을 하였는데 이름 변경은 어떻게 하나요?" : "회원정보변경 메뉴에서 이름을 변경할 수 있습니다."},

            {"로그인할 때 비밀번호를 변경 안내는 어떤 경우에 나오나요?" : "소중한 개인정보 보호를 위해 부정 로그인 감지 시스템을 운영하고 있습니다.<br><br>\n" +
                    "부정 로그인 의심으로 감지될 경우 안전하게 아이디를 보호하고 있으며, 비밀번호 재 설정 후 서비스를 이용할 수 있습니다."},

            {"회원탈퇴 후 언제 재가입이 가능한가요?" : "사이트 정책에 따라 회원 탈퇴 후 최대 30일 동안 다시 가입하실 수 없습니다. "}
        ]},

    {"pay" : [
            {"어떻게 주문하나요?" : "■ 회원 주문 방법 <br><br>\n" +
                    "\n" +
                    "1) 원하시는 상품을 [바로 구매] 혹은 [장바구니]를 선택합니다.<br>\n" +
                    "  - 바로 구매: 바로 [결제하기] 화면으로 이동<br>\n" +
                    "  - 장바구니: 장바구니에 여러 상품을 담아 한번에 주문 결제 가능<br>\n" +
                    "2) 이동한  [결제하기] 화면에서 배송지 정보, 할인 혜택 (쿠폰), 결제방법을 선택합니다. <br>\n" +
                    "3) 최종 하단 빨간 박스에 노출되는 결제금액 확인 후 결제를 진행합니다. "},

            {"삼성카드 간편결제 시 휴대폰 혹은 카드가 본인 명의가 아닐 경우 결제가 가능한가요?" : "고객님의 안전한 결제를 위해,<br> \n" +
                    "'회원 명의' <br>\n" +
                    "'삼성카드 회원 명의' <br>\n" +
                    "'휴대폰 명의' <br>\n" +
                    "세 가지 항목이 모두 동일해야 결제가 가능합니다. <br><br>\n" +
                    "\n" +
                    "삼성카드 간편결제는 본인 인증을 통하여 결제가 이루어지기 때문에, 인증에 사용되는 휴대폰 명의는 신용카드 명의자와 동일하여야 결제가 가능합니다.<br>\n" +
                    "(본인 카드만 결제 가능)"},

            {"증빙서 발급 안내" : "당사는 2007.7.1 부터 시행되는 '현금영수증 의무발행제도' 시행에 발맞추어 구매대금의 결제증빙으로<br>\n" +
                    "[신용카드매출전표] 또는 [현금영수증]을 교부하여 드립니다.<br>\n" +
                    "(법인세법 제117조, 제117조의 2 및 소득세법 제162조의 2, 제162조의 3)<br><br>\n" +
                    "\n" +
                    "또한 [신용카드매출전표] 또는 [현금영수증]을 교부한 경우, 별도의 세금계산서가 교부 되지 않음을 알려드립니다.<br>\n" +
                    "(부가가치세법 시행령 제57조 2항)\n<br><br>" +
                    "\n" +
                    "[신용카드매출전표] 또는 [현금영수증(지출증빙용)]을 발급받으신 사업자는<br>\n" +
                    "부가가치세법 시행령 제60조 1항에 의거 매입세액을 공제받으실 수 있습니다.<br><br>\n" +
                    " \n" +
                    "\n" +
                    "※ 현금영수증은 결제하기 단계에서 신청가능합니다.<br>\n" +
                    "※ 현금영수증 신청시, 주민등록번호 미수집으로 인하여 휴대폰번호와 사업자등록번호로 신청 가능합니다.<br>\n" +
                    "※ 현금영수증 미신청시에도 국세청 지정코드(010-000-1234)로 자동발행됩니다."},

            {"현금영수증 발급을 다른 사람으로 받을 수 있나요?" : "타인 명의로 현금영수증 발급신청 가능합니다.<br><br>\n" +
                    "\n" +
                    "타인 명의로 현금영수증을 발급받으시려면<br>\n" +
                    "결제화면의 [현금영수증 신청]에서 소득공제 받고자 하는 분의 휴대폰번호 또는 사업자 번호를 입력하시면 됩니다.<br><br>\n" +
                    "\n" +
                    "기본적으로는 주문자의 '휴대전화번호'를 기준으로 현금영수증을 발급해 드리고 있습니다.<br>\n" +
                    "(사업자 지출 증빙용은 \"사업자등록번호\"로 발급)"},

            {"현금영수증 자진발급제도란 무엇인가요?" : "현금영수증 자진발급제도란<br>\n" +
                    "소비자가 영수증을 직접 받아와서 직접 소득공제를 신청할 수 있는 방법 입니다.<br><br>\n" +
                    "\n" +
                    "2008년 7월 1일 부터 고객이 현금영수증 발급을 신청하지 않아도 <br> 가맹점에서 국세청이 지정한 코드(010-0000-1234)로 현금영수증을 발급하는 제도입니다.<br><br>\n" +
                    "\n" +
                    "자진 발급분 사용자 등록 방법은 아래와 같습니다.<br>\n" +
                    "- 국세청 홈택스 (https://www.hometax.go.kr/)<br>\n" +
                    "- 사이트 접속 → 조회/발급 → 현금 영수증 수정 → 자진발급분 소비자 등록/ 사업자 등록 선택 "}
        ]},

    {"delivery" : [

        {"상품은 어떻게 포장되나요?" : "상품 보관방법별로 구분하여 포장 됩니다. (상온 / 냉장 / 냉동)<br><br>\n" +
                "- 상온 : 보냉제 X<br>\n" +
                "- 냉장 : 보냉제 O 아이스팩(only 물)<br>\n" +
                "- 냉동 : 보냉제 O 드라이아이스(or PCM 사용)<br><br>\n" +
                "* 깨지기 쉬운 상품인 경우 종이 또는 비닐 완충제를 사용합니다."},

            {" 밤 사이 신선식품이나 냉장/냉동식품의 신선도는 어떻게 유지되나요?" : "최대 9시간 보냉력을 인증받은 보냉가방 '알비백'을 자체 제작하여 배송에 사용하고 있습니다.<br><br>\n" +
                    "\n" +
                    "40리터 용량의 알비백 안에 칸막이로 구획을 나눈 후 각각 냉장/냉동 식품을 담고 충분한 보냉제를 넣어 아침까지 신선도가 유지되도록 하고 있습니다.<br><br>\n" +
                    "\n" +
                    "알비백은 첫 주문 시 무상제공 해드리며, 고객님들이 보관하고 계시다가 재주문 시에 문 앞에 놓아주시면 다시 담아 드리는 방식으로 운영하고 있습니다."},

            {"주류는 판매하지 않나요?" : "주세법등 관련 법률에 의하여 유해상품(주류 및 폭발물)의 인터넷 거래가 제한되어 판매하지 않습니다. (전통주, 와인 제외)"},


            {"배송완료라고 되어있는데 상품이 도착하지 않았어요." : "주문/배송 내역에서 [운송장 조회]를 통해 실제 배송 과정 확인이 가능합니다.<br><br>\n" +
                    "\n" +
                    "■ 배송완료이나, 운송장 조회시 배송 중인 경우 <br>\n" +
                    " - 해당 경우에는 실제 배송이 완료되지 않은 부분으로, 배송 완료까지 기다리시면 됩니다. <br><br>\n" +
                    "\n" +
                    "■ 운송장 조회시에도 배송이 완료된 경우 <br>\n" +
                    " - 해당 경우에는 상품의 오배송 및 분실이 발생될 가능성이 있어, 확인한 즉시 배송한 택배기사 혹은 택배사를 통해 상품의 위치 확인 부탁드립니다. <br><br>\n" +
                    "\n" +
                    "※ 고객의 요청에 따라 지정된 장소에 배송 후 발생된 분실에 대해서는 책임지지 않습니다. <br>\n" +
                    "※ 송장 확인은 되나, 배송 흐름이 조회되지 않은 경우에는 고객센터로 연락 부탁드립니다."}
        ]},

    {"payback" : [

        {"주문 취소 신청을 하였으나 상품이 배송되었어요. 왜 그런가요?" : "결제완료 단계가 아닌 상품 준비중 단계에서 주문 취소 요청을 하실 경우에는 즉시 취소가 어려우며,<br>\n" +
                "업체에서 상품 출고 여부 확인 후 [취소 승인] 혹은 [취소 거절] 로 진행됩니다.<br>\n" +
                "상품의 출고 작업이 완료되어 [취소 거절]이 된 경우에는 배송으로 진행되며 반품 시 반품 배송비가 발생될 수 있습니다.<br><br>\n" +
                "\n" +
                "※상품의 취소가 급하신 경우에는 고객센터로 빠른 연락 부탁드립니다. "},

            {"환불 완료로 확인되는데, 카드 취소가 되지 않았어요. 왜 그런가요?" : "주문내역에서 환불이 되었더라도, 카드사 별 반영기간이 상이하여 카드 취소까지 시간이 소요될 수 있습니다.  <br><br>\n" +
                    "\n" +
                    "■ 카드 환불 소요 기간 <br>\n" +
                    " 1) 당일 취소 <br>\n" +
                    " 전체 취소: 당일 승인 취소  <br>\n" +
                    " 부분 취소: 영업일 기준 3~5일 소요 <br> <br>\n" +
                    " \n" +
                    "2) 당일 이후 취소 <br>\n" +
                    " 영업일 기준 3~7일 소요   <br> <br> \n" +
                    "\n" +
                    "해당 기간 내에 카드 취소가 진행될 예정으로, 자세한 문의사항은 카드사로 진행 부탁드립니다. "},

            {"다른 사람 명의의 계좌로 환불이 가능한가요?" : "기본적으로 원 결제 수단 환불을 원칙으로 하고 있어, 결제하신 수단 그대로 환불이 진행됩니다.<br><br>\n" +
                    "\n" +
                    "무통장 입금으로 구매하신 경우에는 고객님 명의의 계좌로만 환불이 가능하며,<br>\n" +
                    " 고객님 명의의 계좌로 환불이 가능합니다. <br><br>\n" +
                    "\n" +
                    "※ 불가피한 사정으로 본인 명의의 계좌 환불이 어려우신 경우, 고객센터로 연락 부탁드립니다. "},

            {"주문한 상품을 취소하고 싶은데 취소가 안돼요. 어떻게 하나요?" : "상품 결제 후 주문 취소는 [주문/배송 조회]를 통해 진행 가능합니다."},

            {"휴대폰 소액결제는 어떻게 환불되나요?" : "■ 휴대폰 소액결제 환불 정책 <br><br>\n" +
                    " \n" +
                    "1) 당월 취소  <br>\n" +
                    " -전체 취소: 휴대폰 결제 취소 (청구서 미 반영)  <br>\n" +
                    " -부분 취소: 휴대폰 결제 취소 (재승인 후 전체 취소/ 청구서 미 반영)<br> \n" +
                    "* 재승인 후 전체 취소로 진행되기 때문에 한도 초과시 재 결제 불가 "}
        ]},

    {"returnExchange" : [

        {"교환/반품신청은 어떻게 하나요?" : "교환/반품은 상품 수령 후 7일 이내(주말/공휴일 포함)에 가능하며, [ 주문/배송 조회 ] 에서 직접 접수가 가능합니다. "},

            {"반품 / 교환 신청 시 주의사항이 있나요?" : "단순변심 및 사이즈/색상 불만에 관련된 교환/반품 신청은 배송완료 후 7일 이내(주말/공휴일 포함)에 가능합니다. <br>\n" +
                    "단, 상품이 표기/광고내용과 다르거나 계약내용과 다른 경우 상품을 받으신 날부터 3개월 이내, <br>\n" +
                    "또는 사실을 알게된 날(알 수 있었던 날)부터 30일 이내에 신청 가능합니다. <br> <br>\n" +
                    " \n" +
                    "■ 교환/반품 시 유의사항 <br>\n" +
                    "  - 실제 상품, 용역 등을 제공받은 날로부터  7일 이내(주말/공휴일 포함) 교환/반품 가능 <br>\n" +
                    "  - 상품에 따라 TAG, 라벨 등의 훼손이나 구성품, 사은품 누락, 수선, 세탁, 폐기 후에는 반품 불가 <br>\n" +
                    "  - 설치상품(설치 이후) / 신선식품 / 특수 주문제작상품 / 순금은 단순 변심 사유로 교환/반품 불가  <br> <br>\n" +
                    "\n" +
                    " ※ 상품에 따라 취소/교환/반품의 기준이 다를 수 있으며,  <br>\n" +
                    "    자세한 사항은 상품 상세설명 및 페이지 하단 [교환 및 반품 안내] 참고 부탁드립니다."},

            {"불량 상품을 배송 받았는데 다른 상품으로도 교환이 가능한가요?" : "귀책과 관계 없이 교환은 동일 상품의 옵션 내에서만 가능합니다.<br>\n" +
                    "따라서, 옵션 내 상품이 아니라 다른 상품 번호로 판매되고 있는 타상품으로 교환을 원하시는 경우에는 반품 후 새로 주문해 주시기 바랍니다. <br><br>\n" +
                    "\n" +
                    "※ 불량 상품 반품/교환 시 배송비는 발생 하지 않으며, 새로 주문하신 상품에 대한 배송비는 고객님 부담입니다."},

            {"A/S 절차는 어떻게 되며, 시간은 얼마나 소요되나요?" : "일반적으로 판매처에서 상품을 회수 후 <br>\n" +
                    "실 상품의 상태를 확인하여 A/S 가능 여부 및 발생 비용을 확인 합니다. <br> <br>\n" +
                    "\n" +
                    "A/S 가능한 경우, 순차적으로 A/S가 진행되며 기간은 약 2주~3주 소요될 수 있습니다 (브랜드에 따라 기간 상이) <br> <br>\n" +
                    "\n" +
                    "※ A/S는 상품마다 관련 규정이 상이하여, 자세한 내용은 판매처 통해 확인 부탁 드립니다."},

            {"매장으로 방문하여 A/S접수가 가능한가요?" : " 오프라인 매장을 운영하는 브랜드 상품의 경우 방문하시어 A/S 접수가 가능합니다.<br>\n" +
                    "다만 상품마다 관련 규정이 상이하여 방문 A/S가 불가할 수 있어 방문 전 매장측으로 가능 여부 확인 후 방문을 부탁드립니다.",},

            {"배송 받은 상품에 문제가 있어요. 교환/반품신청이 가능한가요?" : "상품의 파손, 불량, 오배송 등 상품이 표기/광고내용과 다르거나 계약내용과 다른 경우,<br>\n" +
                    "상품을 받으신 날부터 3개월 이내, 또는 사실을 알게된 날(알 수 있었던 날)부터 30일 이내에  교환 및 반품 신청이 가능합니다. <br><br>\n" +
                    "\n" +
                    "주문/배송 조회 통해 직접 접수해주시거나, <br>\n" +
                    "접수가 불가한 경우 고객센터로 문의주시면 빠르게 도움드리겠습니다. \n"}
        ]}
];





//HelpDescription
const tap_btn = document.querySelectorAll('.tap_btn');

tap_btn.forEach(div => {
    div.addEventListener('click', (e)=>{

        tap_btn.forEach(btn =>{
            if(btn !== div){
                btn.style.backgroundColor = 'white';
                btn.style.color = 'black';
            }
        })

        const targetDiv = e.target.closest('.tap_btn');

        targetDiv.style.backgroundColor = 'black';
        targetDiv.style.color = 'white';

        let accArea = document.getElementById('accordion-list');
        const type = e.target.id;
        let output = `<div class="accordion accordion-flush" id="accordionFlushExample">`;

        // descData 배열을 반복하여 type에 해당하는 데이터를 찾음
        descData.forEach(data => {
            if (data[type]) {
                data[type].forEach((obj, index) => {
                    const key = Object.keys(obj)[0];
                    const value = obj[key];

                    output += `<div class="accordion-item">`;
                    output += `<h2 class="accordion-header" id="flush-heading${index}">`;
                    output += `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">`;
                    output += `<span style="font-size: 20px; font-weight: 700">&nbsp;Q .&nbsp;</span><span style="font-weight: 600">&nbsp;${key}<span>`;
                    output += `</button>`;
                    output += `</h2>`;
                    output += `<div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">`;
                    output += `<div class="accordion-body">${value}</div>`;
                    output += `</div></div>`;
                });
            }
        });

        output += `</div>`;
        accArea.innerHTML = output;
    });
});