function AppExample() {

    //  STEP 1. prompt 를 통해 사용자에게 이름을 입력받아준다.
    //          (이름을 작성해주세요.)
    let name = prompt("이름을 작성해 주세요.")
    console.log(name)

    // STEP 2. 현재 날짜를 가지고 올 것
    //          오늘 날짜 : new Date()
    //          toLocalDateString() => 날짜 정리
    let today = new Date()
    console.log('today', today)

    let date = today.toLocaleDateString()
    console.log('date', date)

    let month = today.getMonth() + 1
    console.log('month', month)

    //  STEP 3. 현재 월에 따른 계절을 대입
    //          조건 1) 3~5월 : 봄
    //          조건 2) 6~8월 : 여름
    //          조건 3) 9~11월 : 가을
    //          조건 4) 12,1,2월 : 겨울

    if (3 <= month && month <= 5) {
        month = "봄"
    } else if (6 <= month && month <= 8) {
        month = "여름"
    } else if (9 <= month && month <= 11) {
        month = "가을"
    } else {
        month = "겨울"
    }

    //  STEP 4. 결과창을 구성
    //  오늘 날짜
    //  000님 지금은 여름입니다. 좋은 하루 보내세요!

    return (
        <div>
            <h1>{date}</h1>
            <hr />
            <h4>{name}님 지금은 {month}입니다. 좋은 하루 보내세요!</h4>
        </div>
    )
}

export default AppExample