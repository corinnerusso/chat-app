import React from "react";
import Contact from './Contacts'

const persons = [
    {
      quote:"I am a good detective",
      name: "Sherlock Holmes",
      image:
        "https://fsmedia.imgix.net/8d/2e/cc/37/6ca2/41c7/81cc/8c9a28f2dfbc/cumberbatch-holmesjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650",
      status:"online"
    },
    {
      quote: "I  am a strange detectice",
      name: "Colombo",
      image:
        "http://fr.web.img3.acsta.net/c_216_288/medias/nmedia/18/35/78/85/18642871.jpg",
      status : "offline"
      
    },
    {
      quote: "I am not a detective",
      name: "Snoopy",
      image:
        "https://vignette.wikia.nocookie.net/peanuts/images/3/3e/Snoopytrans.png/revision/latest?cb=20190808004420",
      status :"online"
    },
    {
      quote:"I am a warrior",
      name: "Kratos",
      image:
        "https://www.nautiljon.com/images/jeuxvideo_persos/00/30/kratos_3203.jpg",
      status : "offline"
    },
    {
      quote:"I am an octopus",
      name: "Cthlhu",
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-f15KFaFTB_oBjcokPKNYCrLUBKyxXKT7NdYQBTiQoyTqlQ7g",
      status :"online"
      }

  ];


  const PersonList = () => (
    <div>
      {persons.map(item => (
         <Contact quote={item.quote} image={item.image} name={item.name} status={item.status}/>
      ))}
    </div>
  );
  


export default PersonList