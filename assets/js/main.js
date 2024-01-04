function onClickAboutUs() {
  var description = document.getElementsByClassName("description-about-us");
  var more = document.getElementsByClassName("more-about-us");

  if (description.length == 0) return;
  if (more.length == 0) return;

  description = description[0];
  more = more[0];

  if (description.classList.contains('active')) {
    description.classList.remove('active');  ;
    more.style.display = "block";
    

  } else {
    description.classList.add('active');
    more.style.display = "none";

  }
}
