import React from 'react';

import './Card.css';
import {markHelper} from '../../helpers/matches.js'

export default function Card(props) {
  const {
    keyword,
    title,
    description,
    count,
    unit,
    step
  } = props;

  // Mark Helper Cals
  const titleMarked = markHelper(title, keyword)
  const descMarked = markHelper(description, keyword)

  // Display Quantity
  const steps = Math.round(count * step * 100) / 100; // Avoid Floating Point Problem
  const qty =
    (steps < 1 && unit === "kg") ?
      `${steps * 1000} gram`
      :
      `${steps} ${unit}`

  // TODO: @rekysenjaya Find multiple matches in a single string
  // TODO: @rekysenjaya Display multiple matches
  // TODO: @rekysenjaya Modularize display matches
  return (
    <li>
      <div className={"card" + (count ? " card-is-selected" : "")}>
        <div className="card-image">
          <img src={props.image} alt="Toko Profile" />
          {count &&
            <div className="card-image-overlay">
              <div className="card-image-overlay-qty">
                {qty}
              </div>
            </div>
          }
        </div>
        <div className="card-content">
          <div className="card-content-title">
            {titleMarked}
          </div>
          <div className="card-content-description">
            {descMarked}
          </div>
        </div>
        <div className="card-action">
          {!props.actionReverse ?
            <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
              Mulai Belanja <i className="material-icons">shopping_cart</i>
            </button>
            :
            <div>
              <div className="card-action-price-parent">
                <span className="card-action-price">
                  {`Rp ${props.price.toLocaleString('id')}`}
                </span>
                <span className="card-action-unit">
                  {` / ${props.unit}`}
                </span>
              </div>
              {count ?
                <div>
                  <button className="card-action-btn minus" onClick={(e) => props.actionReverse(props.id)}>
                    <i className="material-icons">remove</i>
                  </button>
                  <button className="card-action-btn plus" onClick={(e) => props.action(props.id)}>
                    <i className="material-icons">add</i>
                  </button>
                </div>
                :
                <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
                  Beli <i className="material-icons">add_shopping_cart</i>
                </button>
              }
            </div>
          }
        </div>
      </div>
    </li>
  )
}

Card.propTypes = {
  keyword: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  unit: React.PropTypes.string,
  step: React.PropTypes.number,
  price: React.PropTypes.number,
  action: React.PropTypes.func.isRequired,
  actionReverse: React.PropTypes.func,
  count: React.PropTypes.number
}
