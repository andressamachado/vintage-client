import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import imagePlaceholder from "../../assets/backgrounds/image-placeholder.png";
import "./upload-page.scss";

function UploadPage() {
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();

  let isFormValid = false;
  const notify = () => toast.success("Uploaded Successfully!");
  const notifyFormError = () => toast.warning("Form incomplete!");

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const onImageChange = (event) => {
    setImagePreview(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Creates the new product object to be uploaded
    const image = event.target.image_file.files[0];
    const title = event.target.title.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const category = event.target.category.value;

    // Checks if title and description fields were filled by the user
    isFormValid = !title || !description || !price || !category ? false : true;

    if (!isFormValid) {
      notifyFormError();
      return;
    }

    // post to backend
    const createProduct = async () => {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:5050/api/products/upload",
          { image, title, description, price, category },
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        return data.id;
      } catch (error) {
        console.log(error);
      }
    };

    let productId = await createProduct();
    // redirect to newly added product
    //navigate(`/products/${productId}`);
  };

  return (
    <main className="upload">
      <div className="upload__title">
        <h1>Upload your product</h1>
      </div>

      <div className="upload__main">
        <div className="upload__form-container">
          {/* Form fields: Title, upload image, description, price, cancel and upload buttons */}
          <form
            id="uploadForm"
            action="upload"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            {/* Image preview */}
            <div className="upload__image-preview-container">
              <div className="upload__image-preview">
                <label className="upload__label">
                  Image preview
                  <input
                    name="image_file"
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                  />
                </label>

                <div>
                  {/* If imagePreview was set, then transform the string URL to an object URL to be displayed */}
                  <img
                    src={
                      imagePreview
                        ? URL.createObjectURL(imagePreview)
                        : imagePlaceholder
                    }
                    alt="product image preview"
                  />
                </div>
              </div>
            </div>

            {/* title, description, and price */}
            <div className="upload__fields">
              <label className="upload__label">
                Price
                <input
                  type="text"
                  name="price"
                  placeholder="Add a price to your product"
                />
              </label>

              <label className="upload__label">
                Title your product
                <input
                  type="text"
                  name="title"
                  placeholder="Add a title to your product"
                />
              </label>

              <label className="upload__label">
                Category
                <input
                  type="text"
                  name="category"
                  placeholder="Add a category tag to your product"
                />
              </label>

              <label className="upload__label">
                product description
                <textarea
                  type="text"
                  name="description"
                  placeholder="Add a description to your product"
                />
              </label>
            </div>

            {/* publish and cancel buttons */}
            <div className="upload__buttons-container">
              <input type="submit" value="Upload!" />

              <button className="upload__cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* When the form is valid, display message it was successfuly uploaded and redirects to home page */}
      <ToastContainer
        closeOnClick
        onClose={() => {
          if (isFormValid) navigate("/");
        }}
        position="bottom-right"
        autoClose={4000}
        theme="colored"
      />
    </main>
  );
}

export default UploadPage;
