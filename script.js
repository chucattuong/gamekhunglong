const character = document.getElementById('character');
const block = document.getElementById('block');

function jump(){
  if(character.classList != 'animate'){
    // thêm class animate
    character.classList.add('animate')
  }
  // gọi hàm settimeout để character không bị nhảy liên tục
  setTimeout(function(){
    // xóa class animate sau 500ms
    character.classList.remove('animate')
  },500)
} 

var checkDead = setInterval(function() {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
  if(blockLeft<22 && blockLeft>0 && characterTop>=350){
    block.style.animation = "none"
    block.style.display = "none"
    alert('u lose .')
  }
}, 10);