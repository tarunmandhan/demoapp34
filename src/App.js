import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text-center text-danger text-capitalize my-5">
        Welcome to Tarun Gallery{" "}
      </h1>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/200/302"
                className="card-img-top"
                alt="..."
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title">Pic 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Click here
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/102/402"
                className="card-img-top"
                alt="..."
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title">Pic 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Click here
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/201/500?grayscale"
                className="card-img-top"
                alt="..."
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title">Pic 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
