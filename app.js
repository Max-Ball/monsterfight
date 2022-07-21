const characters = {

  Hero: {
    health: 100,
  },

  Boss: {
    health: 100,
  }

}

let strength = 5

function drawCharacter() {
  let template = ' '
  for (let key in characters) {
    let character = characters[key]
    template += `
    <div id="${key}" class="col col-md-6 hero-side img-fluid d-flex align-items-center justify-content-center">
      <div class="hero-gif">
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
          aria-valuemin="0" aria-valuemax="100" style="width: ${character.health}%">${character.health}
          </div>
        </div>
        <img class="btn" onclick="attackBoss('Boss')"src="https://64.media.tumblr.com/2be0e1a591f35dc0fde50b155c9017a0/tumblr_o47dg7Niqw1tgzy56o1_r2_400.gifv" alt="" srcset="">
      </div>
      <h3>${key}</h3>
    </div>
    `
    let characterElm = document.getElementById("sprite")
    characterElm.innerHTML = template
    console.log(character);
  }


}

drawCharacter()

let bossHealth = 200
let nextBoss = 0
characters.Boss.health = 200
nextBoss = (characters.Boss.health / bossHealth) * 100

function drawNewBoss(){
  

  console.log(nextBoss);
  

  let template = ' '
    template += `
    <div id="Boss" class="col col-md-6 hero-side img-fluid d-flex align-items-stretch justify-content-center">
      <div class="hero-gif">
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
          aria-valuemin="0" aria-valuemax="200" style="width: nextBoss%">${characters.Boss.health}
          </div>
        </div>
        <img class="btn" onclick="attackBoss('Boss')"src="https://thiscatdoesnotexist.com" alt="" srcset="">
      </div>
      <h3>NEW BOSS</h3>
    </div>
    `
  let characterElm = document.getElementById("Boss")
  characterElm.innerHTML = template
}



function updateHealth(){

  let characterElm = document.getElementById("Hero")


  let heroHealth = characterElm.querySelector(".progress-bar")

  heroHealth.style.width = characters.Hero.health + "%"
  heroHealth.innerText = characters.Hero.health


  console.log(characters.Hero.health);
}




function attackBoss(name){
  let character = characters[name]

  character.health -= strength
  let characterElm = document.getElementById("Boss")

  let bossHealth = characterElm.querySelector(".progress-bar")

  bossHealth.style.width = characters.Boss.health + "%"
  bossHealth.innerText = characters.Boss.health

  if(characters.Boss.health <= 0){
    window.alert("Boss Dead")

    characters.Boss.health = 0
    drawNewBoss()
  }
}

function characterHealth(){
  // let character = characters[name]
  
  characters.Hero.health -= 5
  if (characters.Hero.health <= 0 ) {
    window.alert("You Dead")

    characters.Hero.health = 0
  }

  updateHealth()
}

// setInterval(characterHealth, 3000)


