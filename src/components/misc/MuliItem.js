
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MultiItem.css"
function MultiItem() {
    return (
        <>

            <div
                id="carouselMultiItemExample"
                class="carousel slide carousel-dark text-center"
                data-mdb-ride="carousel"
            >

                <div class="carousel-inner py-4">

                    <div class="my-item active">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                            class="card-img-top"
                                            alt="Waterfall"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="src/components/misc/MuliItem#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="src/components/misc/MuliItem#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                            class="card-img-top"
                                            alt="Sunset over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <a href="src/components/misc/MuliItem#!" class="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
}

export default function ItemsCarousel() {
    return (
        <>
            <MultiItem/>
        </>);
}