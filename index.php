<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>taorea</title>
</head>
<body>
  
<div class="container">
        <div class="header">
          <h1>لعبة تعلم اللغة الإنجليزية</h1>
          <div class="scoreboard">
            <h2>النقاط: <span id="score">0</span></h2>
          </div>
        </div>
        <link rel="stylesheet" href="style.css">
        
        
        <div class="game">
          <div class="question" id="question">
            <h3 id="question">ما هو الترجمة الإنجليزية لكلمة "مرحباً"؟</h3>
          </div>
          <div class="answers" id="answers">
            <button id="answer1">1969</button>
            <button id="answer2">1915</button>
            <button id="answer3">13.8 b , y</button>
            <button id="answer4">1945</button>
          </div>
          <div class="feedback">
            <h4 id="feedback"></h4>
          </div>
          <div class="controls">
            <button id="next-question" onclick="gamewolf()">السؤال التالي</button>
          </div>
        </div>
      </div>
      <script src="script.js"></script>
      <span id="The_voise1"></span>
      <span id="The_voise2"></span>
      <span id="The_voise3"></span>
</div>


<div id="mhmodmaamrishow1">
    <div class="color_back">
    <h2 class="h2wolf">عدد نقاط الاعبين</h2>
    </div>
        <div class="textarea_1" id="textarea_1" dir="rtl">
          <div class="coomment_div">
            <!-- here is comment div -->
            <?php
              if($_POST['Submit']){
                print "<h1>Saved !</h1>";

                $Name = $_POST['Name'];
                $Comment = $_POST['Comment'];

                #Get old comments
                $old = fopen("comments.txt", "r+t");
                $old_comments = fread($old, 20000);

                #Delete everything, write down new and old comments
                $write = fopen("comments.txt", "w+");
                $string = " <h5> ".$Name."</h5> "."<p>".$Comment."</p> <hr>"."\n".$old_comments;
                fwrite($write, $string);
                fclose($write);
                fclose($old);
              }

              #Read comments
              $read = fopen("comments.txt", "r+t");
              echo "<br><br> <span>Points :</span>".fread($read, 20000);
              fclose($read);
              ?>
          </div>
        </div>
</div>
</div>

<script src="main.js"></script>


</body>
</html>