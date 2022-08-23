const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 20;

const enteredValue = prompt('Maximum life for player and monster.','100');

let chosenMaxLIfe = parseInt(enteredValue);
if(isNaN(chosenMaxLIfe) || chosenMaxLIfe <= 0){
    chosenMaxLIfe = 100;
}
let currentMonsterHealth = chosenMaxLIfe;
let currentPlayerHealth = chosenMaxLIfe;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLIfe);

function reset(){
    currentPlayerHealth = chosenMaxLIfe;
    currentMonsterHealth = chosenMaxLIfe;
    resetGame(chosenMaxLIfe);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert("You'd be dead, but bonus life saved you");
        setPlayerHealth(initialPlayerHealth);
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth>0){
        alert('You won');
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth>0){
        alert('you lost');
    }else if(currentMonsterHealth <= 0 && currentPlayerHealth<=0){
        alert('DRAW !!');
    }

    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
        reset();
    }
}

function attackMonster(attackMode){
    let maxDamage;
    if(attackMode === "ATTACK"){
        maxDamage = ATTACK_VALUE;
    }else{
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler(){
    attackMonster("ATTACK");
}

function strongAttackHandler(){
    attackMonster("STRONG_ATTACK");
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth > chosenMaxLIfe - HEAL_VALUE){
        alert("You can't heal beyond the max health");
        healValue = chosenMaxLIfe - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    endRound();
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener("click",healPlayerHandler);