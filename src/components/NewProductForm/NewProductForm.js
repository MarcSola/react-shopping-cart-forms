import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import Input from "../Input";
import Button from "../Button";

function addProductDetails(product) {
  return {
    id: uuid(),
    ...product,
    quantity: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: {
      upVotes: {
        upperLimit: 10,
        currentValue: 0,
      },
      downVotes: {
        lowerLimit: 10,
        currentValue: 0,
      },
    },
    author: {
      id: uuid(),
      ...product.author,
    },
  };
}

class NewProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: 0,
      img: "",
      shortDescription: "",
      longDescription: "",
      unitsInStock: 0,
      author: {
        firstName: "",
        lastName: "",
        email: "",
      },
      // errors: {},
    };

    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handlePriceInputChange = this.handlePriceInputChange.bind(this);
    this.handleImgInputChange = this.handleImgInputChange.bind(this);
    this.handleImgInputChange = this.handleImgInputChange.bind(this);
    this.handleShortDescriptionInputChange = this.handleShortDescriptionInputChange.bind(
      this,
    );
    this.handleLongDescriptionInputChange = this.handleLongDescriptionInputChange.bind(
      this,
    );
    this.handleUnitsInStockInputChange = this.handleUnitsInStockInputChange.bind(
      this,
    );
    this.handleAuthorFirstNameInputChange = this.handleAuthorFirstNameInputChange.bind(
      this,
    );
    this.handleAuthorLastNameInputChange = this.handleAuthorLastNameInputChange.bind(
      this,
    );
    this.handleAuthorEmailInputChange = this.handleAuthorEmailInputChange.bind(
      this,
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { saveNewProduct } = this.props;
    const productData = this.state;
    const newProduct = addProductDetails(productData);
    saveNewProduct(newProduct);
  }

  handleTitleInputChange(event) {
    this.setState({ title: event.target.value });
  }

  handlePriceInputChange(event) {
    this.setState({ price: Number(event.target.value) });
  }

  handleImgInputChange(event) {
    this.setState({ img: event.target.value });
  }

  handleShortDescriptionInputChange(event) {
    this.setState({ shortDescription: event.target.value });
  }

  handleLongDescriptionInputChange(event) {
    this.setState({ longDescription: event.target.value });
  }

  handleUnitsInStockInputChange(event) {
    this.setState({
      unitsInStock: Number(event.target.value),
    });
  }

  handleAuthorFirstNameInputChange(event) {
    this.setState({
      author: {
        firstName: event.target.value,
      },
    });
  }

  handleAuthorLastNameInputChange(event) {
    this.setState({
      author: {
        lastName: event.target.value,
      },
    });
  }

  handleAuthorEmailInputChange(event) {
    this.setState({
      author: {
        email: event.target.value,
      },
    });
  }

  render() {
    const {
      title,
      price,
      img,
      shortDescription,
      longDescription,
      unitsInStock,
      author,
      // errors,
    } = this.state;

    const { toggleNewProductForm } = this.props;

    return (
      <div className="row mb-4 mt-2">
        <div className="col col-10">
          <div className="row justify-content-between">
            <div className="col col-8">
              <h2>New product</h2>
            </div>
            <div className="col col-4 ml-auto d-flex justify-content-end">
              <Button onClick={toggleNewProductForm}>Close form</Button>
            </div>
          </div>
          <hr />
        </div>
        <div className="col col-10">
          <form onSubmit={this.handleSubmit}>
            <Input
              id={title}
              type="text"
              label="Product title"
              value={title}
              handleChange={this.handleTitleInputChange}
            />
            <Input
              type="number"
              label="Price"
              id={price}
              value={price}
              handleChange={this.handlePriceInputChange}
            />
            <Input
              id={img}
              type="text"
              label="Img"
              value={img}
              handleChange={this.handleImgInputChange}
            />
            <Input
              id={shortDescription}
              type="text"
              label="shortDescription"
              value={shortDescription}
              handleChange={this.handleShortDescriptionInputChange}
            />
            <Input
              id={longDescription}
              type="text"
              label="longDescription"
              value={longDescription}
              handleChange={this.handleLongDescriptionInputChange}
            />
            <Input
              id={unitsInStock}
              type="number"
              label="unitsInStock"
              value={unitsInStock}
              handleChange={this.handleUnitsInStockInputChange}
            />
            <Input
              id={author.firstName}
              type="text"
              label="author.firstName"
              value={author.firstName}
              handleChange={this.handleAuthorFirstNameInputChange}
            />
            <Input
              id={author.lastName}
              type="text"
              label="author.lastName"
              value={author.lastName}
              handleChange={this.handleAuthorLastNameInputChange}
            />
            <Input
              id={author.email}
              type="text"
              label="author.email"
              value={author.email}
              handleChange={this.handleAuthorEmailInputChange}
            />
            <Button submitButton block>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewProductForm;
