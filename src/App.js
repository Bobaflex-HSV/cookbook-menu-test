import React from "react";
import "./style.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="page">
        <span className="menu_toggle">
          <i className="menu_open fa fa-bars fa-lg" />
          <i className="menu_close fa fa-times fa-lg" />
        </span>
        <ul className="menu_items">
          <li>
            <a href="#">
              <i className="icon fa fa-home fa-2x" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-globe fa-2x" /> Cuisine
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-list-ul fa-2x" /> Category
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-pagelines fa-2x" /> Only Vegan
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-smile-o fa-2x" /> Surprise me!
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-lemon-o fa-2x" /> Ingredients
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-pencil-square-o fa-2x" /> Add Recipe
            </a>
          </li>
        </ul>
        <main className="content">
          <div className="content_inner">
            <h1>Cretan Sfakia Pie</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              dolorem, ducimus laudantium, earum eos natus sint voluptatum
              dolores fuga quibusdam consectetur dicta. Laudantium enim
              inventore iusto ducimus est velit aperiam tempora quibusdam id
              dolore natus perferendis, debitis distinctio optio repellendus,
              repellat molestias delectus harum eius, reiciendis dicta ipsum
              architecto! Eligendi expedita in beatae, placeat unde voluptatibus
              voluptates consectetur explicabo laudantium, officiis ad nihil.
              Beatae similique voluptate sequi voluptatem delectus iure in
              omnis, fuga ipsam nulla ipsum architecto, iste debitis nisi labore
              quisquam odio accusantium corporis sint perspiciatis. Excepturi
              earum nobis soluta, doloremque nihil dolorum illum quaerat magnam
              nemo non sed!
            </p>

            <h3>Instructions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              dolorem, ducimus laudantium, earum eos natus sint voluptatum
              dolores fuga quibusdam consectetur dicta. Laudantium enim
              inventore iusto ducimus est velit aperiam tempora quibusdam id
              dolore natus perferendis, debitis distinctio optio repellendus,
              repellat molestias delectus harum eius, reiciendis dicta ipsum
              architecto! Eligendi expedita in beatae, placeat unde voluptatibus
              voluptates consectetur explicabo laudantium, officiis ad nihil.
              Beatae similique voluptate sequi voluptatem delectus iure in
              omnis, fuga ipsam nulla ipsum architecto, iste debitis nisi labore
              quisquam odio accusantium corporis sint perspiciatis. Excepturi
              earum nobis soluta, doloremque nihil dolorum illum quaerat magnam
              nemo non sed!
            </p>
            <h3>Ingredients</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              dolorem, ducimus laudantium, earum eos natus sint voluptatum
              dolores fuga quibusdam consectetur dicta. Laudantium enim
              inventore iusto ducimus est velit aperiam tempora quibusdam id
              dolore natus perferendis, debitis distinctio optio repellendus,
              repellat molestias delectus harum eius, reiciendis dicta ipsum
              architecto! Eligendi expedita in beatae, placeat unde voluptatibus
              voluptates consectetur explicabo laudantium, officiis ad nihil.
              Beatae similique voluptate sequi voluptatem delectus iure in
              omnis, fuga ipsam nulla ipsum architecto, iste debitis nisi labore
              quisquam odio accusantium corporis sint perspiciatis. Excepturi
              earum nobis soluta, doloremque nihil dolorum illum quaerat magnam
              nemo non sed!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
