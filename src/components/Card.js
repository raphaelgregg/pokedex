function Card (name, imageUrl){
  const Card = document.createElement('a');
  const InfoBox = document.createElement('div');
  const Title = document.createElement('h4');
  const ImageBox = document.createElement('div');
  const Image = document.createElement('img');

  Card.classList.add('card');
  InfoBox.classList.add('poke-info');
  ImageBox.classList.add('poke-image');

  Card.append(InfoBox);
  InfoBox.append(Title);
  Card.append(ImageBox);
  ImageBox.append(Image);

  Title.innerHTML = name;
  Image.src = imageUrl;
  Image.alt = name;

 
  return Card;
}

export default Card;