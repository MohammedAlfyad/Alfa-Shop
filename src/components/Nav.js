function slider (){
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://cdn.shopify.com/s/files/1/2303/2711/files/Fashion_Photography_for_E-Commerce_How_to_Capture_Your_Model_and_Clothing_in_the_Best_Light_2.jpg?v=168470655" height="500" className="d-block w-100" alt="First Slide"/>
    </div>
    <div className="carousel-item">
    <img src="https://un.titled.com/app/uploads/2019/02/banner.jpeg" height="500" className="d-block w-100" alt="Second Slide"/>
    </div>
    <div className="carousel-item">
    <img src="https://www.bubblestranslation.com/wp-content/uploads/Top-5-International-Fashion-E-Commerce-Websites-Featured.jpg" height="500" className="d-block w-100" alt="Third Slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default slider;


