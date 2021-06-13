const prompt = require('prompt-sync')();
 
function generateRandomNumber(num){
    //gets a number from 0 -> num -> -1
    return Math.floor(Math.random() * num)
}

const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const wisdomPhrases = {
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck', 'a good week', 'love soon', 'everthing workout', 'many failures', 'lots of success'],
    advice: ['go out and eat', 'read more', 'play more', 'trust no one', 'spend time in the moment', 'take a deep breath', 'say I love you more', 'love everybody', 'go try something new', 'stay inside']
};

let randomHoroscope = [];
let whatIsYourSign = prompt('What is your sign? ');

let indexOfsign = signs.includes(whatIsYourSign);
if (indexOfsign){
    console.log(`For the ${whatIsYourSign} I think that...`);
};

for (let item in wisdomPhrases){
    let index = generateRandomNumber(wisdomPhrases[item].length);
    switch (item){
        case 'fortuneOutput':
            randomHoroscope.push(`You will have ${wisdomPhrases[item][index]} today.`)
            break
        case 'advice':
            randomHoroscope.push(`My adivce to you is to ${wisdomPhrases[item][index]}!`)
            break
        default:
            randomHoroscope.push('Tomorrow is a new day!')
            break
    }
};


function joinWisdomPharses(wisdom){
    //Joining phrases together to get a random horoscope
    const correctFormat =  randomHoroscope.join('\n');
    console.log(correctFormat);
}
joinWisdomPharses(randomHoroscope);
