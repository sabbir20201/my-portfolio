import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');

    }

    return (
        <div className='my-16'>
            <h1 className="text-center font-bold text-4xl my-7">My<span className="text-sky-400"> Projects </span> </h1>
            <LightGallery
                onInit={onInit}
                speed={500}
                width='300'
                plugins={[lgThumbnail, lgZoom]}
            >


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <a href="img/img1.jpg">
                        <img className='sm:w-full' alt="img1" src="https://i.ibb.co/mbfZPKy/1000-F-383918518-XWHxca-FVhzg37t1k-N3-Ro11f6-ME5-XC5-DZ.jpg" />
                    </a>
                    <a href="img/img1.jpg">
                        <img className='sm:w-full' alt="img1" src="https://i.ibb.co/Chr1wDN/Screenshot-230.png" />
                    </a>
                    <a href="img/img1.jpg">
                        <img className='sm:w-full' alt="img1" src="https://i.ibb.co/rpQRrKk/Screenshot-231.png" />
                    </a>
                    <div className="grid grid-cols-1 lg:col-span-2">
                        <a href="img/img1.jpg">
                            <img className='' alt="img1" src="https://i.ibb.co/hsQmYDc/Screenshot-232.png" />
                        </a>
                     
                    </div>
                    <a href="img/img1.jpg">
                        <img className='' alt="img1" src="https://i.ibb.co/gdkZcqS/Screenshot-233.png" />
                    </a>
                 
                </div>


                ...
            </LightGallery>

        </div>
    );
};

export default Gallery;