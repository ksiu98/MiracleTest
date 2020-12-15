const qnaList = [
  {
    q: '1. 다음중 [CHECKMATE] 가사를 고르시오',
    a: [
      { answer: 'a. ㅁㄹ ㅇㄹ ㅇㅈㅅ ㅋㅋㄴ ㅎ ㅁㄱ', score: 2 },
      { answer: 'b. ㅇㅁㅋ ㅅㅊㄱ ㅇㄱㄹ ㄴ ㅎㅅ ㅎㄴㅈㅇ ㄴㄹ ㅇ', score: 2 },
      { answer: 'c. ㄴ ㅇㅅ ㅍㄹ ㅂㄹ ㅈ ㅅㅇㅂ', score: 5 },
      { answer: 'd. ㅂㄹ ㅂㅂㄹ ㅂㅂㄹ ㅂㅂㄹ ㅂ', score: 2 }

    ]
  },
  {
    q: '2. 다음 가사를 포함하는 곡은? [ㅈㄱ ㄴㅇㄷ ㄱㅊㅇ ㅇㅇ ㅇ ㅂ ㅍㅇ]',
    a: [
      { answer: 'a. 너와 나의 시대', score: 2 },
      { answer: 'b. 기억해', score: 3 },
      { answer: 'c. I FOUND LOVE', score: 2 },
      { answer: 'd. Je T\'aime', score: 2 },
      { answer: 'e. I KNOW', score: 5 }
    ]
  },
  {
    q: '3. 다음 사진의 주인공은?',
    a: [
      { answer: 'a. 아린', score: 2 },
      { answer: 'b. 지호', score: 5 },
      { answer: 'c. 비니', score: 2 },
      { answer: 'd. 승희', score: 2 },
      { answer: 'e. 효정', score: 2 }
    ]
  },
  {
    q: '4. 살짝 설렜어(NONSTOP)에서 나[na]는 총 몇번 들리는가?',
    a: [
      { answer: 'a. 40', score: 2 },
      { answer: 'b. 41', score: 2 },
      { answer: 'c. 42', score: 2 },
      { answer: 'd. 43', score: 5 },
      { answer: 'e. 44', score: 2 }

    ]
  },
  {
    q: '5. 다음을 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. 다섯 번째 계절', score: 3 },
      { answer: 'b. 소나기', score: 2 },
      { answer: 'c. 비밀정원', score: 5 },
      { answer: 'd. B612', score: 2 }
    ]
  },
  {
    q: '6. 다음 사진은 넘어지면서 까지 웃는 효정의 사진이다. 이 날 넘어진 멤버가 한명 더 있는데, 누구인지 고르시오.',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 비니', score: 2 },
      { answer: 'c. 아린', score: 5 },
      { answer: 'd. 유아', score: 2 }

    ]
  },
  {
    q: '7. 점수 랜덤박스',
    a: [
      { answer: 'a. 안냥?', score: 1 },
      { answer: 'b. 안냥?', score: 2 },
      { answer: 'c. 안냥?', score: 4 },
      { answer: 'd. 안냥?', score: 5 },
      { answer: 'e. 안냥?', score: 3 }
    ]
  },
  {
    q: '8. 다음중 MBTI유형이 ESFJ인 멤버는?',
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
    q: '9. 다음 사진의 주인공은?',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 효정', score: 2 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 5 }
    ]
  },
  {
    q: '10. 다음 파트를 부르는 멤버는?',
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
    q: '11. 다음 사진의 주인공은?',
    a: [
        { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 효정', score: 5 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 2 }  ]
  },
  {
    q: '12. 다음중 [REMEMBER ME]의 가사를 고르시오',
    a: [
      { answer: 'a. ㄴㅇ ㅅㄱ ㄲ ㄱㅇㄷ ㄸㄷ ㄱㄱㅇ ㅇㄴ ㄱ ㅂㅁ', score: 2 },
      { answer: 'b. ㄱㅅ ㄷㅁㄱㅈ ㅁㄱ ㅇㅈ ㄴㅇ ㅅㄹ ㅇㄱ ㄷㅇㅈ', score: 2 },
      { answer: 'c. ㄱㄷㅎㄷ ㄷㅈ ㅅㅅㅇ ㄴ ㅁㅇ ㅂㄲㄹㅇ', score: 2 },
      { answer: 'd. ㄱㅅㄹ ㅇ ㅌㄹ ㅂㅂ ㄷㅇㄱㄷ ㄱㄱ ㄱ ㅈㄹㅈㅇ', score: 5 },
      { answer: 'e. ㄷ ㄷ ㄷ ㄷ ㄷ ㄷㄷ ㄷ ㄷ ㄷ ㄷ ㄷ ㄷ ㄷ', score: 2 }  ]
  },
  {
    q: '13. 앞에서 살짝설렜어에서 \'나\'가 몇 번 들리는지 풀었는데, 그러면 [바나나 알러지 원숭이]에서는?',
    a: [
      { answer: 'a. 68', score: 2 },
      { answer: 'b. 69', score: 2 },
      { answer: 'c. 70', score: 2 },
      { answer: 'd. 71', score: 5 },
      { answer: 'e. 80', score: 2 }  ]
  },
  {
    q: '14. 다음 사진의 주인공은?',
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
    q: '15. 다음은 [WINDY DAY]중 어느 한 소절이다. 원래는 진이 파트였지만 현재는 누구 파트로 바꼈는가?',
    a: [
      { answer: 'a. 아린', score: 2 },
      { answer: 'b. 비니', score: 5 },
      { answer: 'c. 미미', score: 2 },
      { answer: 'd. 승희', score: 2 }]
  },
  {
    q: '16. 다음 사진의 주인공은?',
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
    q: '17. 다음 가사를 포함하는 곡은? [ㅇㄴㅌㄱ ㅇㄹ ㅋㄴ ㅁㄴㄴ ㅇㅋㅎㅋㅋ]',
    a: [
      { answer: 'a. HANABI', score: 2 },
      { answer: 'b. SECRET GARDEN', score: 2 },
      { answer: 'c. NONSTOP', score: 2 },
      { answer: 'd. ETOILE', score: 5 },
      { answer: 'e. BUNGEE', score: 2 }
    ]
  },
  {
    q: '18. 다음을 듣고 알맞은 곡을 고르시오',
    a: [
      { answer: 'a. I FOUND LOVE', score: 2 },
      { answer: 'b. SIXTEEN', score: 2 },
      { answer: 'c. ILLUSION', score: 5 },
      { answer: 'd. TIC TOC', score: 2 }  ]
  },
  {
    q: '19. 다음 사진의 주인공은?',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 2 },
      { answer: 'd. 유아', score: 5 },
      { answer: 'e. 효정', score: 2 },
      { answer: 'f. 비니', score: 2 },
      { answer: 'g. 미미', score: 2 }
    ]
  },
  {
    q: '20. 보너스 점수는 얼만큼 받고 싶나요? 후하게 드립니다.',
    a: [
      { answer: 'a. 기본점수만 받겠습니다.', score: 5 },
      { answer: 'b. 쥬라쥬라쥬라쥬라~ 점수좀 쥬라~ 10', score: 0 },
      { answer: 'c. 이번엔 어려웠으니 20', score: 0 },
      { answer: 'd. 그냥 화끈하게 100', score: 0 },
      { answer: 'e. 개발자님 사랑해요~', score: 5 }  ]
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