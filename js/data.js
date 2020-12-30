const qnaList = [
  {
    q: '1. 이번 2021 시즌그리팅 특전을 받으셨나요?',
    a: [
      { answer: 'a. YES!!', score: 3 },
      { answer: 'b. NO...', score: 5 },
      { answer: 'c. 시즌 그리팅을 못샀어요...', score: 5 },
      { answer: 'd. 곧 살거에요!!', score: 5 }
    ]

  },
  {
    q: '2. 오마이걸 멤버중 섹시하지 않은 멤버는?',
    a: [
      { answer: 'a. 최효정', score: 5 },
      { answer: 'b. 최효정', score: 5 },
      { answer: 'c. 최효정', score: 5 },
      { answer: 'c. 최효정', score: 5 }

    ]
  },
  {
    q: '3. 다음 이미지를 보고 휴지로 코를 막았는가?',
    a: [
      { answer: 'a. YES', score: 5 },
      { answer: 'b. NO', score: 1 },
      { answer: 'c. DEAD', score: 5 }

    ]
  },
  {
    q: '4. 다음은 번지중 가사이다. [나는 이제 너 뿐야] 이 가사를 부르지 않는 멤버는?',
    a: [
      { answer: 'a. 유아', score: 2 },
      { answer: 'b. 효정', score: 5 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 지호', score: 2 }
    ]
  },
  {
    q: '5. 다음 이미지를 참고하여 효정이 한 말을 고르시오',
    a: [
      { answer: 'a. 어 어 어휴우', score: 2 },
      { answer: 'b. 어 어 아늬예요', score: 5 },
      { answer: 'c. 너 어 아우씨', score: 1 }]

  },
  {
    q: '6. 다음 이미지가 나오는 뮤직비디오는?',
    a: [
      { answer: 'a. 바나나 알러지 원숭이 JAPANESE', score: 5 },
      { answer: 'b. 바나나 알러지 원숭이', score: 2 },
      { answer: 'c. 하더라', score: 2 },
      { answer: 'd. 반한게 아냐', score: 2 }
      ]
  },
  {
    q: '7. 다음을 듣고 [수파두파] 부분을 부른 멤버를 고르시오',
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
    q: '8. 다음을 듣고 알맞은 가사를 고르시오',
    a: [
      { answer: 'a. 원민공듀', score: 2 },
      { answer: 'b. LET ME HOLD YOU', score: 5 }
    ]
  },
  {
    q: '9. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. ROCKET RIDE', score: 2 },
      { answer: 'b. PRECIOUS MOMENT', score: 2 },
      { answer: 'c. BUNGEE', score: 5 },
      { answer: 'd. LEMONADE', score: 2 }
    ]
  },
  {
    q: '10. 다음을 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. 유성', score: 2 },
      { answer: 'b. 심해', score: 2 },
      { answer: 'c. VOGUE', score: 2 },
      { answer: 'd. 꽃차', score: 5 }
    ]
  },
  {
    q: '11. 다음을 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. DOLPHIN', score: 2 },
      { answer: 'b. TWILIGHT', score: 2 },
      { answer: 'c. ETOILE', score: 5 },
      { answer: 'd. REAL WORLD', score: 2 }
    ]
  },
  {
    q: '12. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. PERFECT DAY', score: 2 },
      { answer: 'b. COLORING BOOK', score: 5 },
      { answer: 'c. LIAR LIAR', score: 2 },
      { answer: 'd. REAL WORLD', score: 2 }
       ]
  },
  {
    q: '13. 다음을 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. 사랑 속도', score: 5 },
      { answer: 'b. 꽃차', score: 2 },
      { answer: 'c. POLARIS', score: 2 },
      { answer: 'd. ETERNALLY', score: 2 }  ]
  },
  {
    q: '14. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. Je T\'aime', score: 2 },
      { answer: 'b. 반한게 아냐', score: 2 },
      { answer: 'c. 소나기', score: 2 },
      { answer: 'd. 미제', score: 5 }
    ]
  },
  {
    q: '15. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. B612', score: 2 },
      { answer: 'b. ETOILE', score: 5 },
      { answer: 'c. POLARIS', score: 2 },
      { answer: 'd. KRYSTAL', score: 2 }]
  },
  {
    q: '16. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. 다섯 번째 계절', score: 5 },
      { answer: 'b. I FOUND LOVE', score: 2 },
      { answer: 'c. 비밀정원', score: 2 },
      { answer: 'd. 우리 이야기', score: 2 }
    ]
  },
  {
    q: '17. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. 메아리', score: 5 },
      { answer: 'b. 한 여름의 크리스마스', score: 2 },
      { answer: 'c. Tropical Love', score: 2 },
      { answer: 'd. 내 얘길 들어봐', score: 2 }
    ]
  },
  {
    q: '18. 다음을 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. NEON', score: 2 },
      { answer: 'b. 불꽃놀이', score: 5 },
      { answer: 'c. TIC TOC', score: 2 },
      { answer: 'd. 바나나 알러지 원숭이', score: 2 }
    ]
  },
  {
    q: '19. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. 한 여름의 크리스마스', score: 2 },
      { answer: 'b. Timing', score: 2 },
      { answer: 'c. 숲의 아이', score: 5 },
      { answer: 'd. 스노우볼', score: 2 }
    ]
  },
  {
    q: '20. 다음 가사를 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. 살짝 설렜어', score: 2 },
      { answer: 'b. DESTINY', score: 2 },
      { answer: 'c. I FOUND LOVE', score: 2 },
      { answer: 'd. CHECKMATE', score: 5 } ]
  }
]

const infoList = [
  {
    from: 0,
    to: 50,
    mLeft: '50%',
    name: '생각하는 크리',
    desc: '보아하니 오마이걸에 입덕한지 얼마 안되신 크리시군요!! 조금더 오마이걸에 대해 공부하시면 옴둥이 박사가 되실수 있어요.' +
        '옴이팅~'
  },
  {
    from: 51,
    to: 60,
    mLeft: '58%',
    name: '병아린',
    desc: '어제 들어온 신입 크리 이신가요?? 우리 병아린을 보면서 옴걸에 대해 열심히 공부해서 누구보다 잘 아는 크리가 되자구요!!'
  },
  {
    from: 61,
    to: 70,
    mLeft: '66%',
    name: '효토끼',
    desc: '안냥? 미라클이 된지 얼마 안된 크리군요? 환영합니다!!'
  },
  {
    from: 71,
    to: 80,
    mLeft: '74%',
    name: '마늘공주',
    desc: '마늘만큼 오마이걸 지식이 들어잇군요! 아, 여기서 마늘은 샤샤가 요리할때 넣는 마늘만큼이에요 ㅎ!'
  },
  {
    from: 81,
    to: 90,
    mLeft: '82%',
    name: '똑비니',
    desc: '미라클에 대해 아주 많이 알고 계신 당신은 똑비니! 조금만 더 맞추면 호랑이가 됩니다! 어흥~'
  },
  {
    from: 91,
    to: 100,
    mLeft: '90%',
    name: '죠랑이',
    desc: '오마이걸에 관해서는 누구보다 잘 알고있는 미라클!! 개발자도 이런 점수는 안나와요...'
  }
]