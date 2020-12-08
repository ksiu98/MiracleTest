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
    q: '3. 다음중 [LIAR LIAR] 가사를 고르시오',
    a: [
      { answer: 'a. ㅎ ㅁㄹ ㄱㄹ ㄴ ㅍㅋ ㅂ ㅂㄷ ㅇㅇ', score: 5 },
      { answer: 'b. ㅁㄴㅅ ㄴ ㄷㅇ ㅂㄹㅇ ㅇㅇ ㅂㅇㅇ ㄴㄱ ㅎㄹ ㅎㄹ', score: 2 },
      { answer: 'c. ㄴㅇ ㄲㅃㅎㄴ ㅅㅇ ㅇㅃㄱ ㅁㄷㅇ', score: 2 },
      { answer: 'd. ㄷㄱㅇㄷ ㄱㄱ ㄱ ㅈㄹㅈㅇ ㅇ ㄷㅇㅇㄷ ㅃㅎ', score: 2 },
      { answer: 'e. ㅈㅂ ㅂㄴㄴ ㅎㅅ ㄴ ㅁㅅㅇ ㄴㅂㅅㄱ ㅂㅊ ㄱㅇ', score: 2 }
    ]
  },
  {
    q: '4. 다음중 뿌엥즈 케미 멤버로 적절한 것은? (나무위키 기준)',
    a: [
      { answer: 'a. 아린, 미미, 효정, 비니', score: 2 },
      { answer: 'b. 효정, 유아, 승희, 비니', score: 2 },
      { answer: 'c. 지호, 효정', score: 2 },
      { answer: 'd. 유아, 승희, 비니', score: 5 },
      { answer: 'e. 효정, 승희, 지호', score: 2 }

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
    q: '6. 아린 남동생이 참여한 도전골든벨. 당시 거기서 오마이걸이 낸 문제의 정답은?',
    a: [
      { answer: 'a. 아지트', score: 2 },
      { answer: 'b. 국제통화기금', score: 2 },
      { answer: 'c. 스포일러', score: 5 },
      { answer: 'd. 유비쿼터스', score: 2 }

    ]
  },
  {
    q: '7. 점수 랜덤박스 (이 문제에서 100점인지 아닌지 갈립니)',
    a: [
      { answer: 'a. 안냥?', score: 3 },
      { answer: 'b. 안냥?', score: 1 },
      { answer: 'c. 안냥?', score: 5 }
    ]
  },
  {
    q: '8. 겨울동화 콘서트 티저 사진 공개순서중 4번째는?',
    a: [
      { answer: 'a. 지호', score: 2 },
      { answer: 'b. 아린', score: 2 },
      { answer: 'c. 승희', score: 5 },
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
  },
  {
    q: '11. 불꽃놀이의 앨범 유형은?',
    a: [
      { answer: 'a. 정규 1집', score: 2 },
      { answer: 'b. 미니 5집', score: 2 },
      { answer: 'c. 리패키지', score: 2 },
      { answer: 'd. 미니 6집', score: 5 },
      { answer: 'e. 스페셜 싱글', score: 2 }  ]
  },
  {
    q: '12. 다음중 [I FOUND LOVE]의 가사를 고르시오?',
    a: [
      { answer: 'a. ㄴ ㅇㅅ ㅍㄹㅂㄹ ㅈ ㅅㅇ', score: 2 },
      { answer: 'b. ㄱㄴㅇ ㄱㄷㅇ ㅊㄱㄷ ㅈㅇ ㄱ ㅁㅇㄷ ㅇㅇ ㅅ ㅇㅇ', score: 2 },
      { answer: 'c. ㅎㄹㅇㄷ ㅇㄴㄱ ㅂㄹㄷㅇ ㄸㄴ ㄴㄷ ㅇㄴㄷ', score: 2 },
      { answer: 'd. ㄴ ㅇㄹㄱ ㅇㅇㅇ ㄷㄷㅁ ㅎㄱㅍ ㄱ ㅁㅇㄷ', score: 5 },
      { answer: 'e. ㅇㅇ ㅇ ㅇ ㅇ ㅇㅇ', score: 2 }  ]
  },
  {
    q: '13. 다음중 서지음 작사가가 작사한 노래가 아닌것은?',
    a: [
      { answer: 'a. 소나기', score: 2 },
      { answer: 'b. BUNGEE', score: 2 },
      { answer: 'c. 꽃차', score: 2 },
      { answer: 'd. Perfect day', score: 5 },
      { answer: 'e. End of Story', score: 2 }  ]
  },
  {
    q: '14. 오마이걸이 데뷔 후 첫 1위한 곡은 비밀정원입니다. 그러면 데뷔 후 몇일 만 일까요?',
    a: [
      { answer: 'a. 1004', score: 2 },
      { answer: 'b. 1131', score: 2 },
      { answer: 'c. 1032', score: 2 },
      { answer: 'd. 1009', score: 5 }]
  },
  {
    q: '15. 다음중 미미의 개인기로 적절한 것은 (나무위키 기준)?',
    a: [
      { answer: 'a. 성대모사', score: 2 },
      { answer: 'b. 병 뚜껑 따는 소리', score: 2 },
      { answer: 'c. 동물 울음소리 내기', score: 5 },
      { answer: 'd. 멤버들 행동 따라하기', score: 2 }]
  },
  {
    q: '16. 지호의 가장 좋아하는 색은 파스텔 계통의 [이 색]인데, ' +
        '그래서 연습생 시절 의상을 [이 색]으로 통일해서 입고다녀 생긴 별명은?',
    a: [
      { answer: 'a. 보라색, 고구마', score: 2 },
      { answer: 'b. 파란색, 스머프', score: 2 },
      { answer: 'c. 노란색, 죠랑이', score: 2 },
      { answer: 'd. 남색, 죠스바', score: 5 },
      { answer: 'e. 하늘색, 돌핀', score: 2 }  ]
  },
  {
    q: '17. 다음중 승희가 가장 좋아하는 과자는?',
    a: [
      { answer: 'a. 초코ㅇ이', score: 2 },
      { answer: 'b. 다ㅇ제', score: 2 },
      { answer: 'c. 홈ㄹ볼', score: 5 },
      { answer: 'd. 에ㅇ스', score: 2 }]
  },
  {
    q: '18. 다음중 시아가 [이 곡]을 추다가 무대장치를 파손시켰는데(뿌샤뿌샤...), [이 곡]은?',
    a: [
      { answer: 'a. 큐피드', score: 2 },
      { answer: 'b. 컬리링북', score: 2 },
      { answer: 'c. 내 얘길 들어봐', score: 2 },
      { answer: 'd. WINDY DAY', score: 5 },
      { answer: 'e. BUNGEE', score: 2 }  ]
  },
  {
    q: '19. 다음중 비니가 멤버들과 만나기 전인 연습생 시절, 비니의 친구가 비니에게 소개해준 오마이걸 멤버는?',
    a: [
      { answer: 'a. 효정', score: 2 },
      { answer: 'b. 미미', score: 2 },
      { answer: 'c. 지호', score: 5 },
      { answer: 'd. 유아', score: 2 },
      { answer: 'e. 아린', score: 2 }  ]
  },
  {
    q: '20. 보너스 점수는 얼만큼 받고 싶나요?',
    a: [
      { answer: 'a. 1', score: 5 },
      { answer: 'b. 5', score: 5 },
      { answer: 'c. 10', score: 2 },
      { answer: 'd. 100', score: 0 },
      { answer: 'e. 0', score: 5 }  ]
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
    mLeft: '57%',
    name: '병아린',
    desc: '조금만더!!'
  },
  {
    from: 61,
    to: 70,
    mLeft: '64%',
    name: '효토끼',
    desc: '더더더더더더더더'
  },
  {
    from: 71,
    to: 80,
    mLeft: '72%',
    name: '마늘공주',
    desc: '마늘만큼 오마이걸 지식이 들어잇군요!!'
  },
  {
    from: 81,
    to: 90,
    mLeft: '80%',
    name: '똑비니',
    desc: '조금만 더 맞추면 호랑이가 됩니다!'
  },
  {
    from: 91,
    to: 100,
    mLeft: '88%',
    name: '죠랑이',
    desc: '오마이걸에 관해서는 누구보다 잘 알고있는 미라클!!'
  }
]