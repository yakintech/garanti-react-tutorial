import React from "react";

function Menu() {
  let menus = [
    {
      title: "Ekmek Sepeti",
      description: "Taze pişmiş meyveli ekmekler ve muffin çeşitleri 5.50",
    },
    {
      title: "Meyveli Bademli Granola",
      description:
        "Bal ile kavrulmuş yulaf, kuru üzüm, badem ve hurma içeren doğal gevrek 7.00",
    },
    {
      title: "Belçika Waffle",
      description: "Malt unu ile vanilya aromalı hamur 7.50",
    },
    {
      title: "Çırpılmış Yumurta",
      description:
        "Kırmızı biber ve sarımsak ile çırpılmış yumurta, yeşil soğan ile 7.50",
    },
    {
      title: "Yaban Mersinli Pancake",
      description: "Şurup, tereyağı ve bol miktarda yaban mersini ile 8.50",
    },
  ];

  return (
    <>
      <div className="w3-row w3-padding-64" id="menu">
        <div className="w3-col l6 w3-padding-large">
          <h1 className="w3-center">Our Menu</h1>
          <br />
          {
            menus.map((menu, index) => (
              <div key={index}>
                <h4>{menu.title}</h4>
                <p className="w3-text-grey">{menu.description}</p>
                <br />
              </div>
            ))
          }
      
        </div>
        <div className="w3-col l6 w3-padding-large">
          <img
            src="https://www.w3schools.com/w3images/tablesetting.jpg"
            className="w3-round w3-image w3-opacity-min"
            alt="Menu"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Menu;
