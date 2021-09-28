var time = prompt('解答を見る秒数をご記入ください。(max 180)\n解答開閉ボット by のむチュウ', '');
if(isNaN(time)) {
  alert('入力されたものが数字ではありません');
} else if(Number(time)>180) {
  alert('数字が大きすぎます'); }
else if(time == '') {
  alert('何も入力されていません');
} else {
  drill.openExplainDialog(true);
  setTimeout(function() {
    drill.closeExplainDialog(true);
  },time*1000);
};
