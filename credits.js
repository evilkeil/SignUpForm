const credit = document.querySelector('.credit');
const imageContainer = document.querySelector('.image-container');

function setCredits(){
    if(imageContainer.style.cssText="background-image: url(images/leo-maverick-Vb5xjkLaFXQ-unsplash.jpg);"){
        credit.innerHTML = 'Photo by<a href="https://unsplash.com/@leomaverick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3ELeo Maverick</a> on <a href="https://unsplash.com/photos/Vb5xjkLaFXQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3EUnsplash</a>';
    }else if(imageContainer.style.cssText=" background-image: url(images/marek-piwnicki-9celAnrs-BU-unsplash.jpg);"){
        credit.innerHTML ='Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3EMarek Piwnicki</a> on <a href="https://unsplash.com/photos/9celAnrs-BU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3EUnsplash</a>'
    }else if(imageContainer.style.cssText="background-image: url(images/sahil-moosa-q5O9V6yZFuk-unsplash.jpg);"){
        credit.innerHTML ='Photo by <a href="https://unsplash.com/ja/@sahilkv_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3ESahil Moosa</a> on <a href="https://unsplash.com/photos/q5O9V6yZFuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3EUnsplash</a>';
    }else if(imageContainer.style.cssText="background-image: url(images/tharoushan-kandarajah-KtDXt7DyfVM-unsplash.jpg);"){
        credit.innerHTML='Photo by <a href="https://unsplash.com/@tharoushan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3ETharoushan Kandarajah</a> on <a href="https://unsplash.com/photos/KtDXt7DyfVM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3EUnsplash</a>';
    }
}