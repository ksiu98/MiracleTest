const qnaList = [
  {
    q: '1. 오마이걸의 데뷔 날짜는?',
    a: [
      { answer: 'a. 2015.04.21', score: 5 },
      { answer: 'b. 2015.04.22', score: 3 },
      { answer: 'c. 2014.04.21', score: 2 },
      { answer: 'd. 2014.04.22', score: 2 }

    ]
  },
  {
    q: '2. 오마이걸의 공식 인사로 알맞은 것은?',
    a: [
      { answer: 'a. 찾았다~ 오매이걸!', score: 2 },
      { answer: 'b. 찾았나~ 오마이걸!', score: 3 },
      { answer: 'c. 찾았다~ 오맹걸!', score: 2 },
      { answer: 'd. 찾으려나~ 오마이걸!', score: 2 },
      { answer: 'e. 찾았다~ 오마이걸!', score: 5 }
    ]
  },
  {
    q: '3. 다음곡 가사초성을 보기중에서 찾으시오' +
        '\nㄴ ㅇㅇ ㅅㅈㅎ ㅎㅈㅁㅇ ㅈㅅㄱ ㅇㅇ',
    a: [
      { answer: 'a. 불꽃놀이', score: 2 },
      { answer: 'b. 숲의아이', score: 2 },
      { answer: 'c. 비밀정원', score: 5 },
      { answer: 'd. 살짝 설렜어', score: 2 },
      { answer: 'e. 바나나 알러지 원숭이', score: 2 }
    ]
  },
  {
    q: '4. 불꽃놀이의 앨범 유형은?',
    a: [
      { answer: 'a. 정규 1집', score: 2 },
      { answer: 'b. 미니 5집', score: 2 },
      { answer: 'c. 리패키지', score: 2 },
      { answer: 'd. 미니 6집', score: 5 },
      { answer: 'e. 스페셜 싱글', score: 2 }

    ]
  },
  {
    q: '5. 미라클의 탄생 년도는?',
    a: [
      { answer: 'a. 2016.04.21', score: 2 },
      { answer: 'b. 2016.03.28', score: 5 },
      { answer: 'c. 2017.03.28', score: 2 },
      { answer: 'd. 2016.09.10', score: 2 }
    ]
  },
  {
    q: '6. 데뷔 후 첫 1위곡은?',
    a: [
      { answer: 'a. 바나나 알러지 원숭이', score: 2 },
      { answer: 'b. 윈디데이', score: 2 },
      { answer: 'c. 비밀정원', score: 5 }
    ]
  },
  {
    q: '7. 점수 랜덤박스',
    a: [
      { answer: 'a. 안냥?', score: 5 },
      { answer: 'b. 안냥?', score: 5 },
      { answer: 'c. 안냥?', score: 5 }
    ]
  },
  {
    q: '8. 겨울동화 콘서트 티저 사진 공개순서중 5번째는?',
    a: [
      { answer: 'a. 지호', score: 5 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 효정', score: 2 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 2 }
    ]
  },
  {
    q: '9. 멤버 서열 최약체는 누구인지 고르시오 (2020년 기준)',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 효정', score: 5 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 2 }
    ]
  },
  {
    q: '10. 멤버를 나이순으로 정렬할때 4번째로 나이가 많은 멤버는?',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 5 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 효정', score: 2 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 2 }  ]
  }
]

const infoList = [
  {
    from: 0,
    to: 50,
    mLeft: '50%',
    name: '병아린',
    desc: '보아하니 오마이걸에 입덕한지 얼마 안되신 크리시군요!! 조금더 오마이걸에 대해 공부하시면 옴둥이 박사가 되실수 있어요.' +
        '옴이팅~'
  },
  {
    from: 51,
    to: 60,
    mLeft: '60%',
    name: '효토끼',
    desc: '조금만더!!'
  },
  {
    from: 61,
    to: 70,
    mLeft: '70%',
    name: '곰미미',
    desc: '더더더더더더더더'
  },
  {
    from: 71,
    to: 80,
    mLeft: '80%',
    name: '마늘공주',
    desc: '마늘만큼 오마이걸 지식이 들어잇군요!!'
  },
  {
    from: 81,
    to: 90,
    mLeft: '90%',
    name: '똑비니',
    desc: '조금만 더 맞추면 호랑이가 됩니다!'
  },
  {
    from: 91,
    to: 100,
    mLeft: '95%',
    name: '죠랑이',
    desc: '오마이걸에 관해서는 누구보다 잘 알고있는 미라클!!'
  }
]