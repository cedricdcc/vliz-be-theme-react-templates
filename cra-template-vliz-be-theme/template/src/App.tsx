import React from 'react';
import DefaultLayout from './layouts/default';
import ItemListBlockColored from './components/item/list/block/colored/main';
import ItemListCardColored from './components/item/list/card/colored/main';
import ItemListCarrouselBlock from './components/item/list/carrousel/block/main';
import ItemListGallery from './components/item/list/gallery/main';
import ItemListRowTextImage from './components/item/list/row/text_image/main';

function App() {

  let itemlist = {"title":"subtile title",
  "items":[
            {"title": "item 1","clickthrough_url":"/test"},
            {"title": "item 2"},
            {"title": "item 3","clickthrough_url":"/tes2"},
            {"title": "item 4"},
            {"title": "item 5","clickthrough_url":"/tes3"},
            {"title": "item 6"}
          ]
  }

  let gallery = {
    "title": "gallery example",
    "items": [
      {
        "title": "item 1",
        "clickthrough_url": "/test",
        "description": "item 1 description",
        "image": "/assets/media/img/placeholder.png",
        "date": "2019-01-01"
      },
      {
        "title": "item 2",
        "clickthrough_url": "/test",
        "description": "item 2 description",
        "image": "/assets/media/img/placeholder.png"
      },
      {
        "title": "item 3",
        "clickthrough_url": "/test",
        "description": "item 3 description",
        "image": "/assets/media/img/placeholder.png"
      }
    ]
  }

  


  return (
    <>
      <DefaultLayout>
        <ItemListBlockColored items={itemlist.items} />
        <ItemListCardColored item={itemlist} />
        <ItemListCarrouselBlock item={itemlist} />
        <ItemListGallery item={gallery} />
      </DefaultLayout>
    </>
  );
}

export default App;
