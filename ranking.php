<?php
$conn = mysqli_connect(
    'localhost:3306',
    'root',
    'kim54951',
    'test',
        '3306');
# 사용자가 입력한 정보를 그대로 php에 입력하는 행위는 보안에 취약, 따라서 관리 필요
$filtered = array(
    'name' => mysqli_real_escape_string($conn, $_POST['name']),
    'score' => mysqli_real_escape_string($conn, $_POST['score'])
);
// sql연결할때 호스트네임을 로컬호스트:포트, 맨밑에 포트값을 입력해주니 제대로 연동이 되엇슴.
$sql = "
  INSERT INTO score
    (name, score)
    VALUES(
      '{$filtered['name']}',
      '{$filtered['score']}'
    )
"; // html에서 form의 메소드를 post로 해서 저렇게 나타냄
$result = mysqli_query($conn, $sql);
if ($result === false) {
    echo '점수부분은 오로지 숫자만 입력해주시기 바랍니다. 창을닫고 다시 시도해주세요!';
    error_log(mysqli_error($conn));
} else {
    echo '<h1>OMG TEST RANKING</h1>';

    $sql = "SELECT * FROM score order by 2 desc ";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result)) {
        echo $row['score'].'점'.' '.'|'.' '.$row['name'].'<br>'.'<br>';}
}
// 조건에 맞게 성공적으로 서버에 입력되면 랭킹을 바로 표시해줌.

// github에서 제공하는 웹호스팅은 php파일은 안된다고 한다.. 그래서 405 에러가 뜨는듯
// php, jsp와 같은 동적웹사이트는 깃허브에서는 웹호스팅 지원안함.
// html, css, js와 같은 정적 웹사이트만 지원
// php 문제를 해결하려면 별도의 유료 웹 호스팅을 지원하는 곳에서 해야...
