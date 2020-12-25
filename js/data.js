const qnaList = [
  {
    q: '1. 그룹명으로 [오마이걸]이라는 이름을 지은 이유는?',
    a: [
      { answer: 'a. 이원민 대표 및 회사 직원들의 추천', score: 2 },
      { answer: 'b. 미라클들의 마이걸이 되기 위해', score: 3 },
      { answer: 'c. 대중들의 마이걸이 되기 위해', score: 5 },
      { answer: 'd. 소속사의 공개 작명 이벤트 1등작품 선정', score: 2 }
    ]

  },
  {
    q: '2. 오마이걸 공식 응원봉의 정식 명칭은?',
    a: [
      { answer: 'a. 오 마이 봉', score: 2 },
      { answer: 'b. 디어 마이 봉', score: 5 },
      { answer: 'c. 디마봉', score: 2 }
    ]
  },
  {
    q: '3. 다음중 멤버생일 년도로 적절하지 않은것은?',
    a: [
      { answer: 'a. 1994년', score: 2 },
      { answer: 'b. 1995년', score: 2 },
      { answer: 'c. 1996년', score: 2 },
      { answer: 'd. 1997년', score: 2 },
      { answer: 'e. 1998년', score: 5 },
      { answer: 'f. 1999년', score: 2 }

    ]
  },
  {
    q: '4. 다음중 승희가 참여한 프로그램(수록곡 포함)으로 적절하지 않은것은?',
    a: [
      { answer: 'a. 복면가왕', score: 2 },
      { answer: 'b. 불후의 명곡', score: 2 },
      { answer: 'c. 스타트업', score: 2 },
      { answer: 'd. 비니와 오빠들', score: 5 },
      { answer: 'e. 투유 프로젝트', score: 2 }

    ]
  },
  {
    q: '5. 다음은 멤버들의 동물잠옷 의상이다. 이때 고양이를 입은 멤버는?',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 유아', score: 5 },
      { answer: 'e. 효정', score: 2 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 2 }  ]

  },
  {
    q: '6. 다음은 멤버들의 할로윈 의상이다. 이때 저승사자 멤버는?',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 5 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 효정', score: 2 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 2 }  ]
  },
  {
    q: '7. 본인의 최애 멤버를 고르시오',
    a: [
      { answer: 'a. 지호', score: 5 },
      { answer: 'b. 아린', score: 5 },
      { answer: 'c. 승희', score: 5 },
      { answer: 'd. 유아', score: 5 },
      { answer: 'e. 효정', score: 5 },
      { answer: 'f. 비니', score: 5 },
      { answer: 'g. 미미', score: 5 },
      { answer: 'h. 오마이걸 전원', score: 5 },
      { answer: 'i. 원민공듀', score: 1 }
    ]
  },
  {
    q: '8. 다음을 듣고 알맞은 곡 명을 고르시오',
    a: [
      { answer: 'a. Say No More', score: 2 },
      { answer: 'b. 한 발짝 두 발짝', score: 5 },
      { answer: 'c. I FOUND LOVE', score: 2 },
      { answer: 'd. 메아리', score: 2 },
      { answer: 'e. Illusion', score: 2 }
    ]
  },
  {
    q: '9. 다음 사진의 주인공은? (힌트 : 중화요리하면?)',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 효정', score: 2 },
      { answer: 'f. 비니', score: 5 },
      { answer: 'g. 미미', score: 2 }
    ]
  },
  {
    q: '10. 다음을 듣고 이 곡이 출시된 계절을 고르시오',
    a: [
      { answer: 'a. 봄', score: 2 },
      { answer: 'b. 여름', score: 2 },
      { answer: 'c. 가을', score: 2 },
      { answer: 'd. 겨울', score: 5 }
    ]
  },
  {
    q: '11. 다음 사진이 나온 뮤직비디오는?',
    a: [
        { answer: 'a. CUPID', score: 2 },
      { answer: 'b. LIAR LIAR', score: 2 },
      { answer: 'c. 비밀정원', score: 5 },
      { answer: 'd. COLORING BOOK', score: 2 },
      { answer: 'e. 다섯번째 계절', score: 2 },
  ]
  },
  {
    q: '12. 다음중 중국어로 발매된 곡은?',
    a: [
      { answer: 'a. 살짝 설렜어', score: 2 },
      { answer: 'b. LIAR LIAR', score: 5 },
      { answer: 'c. BUNGEE', score: 2 },
      { answer: 'd. 다섯번째 계절', score: 2 },
       ]
  },
  {
    q: '13. 다음중 성질이 다른 하나를 고르시오 (주제 : 크리스마스)',
    a: [
      { answer: 'a. BUNGEE', score: 2 },
      { answer: 'b. 화이트', score: 2 },
      { answer: 'c. SNOW BALL', score: 2 },
      { answer: 'd. TIMING', score: 5 },
      { answer: 'e. 내 얘길 들어봐', score: 2 }  ]
  },
  {
    q: '14. 다음 사진의 주인공의 멘트는?',
    a: [
      { answer: 'a. 미라클에게 이런말 하기 싫은데...생각하자!', score: 2 },
      { answer: 'b. 아아아아아악', score: 5 },
      { answer: 'c. 야 너 진짜 돌았냐?', score: 2 },
      { answer: 'd. 걱정쓰가 바닥에..', score: 2 },
      { answer: 'e. 뿌엥', score: 2 },
      { answer: 'f. 미미가 좋긔', score: 2 },
      { answer: 'g. 안댸걘네~', score: 2 }
    ]
  },
  {
    q: '15. 다음 곡을 듣고 이 곡을 부르지 않은 멤버의 대사를 고르시오',
    a: [
      { answer: 'a. 꾸래!!', score: 2 },
      { answer: 'b. 바보홍~', score: 2 },
      { answer: 'c. 니가 울어서 울잖아 ㅜㅜ', score: 2 },
      { answer: 'd. 나 등불이야 뭐야!', score: 5 }]
  },
  {
    q: '16. 다음 사진에서 효정은 왜 효무룩하였는가?',
    a: [
      { answer: 'a. 숫자 1을 몸으로 표현해야해서', score: 5 },
      { answer: 'b. 효또몰에 걸려서', score: 2 },
      { answer: 'c. 열심히 한 연기가 지호의 마음에 들지 못해서', score: 2 },
      { answer: 'd. 행인 역을 맏게 되어서', score: 2 }
    ]
  },
  {
    q: '17. 다음 사진은 아린이 수능도시락 편이다. 그러면 이 때의 효무룩의 이유는?',
    a: [
      { answer: 'a. 어묵 얇게 썰어서 뭐라했다가 역으로 당했다.', score: 5 },
      { answer: 'b. 재료 몰래 먹다가 들켰다.', score: 2 },
      { answer: 'c. 소리 크게 내서 혼났다.', score: 2 },
      { answer: 'd. 승희에게 맞았다', score: 2 }
    ]
  },
  {
    q: '18. 효정 : 멤버중에 나는 ㅇㅇ 만은 일등이다.' +
        ' (오마이걸 속마음 방석퀴즈中）',
    a: [
      { answer: 'a. 노래', score: 2 },
      { answer: 'b. 애교', score: 2 },
      { answer: 'c. 긍정', score: 2 },
      { answer: 'd. 웃음', score: 2 },
      { answer: 'e. 치아', score: 2 },
      { answer: 'f. 노잼', score: 5 },
      { answer: 'g. 나이', score: 2 }
    ]
  },
  {
    q: '19. 다음을 듣고 알맞은 곡 명을 고르시오',
    a: [
      { answer: 'a. TIC TOC', score: 2 },
      { answer: 'b. 미제', score: 5 },
      { answer: 'c. 소나기', score: 2 },
      { answer: 'd. NEON', score: 2 },
      { answer: 'e. Illusion', score: 2 }
    ]
  },
  {
    q: '20. 테스트 고생하셨습니다. 보너스 점수를 드릴게요! 12/25에는 뭐하는날?',
    a: [
      { answer: 'a. 메리 크리스마스!', score: 5 },
      { answer: 'b. 집에서 옴걸영상 보는 날~', score: 5 },
      { answer: 'c. 연인과 즐거운 시간 보내는 날~', score: 4 },
      { answer: 'd. 가요대전에서 옴걸 보는 날~', score: 5 },
      { answer: 'e. 일하는 날~', score: 5 }  ]
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