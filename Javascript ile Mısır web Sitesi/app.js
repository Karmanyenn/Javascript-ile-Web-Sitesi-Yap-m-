

const main = document.querySelector(".main");

//Creating Header Element

let header = document.createElement("div");
header.style.minHeight = "5vh";
header.style.minWidth = "100vw";
header.style.background = "rgba(0, 0, 0, 0.5)";
header.style.position = "fixed";
header.style.zIndex = "1";


let logo = document.createElement("h2");
logo.textContent = "LOGO";
logo.style.fontSize = "2rem";
logo.style.letterSpacing = "3px";
logo.style.marginLeft = "20px";
logo.style.color = "white";

header.appendChild(logo);
main.appendChild(header);

// Creating Image Section with a button

let image = document.createElement("section");
image.id="home";
image.style.position = "absolute";
image.style.top = "0";
//image.style.zIndex="-1";
image.style.minHeight = "50vh";
image.style.minWidth = "100vw";
image.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), transparent), url('./images/1.jpg') no-repeat";

image.style.backgroundSize = "cover";
image.style.backgroundPosition = "top";
image.style.objectFit = "cover";
image.style.objectPosition = "center";
image.style.display = "flex";
image.style.justifyContent = "center";
image.style.alignItems = "center";
// image.style.cursor="pointer";

main.appendChild(image);


//CREATİNG SLOGAN


let Slogan = document.createElement("h1");
Slogan.textContent = "Explore Egypt Reservation";
Slogan.style.fontSize = "2rem";
Slogan.style.color = "white";
Slogan.style.letterSpacing = "2px";
Slogan.style.minWidth = "100vw";
Slogan.style.textAlign = "center";
Slogan.style.textShadow = "5px 5px 5px black";

image.appendChild(Slogan);


//Create Reservation Button

let button = document.createElement("div");
button.style.position = "absolute";
button.style.top = "70%";
button.style.padding = "0.5rem 2rem";
button.style.color = "white";
button.style.fontSize = "1.5rem";
button.style.border = "2px solid white";
button.textContent = "Explore Now";
button.style.cursor = "pointer";
image.appendChild(button);


//Creating Reservation Section

let sectionboking = document.createElement("section");
sectionboking.style.position = "absolute";
sectionboking.style.top = "50%";
sectionboking.style.height = "40vh";
sectionboking.style.minWidth = "100vw";
main.appendChild(sectionboking);


let booking = document.createElement("div");
booking.style.height = "100%";
booking.style.width = "50%";
booking.style.margin = "auto";
booking.style.display = "flex";
booking.style.justifyContent = "center";
sectionboking.appendChild(booking);


let imagediv = document.createElement("div");
imagediv.style.width = "600px";
imagediv.style.borderRight = "1px solid rgba(0,0,0,0.2)";
let imagebooking = document.createElement("img");
imagebooking.src = "./images/2.jpg";
imagebooking.style.height = "100%";
imagebooking.style.padding = "0.5rem 0.5rem";
imagediv.appendChild(imagebooking);
booking.appendChild(imagediv);


let inputdiv = document.createElement("div");
inputdiv.style.width = "600px";
inputdiv.style.padding = "0.5rem 2rem";
inputdiv.style.display = "flex";
inputdiv.style.flexDirection = "column";
inputdiv.style.justifyContent = "center";
inputdiv.style.alignItems = "center";

let inputinfos = ["Name", "Surname", "Phone", "Email"];
for (let i = 1; i <= 4; i++) {
    let input = document.createElement("input");
    input.placeholder = inputinfos[i - 1];
    input.style.padding = "0.5rem";
    input.style.outline = "none";
    input.style.border = "1px solid rgba(0,0,0,0.2)";
    input.style.fontSize = "1.5rem";
    input.style.marginTop = "20px";
    inputdiv.appendChild(input);
    booking.appendChild(inputdiv);
}


let submitbutton = document.createElement("div");
submitbutton.textContent = "SUBMİT";
submitbutton.style.padding = "0.5rem 5rem";
submitbutton.style.marginTop = "50px";
submitbutton.style.background = "green";
submitbutton.style.color = "white";
submitbutton.style.fontSize = "1.2rem";
submitbutton.style.fontWeight="bold";
submitbutton.style.letterSpacing = "5px";
submitbutton.style.cursor = "pointer";
inputdiv.appendChild(submitbutton);



//Creating Contact Section


let sectioncontact = document.createElement("section");
sectioncontact.style.position = "absolute";
sectioncontact.style.minHeight = "50vh";
sectioncontact.style.minWidth = "50vw";
sectioncontact.style.left = "50%";
sectioncontact.style.transform = "translateX(-50%)";
sectioncontact.style.top = "90%";
sectioncontact.style.marginTop = "20px";
sectioncontact.style.borderTop = "1px solid rgba(0,0,0,0.2)";
main.appendChild(sectioncontact);


let contact = document.createElement("div");
contact.style.position = "absolute";
contact.style.minWidth = "50vw";
contact.style.minHeight = "100%";
contact.style.display = "flex";
contact.style.flexDirection = "column";
contact.style.textAlign = "center";
contact.style.alignItems = "center";

sectioncontact.appendChild(contact);

let contactheader = document.createElement("h1");
contactheader.style.letterSpacing = "5px";
contactheader.style.fontSize = "5rem";
contactheader.style.opacity = "0.4";
contactheader.textContent = "CONTACT";
contact.appendChild(contactheader);


let addressparagraph = document.createElement("p");
addressparagraph.style.width = "25%";
addressparagraph.textContent = "Address: ******* *** ***** *** *** *** ****** *** **** ** ***** *";
contact.appendChild(addressparagraph);



let phoneparagraph = document.createElement("p");
phoneparagraph.style.width = "50%";
phoneparagraph.textContent = "Phone: **** *** ** **";
contact.appendChild(phoneparagraph);



let emailparagraph = document.createElement("p");
emailparagraph.style.width = "50%";
emailparagraph.textContent = "E-mail Address: info@*****.com";
contact.appendChild(emailparagraph);



document.querySelectorAll("p").forEach((item) => {
    item.style.marginTop="20px";
})
