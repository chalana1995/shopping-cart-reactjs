import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const Filter = () => {

    const [rate, setRate] = useState(1)

    const { productState, productDispatch } = CartState()

    return (
        <div className='filters'>
            <span className='title'>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={productState.sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={productState.sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_STOCK",
                        })
                    }
                    checked={productState.byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_DELIVERY",
                        })
                    }
                    checked={productState.byFastDelivery}
                />
            </span>
            <span>
                <labe style={{ paddingRight: 10 }}>Ratin :</labe>
                <Rating rating={productState.byRating} onClick={(i) => productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i + 1
                })} style={{ cursor: "pointer" }} />
            </span>
            <Button variant="light" onClick={() =>
                productDispatch({
                    type: "CLEAR_FILTERS",
                })
            }>Clear Filters</Button>
        </div>
    )
}

export default Filter