
//class constructor.
class Pet {
    constructor(hunger, sleepiness, happiness, boredom, age) {
        this.hunger = hunger,
            this.sleepiness = sleepiness,
            this.happiness = happiness,
            this.boredom = boredom,
            this.age = age
    }
};
//instantiate a new pet!
const pet = new Pet(0, 0, 0, 0, 0);
console.log(pet);
//hide all button to focus attention on input.
$('.feed').hide()
$('.play').hide()
$('p').hide()
$('.lights').hide()
$('.time').hide()
$('.start').hide()
$('.reset').hide()
$('#bear').hide()

//flash input form to get the users attention in a subtle way.
$('#input-name').fadeTo(100, 0.3, function () {
    $(this).fadeTo(500, 1.0);
    $(this).fadeTo(100, 0.3);
    $(this).fadeTo(500, 1.0);
    $(this).fadeTo(100, 0.3);
    $(this).fadeTo(500, 1.0);
});
//show other buttons after name is entered.
$('form').on('submit', (e) => {
    //to stop page refresh.
    e.preventDefault();
    const inputValue = $('#input-name').val();
    $('h1').text(`Lil'  ${inputValue}`)
    $('#bear').show()
    $('.feed').show()
    $('.play').show()
    $('p').show()
    $('.lights').show()
    $('.time').show()
    $('.start').show()
    $('.reset').show()
//hide input.
    $('form').hide()
    $('.btn-wrapper').hide()
});
//timer function.
let timePassing;
let seconds = 0;
let minutes = 0;
const secondsGoUp = () => {
//track minutes and seconds.
//show seconds on the screen.
//this function controls any features that change over time.
    seconds++;
    $('.time').text(seconds)
//seconds up
    if (seconds % 60 === 0) {
        minutes++;
        $('.minutes').text(minutes);
        showScoreboard()
//age up
    }if (seconds % 10 === 0) {
        pet.age++
        $('.age, h2').text(`AGE: ${pet.age}`);
        showScoreboard()
//that new blue adult fur is comming in
    }if (pet.age === 1) {
        $("#bear").css("filter", "saturate(.5)")
        showScoreboard()
    }if (pet.age === 3) {
        $("#bear").css("filter", "saturate(1)")
        showScoreboard()
//boredom up
    }if(seconds%3===0){
        if (pet.boredom <= 10)
        pet.boredom++
        $('.bored, h2').text(`BOREDOM: ${pet.boredom}`);
        showScoreboard()
//hunger up
    }if (seconds%2 ===0) {
        pet.hunger++
        if (pet.happiness > 0)
        {pet.happiness--}
        showScoreboard()
//getting too hungry!
    }if (pet.hunger > 5) {
      $('#bear').attr('src', 'images/sadBear.gif')
      showScoreboard()
//too bored
    }if (pet.boredom > 5){
        $('#bear').attr('src', 'images/dyingBear.gif')
        showScoreboard()
//wayy too hungry
    }if (pet.hunger > 8 || pet.happiness > 8) {
        $('#bear').attr('src', 'images/deadBear.gif')
        showScoreboard()
    }if(pet.hunger === 10) {
        alert("OH NO! You've neglected your lil' pet! \nThe vet has been called. \nYou can no longer be trusted with the care of this lil' pet. \n\nGAME OVER");
        location.reload();
    }
    if(pet.boredom === 10) {
        alert("OH NO! You've neglected your lil' pet! \nThe vet has been called. \nYou can no longer be trusted with the care of this lil' pet. \n\nGAME OVER");
        location.reload();
    }
    if (seconds === 59) {
        $('#bear').attr('src', 'images/deadBear.gif')
        $('.btn-wrapper').hide()
        $('.feed').hide();
        $('.play').hide();
        $('p').hide();
        $('.lights').hide();
        $('.time').text(seconds).hide()
    }if (seconds ===60){
        alert("Congratulations! \n Your lil' pet had very happy life!\nbut now he is old and very tired.\n\nGAME OVER\nYOU WIN!");
        location.reload();
    }
}

const showScoreboard = () => {
    $('.hunger, h2').text(`HUNGER: ${pet.hunger}`);
    $('.bored, h2').text(`BOREDOM: ${pet.boredom}`);
    $('.happy, h2').text(`HAPPINESS: ${pet.happiness}`);
    $('.sleep, h2').text(`SLEEPINESS: ${pet.sleepiness}`);
    $('.age, h2').text(`AGE: ${pet.age}`);
}

//start button starts the timer.
$('.start').click(function () {
    $('.btn-wrapper').show()
    $('.time').text("LET'S GO!")
    secondsGoUp();
    timePassing = setInterval(secondsGoUp, 1000);
    showScoreboard();
    $('.feed').show();
    $('.play').show();
    $('p').show();
    $('.lights').show();
    $('#bear').attr('src', 'images/flappingBlue.gif')  
})
//reset function refreshes the page 
//**WORKS FOR MVP, BUT NOT THE BEST SOLUTION, LOOK AT IT AGAIN LATER***
$('.reset').click(function () {
    location.reload();
});
//BUTTONS

//FEED
//show stats
//hunger goes down
//happiness goes up
//bear dances
$('.feed').click(function () {
if ((pet.hunger>=1)&&(pet.hunger<=10)){
    pet.hunger = pet.hunger - 1
    $('#bear').attr('src', 'images/dancingBear.gif')
if (pet.happiness < 10 && pet.happiness >= 1) {
        pet.happiness = pet.happiness + 1
    }
    $('#bear').attr('src', 'images/dancingBear.gif')
    $('.hunger, h2').text(`HUNGER: ${pet.hunger}`)
    $('.bored, h2').text(`BOREDOM: ${pet.boredom}`)
    $('.happy, h2').text(`HAPPINESS: ${pet.happiness}`)
    $('.sleep, h2').text(`SLEEPINESS: ${pet.sleepiness}`)
    $('.age, h2').text(`AGE: ${pet.age}`)

console.log(pet)
console.log('clicked feed')
    }
})
//PLAY
//boredom goes down
//happiness goes up
//bear dances
$('.play').click(function () {
    if ((pet.boredom >=1) && (pet.boredom <= 10)) {
        pet.boredom = pet.boredom- 1
    if (pet.happiness <10 && pet.happiness >=1){ pet.happiness = pet.happiness +1}
    $('#bear').attr('src', 'images/dancingBear.gif')
    $('.hunger, h2').text(`HUNGER: ${pet.hunger}`)
    $('.bored, h2').text(`BOREDOM: ${pet.boredom}`)
    $('.happy, h2').text(`HAPPINESS: ${pet.happiness}`)
    $('.sleep, h2').text(`SLEEPINESS: ${pet.sleepiness}`)
    $('.age, h2').text(`AGE: ${pet.age}`)
    }
})
//LIGHTS
//should toggle lights off and on
//lights on should make sleepiness go up with time
//lights off should let pet sleep until sleepiness goes back down
//just an off button for now
//MVP- turns lights off only
//css has toggle commented out waiting for jQuery functionality
$('.lights').click(function () {
    $('#background').attr('src', 'images/background night.jpeg')
    pet.sleepiness = pet.sleepiness + 10
})
        

