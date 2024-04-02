let currentImageIndex = 0;
const images = [
    document.getElementById('image1'),
    document.getElementById('image2'),
    document.getElementById('image3')
];

const sliderImages = [
    document.getElementById('sliImg1'),
    document.getElementById('sliImg2'),
    document.getElementById('sliImg3'),
    document.getElementById('sliImg4'),
    document.getElementById('sliImg5'),
    document.getElementById('sliImg6'),
    document.getElementById('sliImg7'),
    document.getElementById('sliImg8'),
    document.getElementById('sliImg9')
]

const totalSteps = 5;
const transitionDuration = 500;
const stepDuration = transitionDuration / totalSteps;
const slider = document.querySelector('.slider');

function changeImage(direction) {
    const nextImageIndex = direction === 'prev' ? (currentImageIndex - 1 + images.length) % images.length : (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 0;

    for (let i = 1; i <= totalSteps; i++) {
        setTimeout(() => {
            images[nextImageIndex].style.opacity = i / totalSteps;
        }, i * stepDuration);
    }
    currentImageIndex = nextImageIndex;

    // slider change 
    const newOrder = [];
    for (let i = 0; i < sliderImages.length; i++) {
        debugger
        const newIndex = (currentImageIndex + i) % sliderImages.length;
        newOrder.push(newIndex + 1);
    }

    // Update the --i custom property of each .imgBx element
    sliderImages.forEach((image, index) => {
        image.parentElement.style.setProperty('--i', newOrder[index]);
    });

    images.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    if (currentImageIndex === 0) {
        document.querySelector('.sidecard').style.backgroundColor = '#DDFFBC';
        document.querySelector('#prev').style.backgroundColor = '#5CAC0E';
        document.querySelector('#next').style.backgroundColor = '#5CAC0E';
        document.querySelector('#khana').style.color = '#5CAC0E';
        document.querySelector('#contact').style.backgroundColor = '#5CAC0E';
    } else if (currentImageIndex === 1) {
        document.querySelector('.sidecard').style.backgroundColor = '#FEA150';
        document.querySelector('#prev').style.backgroundColor = '#FEA150';
        document.querySelector('#next').style.backgroundColor = '#FEA150';
        document.querySelector('#khana').style.color = '#FEA150';
        document.querySelector('#contact').style.backgroundColor = '#FEA150';
    } else if (currentImageIndex === 2) {
        document.querySelector('.sidecard').style.backgroundColor = '#FF8989';
        document.querySelector('#prev').style.backgroundColor = '#FF8989';
        document.querySelector('#next').style.backgroundColor = '#FF8989';
        document.querySelector('#khana').style.color = '#FF8989';
        document.querySelector('#contact').style.backgroundColor = '#FF8989';
    }
}

images.forEach((image, index) => {
    if (index !== 0) {
        image.style.display = 'none';
        image.style.opacity = 0;
    }
});

// slider default 
sliderImages.forEach((image, index) => {
    image.parentElement.style.setProperty('--i', index + 1);
});

document.querySelector('.sidecard').style.backgroundColor = '#DDFFBC';
document.querySelector('#prev').style.backgroundColor = '#5CAC0E';
document.querySelector('#next').style.backgroundColor = '#5CAC0E';
document.querySelector('#khana').style.color = '#5CAC0E';
document.querySelector('#contact').style.backgroundColor = '#5CAC0E';
