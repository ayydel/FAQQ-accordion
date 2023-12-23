const minusOne = document.getElementById('icon-minus1');
const minusTwo = document.getElementById('icon-minus2');
const minusThree = document.getElementById('icon-minus3');
const minusFour = document.getElementById('icon-minus4');
const plusOne = document.getElementById('icon-plus1');
const plusTwo = document.getElementById('icon-plus2');
const plusThree = document.getElementById('icon-plus3');
const plusFour = document.getElementById('icon-plus4');
const faqOne = document.getElementById('faq-one');
const faqTwo = document.getElementById('faq-two');
const faqThree = document.getElementById('faq-three');
const faqFour = document.getElementById('faq-four');

minusOne.onclick = () => {
    plusOne.style.display = 'block';
    minusOne.style.display = 'none';

    faqOne.style.display = 'none';

}

plusOne.onclick = () => {
    plusOne.style.display = 'none';
    plusTwo.style.display = 'block';
    plusThree.style.display = 'block';
    plusFour.style.display = 'block';
    minusOne.style.display = 'block';
    minusTwo.style.display = 'none';
    minusThree.style.display = 'none';
    minusFour.style.display = 'none';

    faqOne.style.display = 'block';
    faqTwo.style.display = 'none';
    faqThree.style.display = 'none';
    faqFour.style.display = 'none';
}

minusTwo.onclick = () => {
    plusTwo.style.display = 'block';
    minusTwo.style.display = 'none';

    faqTwo.style.display = 'none';

}

plusTwo.onclick = () => {
    plusOne.style.display = 'block';
    plusTwo.style.display = 'none';
    plusThree.style.display = 'block';
    plusFour.style.display = 'block';
    minusOne.style.display = 'none';
    minusTwo.style.display = 'block';
    minusThree.style.display = 'none';
    minusFour.style.display = 'none';

    faqOne.style.display = 'none';
    faqTwo.style.display = 'block';
    faqThree.style.display = 'none';
    faqFour.style.display = 'none';

}

minusThree.onclick = () => {
    plusThree.style.display = 'block';
    minusThree.style.display = 'none';

    faqThree.style.display = 'none';
}

plusThree.onclick = () => {
    plusOne.style.display = 'block';
    plusTwo.style.display = 'block';
    plusThree.style.display = 'none';
    plusFour.style.display = 'block';
    minusOne.style.display = 'none';
    minusTwo.style.display = 'none';
    minusThree.style.display = 'block';
    minusFour.style.display = 'none';

    faqOne.style.display = 'none';
    faqTwo.style.display = 'none';
    faqThree.style.display = 'block';
    faqFour.style.display = 'none';
}

minusFour.onclick = () => {
    plusFour.style.display = 'block';
    minusFour.style.display = 'none';

    faqFour.style.display = 'none';
}

plusFour.onclick = () => {
    plusOne.style.display = 'block';
    plusTwo.style.display = 'block';
    plusThree.style.display = 'block';
    plusFour.style.display = 'none';
    minusOne.style.display = 'none';
    minusTwo.style.display = 'none';
    minusThree.style.display = 'none';
    minusFour.style.display = 'block';

    faqOne.style.display = 'none';
    faqTwo.style.display = 'none';
    faqThree.style.display = 'none';
    faqFour.style.display = 'block';
}
